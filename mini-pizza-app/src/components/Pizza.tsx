import React from "react";
import { IPizza } from "../types";
import { useAddToCart, WithAddToCartProps } from "./AddToCart";
import PizzaCSS from "./Pizza.module.css";

interface IProps {
  item: IPizza;
}

const Pizza: React.FC<IProps> = ({ item }) => {
  const addToCart = useAddToCart();
  return (
    <li className={PizzaCSS.container}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>
        $ <span>{item.price}</span>
      </p>

      <button type="button" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </li>
  );
};

export default Pizza;
