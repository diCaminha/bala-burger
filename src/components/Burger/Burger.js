import React from "react";

import clases from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const transfIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className="{classes.Burger}">
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
