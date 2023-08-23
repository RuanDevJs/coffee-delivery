import { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "../../context/Shopping";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

import * as Styled from "./styles";
import { useTheme } from "styled-components";

import CoffeeIMG from "../../assets/coffee/Image-1.svg";

interface FormCep {
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  uf: string;
  complement: string;
  number: number;
}

interface CEP_API_RESPONSE {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

type PaymentMethod = "credit-card" | "debit-card" | "money";

export default function Checkout() {
  const {
    shopping_cart,
    calculateAllCoffeesInShoppingCart,
    addCoffeeInShoppingCart,
    removeCoffeeInShoppingCart,
  } = useContext(ShoppingContext);
  const { shoppingCartTotalPrice } = calculateAllCoffeesInShoppingCart();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("credit-card");

  const [formCep, setFormCep] = useState<FormCep>({} as FormCep);
  const totalWithFreight =
    shoppingCartTotalPrice > 0 ? (shoppingCartTotalPrice + 3.5).toFixed(2) : 0;
  const theme = useTheme();

  useEffect(() => {
    async function getAddressInfoFromCEP() {
      const url = `https://viacep.com.br/ws/${formCep.cep}/json/`;
      const response = (await (await fetch(url)).json()) as CEP_API_RESPONSE;

      setFormCep((oldValue) => ({
        ...oldValue,
        cep: response.cep,
        city: response.localidade,
        neighborhood: response.bairro,
        street: response.logradouro,
        uf: response.uf,
      }));
    }

    if (formCep.cep && formCep.cep.length === 8) {
      getAddressInfoFromCEP();
    }
  }, [formCep]);

  function activeButton(method: PaymentMethod) {
    setPaymentMethod(method);
  }

  return (
    <Styled.Container>
      <Styled.Address>
        <h1>Complete seu pedido</h1>
        <Styled.Form>
          <Styled.Heading>
            <MapPinLine color={theme.colors["yellow-dark"]} size={22} />
            <div className="info">
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Styled.Heading>
          <Styled.Input
            placeholder="CEP"
            className="input--cep"
            maxLength={8}
            onChange={(e) =>
              setFormCep((oldValue) => ({ ...oldValue, cep: e.target.value }))
            }
            value={formCep.cep}
          />
          <Styled.Input
            placeholder="Rua"
            className="input--street"
            disabled
            value={formCep.street}
          />
          <Styled.Input
            placeholder="Número"
            className="input--complement"
            value={formCep.complement}
            type="string"
            onChange={(e) =>
              setFormCep((oldValue) => ({
                ...oldValue,
                complement: e.target.value,
              }))
            }
          />
          <Styled.Input
            placeholder="Complemento"
            className="input--number"
            value={formCep.number}
            onChange={(e) =>
              setFormCep((oldValue) => ({
                ...oldValue,
                number: +e.target.value,
              }))
            }
          />
          <Styled.Input
            placeholder="Bairro"
            className="input--neighborhood"
            disabled
            value={formCep.neighborhood}
          />
          <Styled.Input
            placeholder="Cidade"
            className="input--city"
            disabled
            value={formCep.city}
          />
          <Styled.Input
            placeholder="UF"
            className="input--state"
            disabled
            value={formCep.uf}
          />
        </Styled.Form>
      </Styled.Address>

      <Styled.ShoppingCart>
        <h1>Cafés selecionados</h1>
        <Styled.Coffees>
          {shopping_cart.map((coffee) => {
            return (
              <Styled.Coffee key={coffee._id}>
                <Styled.CoffeePorster
                  src={`./src/assets/coffee/${coffee.img}`}
                  title={`${coffee.name} - ${coffee.description}`}
                  alt={`${coffee.name} - ${coffee.description}`}
                  draggable={false}
                />
                <div>
                  <Styled.CoffeeHeading>
                    <h3>{coffee.name}</h3>
                    <span>R$ {coffee.price.toFixed(2)}</span>
                  </Styled.CoffeeHeading>
                  <Styled.CoffeeFooter>
                    <div className="counter">
                      <button
                        className="counter--minus"
                        onClick={() => removeCoffeeInShoppingCart(coffee)}
                      >
                        <Minus size={16} color={theme.colors.purple} />
                      </button>
                      <label className="counter--length">
                        {coffee.quantity}
                      </label>
                      <button
                        className="counter--plus"
                        onClick={() => addCoffeeInShoppingCart(coffee)}
                      >
                        <Plus size={16} color={theme.colors.purple} />
                      </button>

                      <button className="counter--remove">
                        <Trash size={16} color={theme.colors.purple} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </Styled.CoffeeFooter>
                </div>
              </Styled.Coffee>
            );
          })}
          <Styled.CoffeesFooter>
            <Styled.Row>
              <p>Total de itens</p>
              <span>R${shoppingCartTotalPrice.toFixed(2)}</span>
            </Styled.Row>
            <Styled.Row>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </Styled.Row>
            <Styled.Row>
              <p>Total</p>
              <span>R$ {totalWithFreight}</span>
            </Styled.Row>
            <button className="coffee-footer-button">Confirmar pedido</button>
          </Styled.CoffeesFooter>
        </Styled.Coffees>
      </Styled.ShoppingCart>

      <Styled.Payment>
        <Styled.Heading>
          <CurrencyDollar color={theme.colors["purple-dark"]} size={22} />
          <div className="info">
            <h2>Pagamento</h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Styled.Heading>
        <Styled.Methods>
          <Styled.Method
            onClick={() => activeButton("credit-card")}
            active={paymentMethod === "credit-card"}
          >
            <CreditCard color={theme.colors.purple} size={18} />
            <span>cartão de crédito</span>
          </Styled.Method>
          <Styled.Method
            onClick={() => activeButton("debit-card")}
            active={paymentMethod === "debit-card"}
          >
            <Bank color={theme.colors.purple} size={18} />
            <span>cartão de débito</span>
          </Styled.Method>
          <Styled.Method
            onClick={() => activeButton("money")}
            active={paymentMethod === "money"}
          >
            <Money color={theme.colors.purple} size={18} />
            <span>cartão de dinheiro</span>
          </Styled.Method>
        </Styled.Methods>
      </Styled.Payment>
    </Styled.Container>
  );
}
