import { Coffee } from "../../../reducers/Shopping/types";

export interface TotalPriceOfCoffeeInShoppingCartProps {
  getTotalPriceInEachCoffee: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    total_price: number;
  }[];
  shoppingCartTotalPrice: number;
}

export interface ShoppingContextProps {
  shopping_cart: Coffee[];
  addCoffeeInShoppingCart: (coffee: Coffee) => void;
  removeCoffeeInShoppingCart: (coffee: Coffee) => void;
  calculateAllCoffeesInShoppingCart: () => TotalPriceOfCoffeeInShoppingCartProps;
  excludeCoffeeInShoppingCart: (coffee: Coffee) => void;
}

export interface Props {
  children: React.ReactNode;
}
