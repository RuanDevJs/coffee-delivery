export interface Coffee {
  _id: string;
  name: string;
  description: string;
  category: string[];
  img: string;
  price: number;
  quantity: number;
}

export interface State {
  shopping_cart: Coffee[];
}

export interface Dispatch {
  type:
    | "ADD_COFFEE_IN_SHOPPING_CART"
    | "REMOVE_COFFEE_IN_SHOPPING_CART"
    | "EXCLUDE_COFFEE_IN_SHOPPING_CART"
    | "BUY_COFFEE_IN_SHOPPING_CART";
  payload: {
    data: Coffee;
  };
}

export enum ActionTypes {
  ADD_COFFEE_IN_SHOPPING_CART = "ADD_COFFEE_IN_SHOPPING_CART",
  REMOVE_COFFEE_IN_SHOPPING_CART = "REMOVE_COFFEE_IN_SHOPPING_CART",
  EXCLUDE_COFFEE_IN_SHOPPING_CART = "EXCLUDE_COFFEE_IN_SHOPPING_CART",
  BUY_COFFEE_IN_SHOPPING_CART = "BUY_COFFEE_IN_SHOPPING_CART",
}
