import { ActionTypes, Coffee } from "./types";

export function ADD_COFFEE_IN_SHOPPING_CART(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_SHOPPING_CART,
    payload: {
      data: coffee,
    },
  };
}

export function REMOVE_COFFEE_IN_SHOPPING_CART(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE_IN_SHOPPING_CART,
    payload: {
      data: coffee,
    },
  };
}
