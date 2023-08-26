import { ActionTypes, Coffee, Dispatch } from "./types";

export function ADD_COFFEE_IN_SHOPPING_CART(coffee: Coffee): Dispatch {
  return {
    type: ActionTypes.ADD_COFFEE_IN_SHOPPING_CART,
    payload: {
      data: coffee,
    },
  };
}

export function REMOVE_COFFEE_IN_SHOPPING_CART(coffee: Coffee): Dispatch {
  return {
    type: ActionTypes.REMOVE_COFFEE_IN_SHOPPING_CART,
    payload: {
      data: coffee,
    },
  };
}

export function EXCLUDE_COFFEE_IN_SHOPPING_CART(coffee: Coffee): Dispatch {
  return {
    type: ActionTypes.EXCLUDE_COFFEE_IN_SHOPPING_CART,
    payload: {
      data: coffee,
    },
  };
}

export function CLEAR_SHOPPING_CART() {
  return {
    type: ActionTypes.CLEAR_SHOPPING_CART,
  };
}
