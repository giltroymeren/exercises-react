import React from "react";
import { EActionTypes } from "../actions";
import { ICartItem } from "../types";
import { useStateDispatch } from "./AppState";

export interface IAddToCartProps {
  addToCart: (item: Omit<ICartItem, "quantity">) => void;
}

export function withAddToCart<OriginalProps extends IAddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const addToCartHOC = (props: Omit<OriginalProps, keyof IAddToCartProps>) => {
    const dispatch = useStateDispatch();
    const addToCart: IAddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: EActionTypes.addToCart,
        payload: {
          item,
        },
      });
    };

    return (
      <ChildComponent {...(props as OriginalProps)} addToCart={addToCart} />
    );
  };

  return addToCartHOC;
}

export const WithAddToCartProps: React.FC<{
  children: (props: IAddToCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: IAddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: EActionTypes.addToCart,
      payload: {
        item,
      },
    });
  };

  return children({ addToCart });
};

export const useAddToCart = () => {
  const dispatch = useStateDispatch();
  const addToCart: IAddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: EActionTypes.addToCart,
      payload: {
        item,
      },
    });
  };

  return addToCart;
};
