import React, { useContext, useReducer, createContext, useEffect } from "react";
import {
  EActionTypes,
  IAddToCartAction,
  IInitializeCartAction,
} from "../actions";
import { IAppState } from "../types";

const initialStateValue: IAppState | undefined = {
  cart: {
    items: [],
  },
};

export const AppStateContext = createContext(initialStateValue);

export const AppDispatchContext = createContext<
  React.Dispatch<IAddToCartAction> | undefined
>(undefined);

export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);

  if (!dispatch) {
    throw new Error(
      "`useStateDispatch` was called outside of the `AppDispatchContext"
    );
  }

  return dispatch;
};

const reducer = (
  state: IAppState,
  action: IAddToCartAction | IInitializeCartAction
): IAppState => {
  switch (action.type) {
    case EActionTypes.addToCart:
      const itemToAdd = action.payload.item;
      const itemExists = state.cart.items.find(
        (toCheck) => toCheck.id === itemToAdd.id
      );

      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExists
            ? state.cart.items.map((toCheck) => {
                if (toCheck.id === itemToAdd.id) {
                  return { ...toCheck, quantity: toCheck.quantity + 1 };
                }
                return toCheck;
              })
            : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
        },
      };

    case EActionTypes.initializeCart:
      return { ...state, cart: action.payload.cart };

    default:
      return state;
  }
};

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStateValue);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      dispatch({
        type: EActionTypes.initializeCart,
        payload: { cart: JSON.parse(cart) },
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
