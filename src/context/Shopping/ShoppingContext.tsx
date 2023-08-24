import { createContext, useEffect, useReducer } from "react";
import {
  ShoppingContextProps,
  TotalPriceOfCoffeeInShoppingCartProps,
  Props,
} from "./types";

import { Coffee } from "../../reducers/Shopping/types";
import { ShoppingReducer } from "../../reducers/Shopping/reducer";
import {
  ADD_COFFEE_IN_SHOPPING_CART,
  REMOVE_COFFEE_IN_SHOPPING_CART,
  EXCLUDE_COFFEE_IN_SHOPPING_CART,
} from "../../reducers/Shopping/effects";

export const ShoppingContext = createContext({} as ShoppingContextProps);

export function ShoppingProvider({ children }: Props) {
  const [state, dispatch] = useReducer(
    ShoppingReducer,
    {
      shopping_cart: [],
    },
    (initialState) => {
      const shoppingCartFromLocalStorage =
        localStorage.getItem("@coffee-delivery");

      if (shoppingCartFromLocalStorage) {
        return {
          shopping_cart: JSON.parse(shoppingCartFromLocalStorage),
        };
      }

      return initialState;
    }
  );

  const { shopping_cart } = state;

  useEffect(() => {
    localStorage.setItem("@coffee-delivery", JSON.stringify(shopping_cart));
  }, [shopping_cart]);

  function addCoffeeInShoppingCart(coffee: Coffee) {
    dispatch(ADD_COFFEE_IN_SHOPPING_CART(coffee));
  }

  function removeCoffeeInShoppingCart(coffee: Coffee) {
    dispatch(REMOVE_COFFEE_IN_SHOPPING_CART(coffee));
  }

  function calculateAllCoffeesInShoppingCart(): TotalPriceOfCoffeeInShoppingCartProps {
    const getTotalPriceInEachCoffee = shopping_cart.map((coffee) => {
      return {
        _id: coffee._id,
        name: coffee.name,
        price: coffee.price,
        quantity: coffee.quantity,
        total_price: coffee.price * coffee.quantity,
      };
    });

    const shoppingCartTotalPrice = getTotalPriceInEachCoffee.reduce(
      (acc, coffee) => {
        acc += coffee.total_price;
        return acc;
      },
      0
    );

    return { getTotalPriceInEachCoffee, shoppingCartTotalPrice };
  }

  function excludeCoffeeInShoppingCart(coffee: Coffee) {
    dispatch(EXCLUDE_COFFEE_IN_SHOPPING_CART(coffee));
  }

  return (
    <ShoppingContext.Provider
      value={{
        shopping_cart,
        addCoffeeInShoppingCart,
        removeCoffeeInShoppingCart,
        calculateAllCoffeesInShoppingCart,
        excludeCoffeeInShoppingCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
