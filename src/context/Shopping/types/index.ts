import { Coffee } from "../../../reducers/Shopping/types";

export interface Order {
  address: {
    cep: string;
    street: string;
    neighborhood: string;
    city: string;
    uf: string;
    complement: string;
    number: number;
  };
  payment_method: "credit-card" | "debit-card" | "money";
  coffees: Coffee[];
}

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
  order: Order;
  addCoffeeInShoppingCart: (coffee: Coffee) => void;
  removeCoffeeInShoppingCart: (coffee: Coffee) => void;
  calculateAllCoffeesInShoppingCart: () => TotalPriceOfCoffeeInShoppingCartProps;
  excludeCoffeeInShoppingCart: (coffee: Coffee) => void;
  setNewOrder: (order: Order) => void;
  clearShoppingCart: () => void;
}

export interface Props {
  children: React.ReactNode;
}
