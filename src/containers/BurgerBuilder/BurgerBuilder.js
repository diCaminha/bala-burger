import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 1.0,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 2,
      meet: 1,
    },
    totalPrice: 0.0,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = [...this.state.ingredients];

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = [...this.state.ingredients];

    updatedIngredients[type] = updatedCount;
    const priceToDecrease = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceToDecrease;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}
