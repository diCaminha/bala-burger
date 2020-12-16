import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 2,
      meet: 1,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls />
      </Aux>
    );
  }
}
