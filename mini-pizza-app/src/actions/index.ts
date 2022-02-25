import { IAppState, ICartItem } from "../types";

interface IAction<T> {
  type: T;
}

export enum EActionTypes {
  "addToCart",
  "initializeCart"
}

export interface IAddToCartAction extends IAction<EActionTypes.addToCart> {
  payload: {
    item: Omit<ICartItem, "quantity">;
  };
}

export interface IInitializeCartAction extends
  IAction<EActionTypes.initializeCart> {
  payload: {
    cart: IAppState['cart']
  }
}