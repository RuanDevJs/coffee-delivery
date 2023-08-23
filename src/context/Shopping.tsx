import { createContext, useReducer } from "react";

import { Coffee } from "../reducers/Shopping/types";
import { ShoppingReducer } from "../reducers/Shopping/reducer";
import {
  ADD_COFFEE_IN_SHOPPING_CART,
  REMOVE_COFFEE_IN_SHOPPING_CART,
} from "../reducers/Shopping/effects";

interface TotalPriceOfCoffeeInShoppingCartProps {
  getTotalPriceInEachCoffee: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    total_price: number;
  }[];
  shoppingCartTotalPrice: number;
}

interface ShoppingContext {
  shopping_cart: Coffee[];
  addCoffeeInShoppingCart: (coffee: Coffee) => void;
  removeCoffeeInShoppingCart: (coffee: Coffee) => void;
  calculateAllCoffeesInShoppingCart: () => TotalPriceOfCoffeeInShoppingCartProps;
}

interface Props {
  children: React.ReactNode;
}

export const ShoppingContext = createContext({} as ShoppingContext);

export function ShoppingProvider({ children }: Props) {
  const [state, dispatch] = useReducer(ShoppingReducer, {
    shopping_cart: [],
  });

  const { shopping_cart } = state;

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

  return (
    <ShoppingContext.Provider
      value={{
        shopping_cart,
        addCoffeeInShoppingCart,
        removeCoffeeInShoppingCart,
        calculateAllCoffeesInShoppingCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
