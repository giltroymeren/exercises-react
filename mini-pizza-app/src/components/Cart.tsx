import React, { useState } from "react";
import { AppStateContext } from "./AppState";
import CartCSS from "./Cart.module.css";

interface IProps {}

const Cart: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  return (
    <AppStateContext.Consumer>
      {(state) => {
        const itemsCount = state.cart.items.reduce((sum, item) => {
          return sum + item.quantity;
        }, 0);
        return (
          <div className={CartCSS.cartContainer}>
            <button
              className={CartCSS.button}
              type="button"
              onClick={handleClick}
            >
              <span>{itemsCount} pizza(s)</span>
            </button>
            <div
              className={CartCSS.cartDropDown}
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <ul>
                {state.cart.items.map((pizza) => {
                  return (
                    <li key={pizza.id}>
                      {pizza.name} &times; {pizza.quantity}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }}
    </AppStateContext.Consumer>
  );
};

export default Cart;
