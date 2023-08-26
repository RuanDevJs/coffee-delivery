import { produce } from "immer";
import { State, Dispatch, ActionTypes } from "./types";

import {
  ADD_COFFEE_IN_SHOPPING_CART,
  REMOVE_COFFEE_IN_SHOPPING_CART,
  EXCLUDE_COFFEE_IN_SHOPPING_CART,
  CLEAR_SHOPPING_CART,
} from "./actions";

export function ShoppingReducer(state: State, action: Dispatch) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_IN_SHOPPING_CART:
      return produce(state, (draft) => {
        draft.shopping_cart = ADD_COFFEE_IN_SHOPPING_CART(state, action);
      });

    case ActionTypes.REMOVE_COFFEE_IN_SHOPPING_CART:
      return produce(state, (draft) => {
        draft.shopping_cart = REMOVE_COFFEE_IN_SHOPPING_CART(state, action);
      });

    case ActionTypes.EXCLUDE_COFFEE_IN_SHOPPING_CART:
      return produce(state, (draft) => {
        draft.shopping_cart = EXCLUDE_COFFEE_IN_SHOPPING_CART(state, action);
      });

    case ActionTypes.CLEAR_SHOPPING_CART:
      return produce(state, (draft) => {
        draft.shopping_cart = CLEAR_SHOPPING_CART();
      });
    default:
      return state;
  }
}
