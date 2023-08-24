import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeProps, Coffes } from "../../../../api";

import * as Styled from "./styles";
import { ShoppingContext } from "../../../../context/Shopping/ShoppingContext";

export default function Coffee() {
  const { addCoffeeInShoppingCart, removeCoffeeInShoppingCart, shopping_cart } =
    useContext(ShoppingContext);
  const navigation = useNavigate();

  function handleAddCoffeeInShoppingCart(newCoffee: CoffeeProps) {
    addCoffeeInShoppingCart({
      ...newCoffee,
      quantity: 1,
    });
  }

  function handleRemoveCoffeeInShoppingCart(coffee: CoffeeProps) {
    removeCoffeeInShoppingCart(coffee);
  }

  function getQuantityById(_id: string) {
    const quantityById = shopping_cart.find((q) => q._id === _id);

    // const findCoffeeIndexById = shopping_cart.findIndex((q) => q._id === _id);

    return quantityById && quantityById._id ? quantityById.quantity : 0;
  }

  function handleShoppintCartButton(coffee: CoffeeProps) {
    addCoffeeInShoppingCart({
      ...coffee,
      quantity: 1,
    });
    navigation("/checkout");
  }

  return (
    <Styled.Container>
      <h2>Nossos cafés</h2>
      <Styled.List>
        {Coffes.map((coffee, index) => {
          return (
            <Styled.Coffee key={`$Coffee=${index}`}>
              <Styled.Poster
                src={`./src/assets/coffee/${coffee.img}`}
                title={`${coffee.name} - ${coffee.description}`}
                alt={`${coffee.name} - ${coffee.description}`}
                draggable={false}
              />
              <Styled.Detail>
                <Styled.Categories>
                  {coffee.category.map((category) => (
                    <Styled.Category key={Math.random()}>
                      <p>{category}</p>
                    </Styled.Category>
                  ))}
                </Styled.Categories>
                <Styled.Title>{coffee.name}</Styled.Title>
                <Styled.Subtitle>{coffee.description}</Styled.Subtitle>
              </Styled.Detail>
              <Styled.Buy>
                <Styled.Price>
                  <p>R$</p>
                  <p>{coffee.price.toFixed(2)}</p>
                </Styled.Price>
                <div id="action">
                  <Styled.Quantity>
                    <button
                      onClick={() => handleRemoveCoffeeInShoppingCart(coffee)}
                    >
                      <Minus size={18} weight="fill" />
                    </button>
                    <span>{getQuantityById(coffee._id)}</span>
                    <button
                      onClick={() => handleAddCoffeeInShoppingCart(coffee)}
                    >
                      <Plus size={18} weight="fill" />
                    </button>
                  </Styled.Quantity>
                  <Styled.ShoppingCart
                    onClick={() => handleShoppintCartButton(coffee)}
                  >
                    <ShoppingCart size={18} weight="fill" />
                  </Styled.ShoppingCart>
                </div>
              </Styled.Buy>
            </Styled.Coffee>
          );
        })}
      </Styled.List>
    </Styled.Container>
  );
}
