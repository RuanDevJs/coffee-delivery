import { Coffee, Dispatch, State } from "./types";

function findCoffeeInShoppingCartById(
  state: State,
  _id: string
): Coffee | null {
  if (state.shopping_cart && state.shopping_cart.length) {
    const coffee = state.shopping_cart?.find((coffee) => {
      return coffee._id === _id;
    });

    return coffee !== undefined && coffee._id ? coffee : null;
  }

  return null;
}

function setShoppingCartInLocalStorage(shopping_cart: Coffee[]) {
  localStorage.setItem(
    "@coffee-delivery:shopping-cart",
    JSON.stringify(shopping_cart)
  );
}

export function ADD_COFFEE_IN_SHOPPING_CART(
  state: State,
  action: Dispatch
): Coffee[] {
  const searchCoffeeInShoppingCart = findCoffeeInShoppingCartById(
    state,
    action.payload.data._id
  );

  if (searchCoffeeInShoppingCart && searchCoffeeInShoppingCart._id) {
    const updatedCoffeeQuantity: Coffee[] = state.shopping_cart.map(
      (coffee) => {
        if (coffee._id === action.payload.data._id) {
          return {
            ...coffee,
            quantity: coffee.quantity + 1,
          };
        } else {
          return coffee;
        }
      }
    );

    setShoppingCartInLocalStorage(updatedCoffeeQuantity);
    return updatedCoffeeQuantity;
  } else {
    return [...state.shopping_cart, action.payload.data];
  }
}

export function REMOVE_COFFEE_IN_SHOPPING_CART(
  state: State,
  action: Dispatch
): Coffee[] {
  const searchCoffeeInShoppingCart = findCoffeeInShoppingCartById(
    state,
    action.payload.data._id
  );

  if (searchCoffeeInShoppingCart && searchCoffeeInShoppingCart._id) {
    const updatedCoffeeQuantity: Coffee[] = state.shopping_cart.map(
      (coffee) => {
        if (coffee._id === action.payload.data._id) {
          return {
            ...coffee,
            quantity: coffee.quantity >= 1 ? coffee.quantity - 1 : 0,
          };
        } else {
          return coffee;
        }
      }
    );

    return updatedCoffeeQuantity;
  } else {
    return [...state.shopping_cart, action.payload.data];
  }
}

export function EXCLUDE_COFFEE_IN_SHOPPING_CART(
  state: State,
  action: Dispatch
): Coffee[] {
  const searchCoffeeInShoppingCart = findCoffeeInShoppingCartById(
    state,
    action.payload.data._id
  );

  if (searchCoffeeInShoppingCart && searchCoffeeInShoppingCart._id) {
    const updatedShoppingCart: Coffee[] = state.shopping_cart.filter(
      (coffee) => {
        return coffee._id !== action.payload.data._id;
      }
    );

    return updatedShoppingCart;
  } else {
    return [...state.shopping_cart, action.payload.data];
  }
}

export function CLEAR_SHOPPING_CART(): Coffee[] {
  return [] as Coffee[];
}
