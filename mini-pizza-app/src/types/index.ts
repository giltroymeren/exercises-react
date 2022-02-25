export interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IAppState {
  cart: {
    items: ICartItem[];
  };
}

export interface IPizza {
  id: number;
  name: string;
  description: string;
  price: number;
  specialOffer?: boolean | undefined
}