import React from "react";
import { IPizza } from "../types";
import { useAddToCart, WithAddToCartProps } from "./AddToCart";
import SpecialOfferCSS from "./SpecialOffer.module.css";

interface IProps {
  item: IPizza;
}

const SpecialOffer: React.FC<IProps> = ({ item }) => {
  const addToCart = useAddToCart();

  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>
        $ <span>{item.price}</span>
      </p>

      <button type="button" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default SpecialOffer;
