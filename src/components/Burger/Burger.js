import React from 'react';

import clases from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className="{classes.Burger}">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;