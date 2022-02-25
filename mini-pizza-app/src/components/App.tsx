import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialOfferPizza = pizzas.find((item) => item.specialOffer);

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <h1 className={AppCSS.siteTitle}>
            Delicious and freshly-cooked pizzas daily!
          </h1>

          <Cart />
        </div>

        {specialOfferPizza && <SpecialOffer item={specialOfferPizza} />}

        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} item={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
