import { useContext, useEffect, useState } from "react";
import { ShoppingContext } from "../../context/Shopping/ShoppingContext";
import { toast } from "react-toastify";

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
import { Order } from "../../context/Shopping/types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const HOST = import.meta.env.VITE_API_ORDER_HOST;
const PORT = import.meta.env.VITE_API_ORDER_PORT;

const API_URL = `http://${HOST}:${PORT}/orders`;

export default function Checkout() {
  const {
    shopping_cart,
    setNewOrder,
    calculateAllCoffeesInShoppingCart,
    addCoffeeInShoppingCart,
    removeCoffeeInShoppingCart,
    excludeCoffeeInShoppingCart,
    clearShoppingCart,
  } = useContext(ShoppingContext);
  const { shoppingCartTotalPrice } = calculateAllCoffeesInShoppingCart();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("credit-card");

  const [formCep, setFormCep] = useState<FormCep>({} as FormCep);
  const [loadingFormCepFromStorage, setLoadingFormCepFromStorage] =
    useState(true);

  const totalWithFreight =
    shoppingCartTotalPrice > 0 ? (shoppingCartTotalPrice + 3.5).toFixed(2) : 0;
  const theme = useTheme();

  const isDisabled = shoppingCartTotalPrice > 0 && formCep.cep ? false : true;
  const navigation = useNavigate();

  useEffect(() => {
    const formCepFromLocalStorage = localStorage.getItem(
      "@coffee-delivery:form-cep"
    );

    const paymentFromLocalStorage = localStorage.getItem(
      "@coffee-delivery:payment-method"
    );

    if (formCepFromLocalStorage) {
      const parsedFormCepFromLocalStorage = JSON.parse(formCepFromLocalStorage);
      setFormCep(parsedFormCepFromLocalStorage);
    }

    if (paymentFromLocalStorage) {
      const parsedFormCepFromLocalStorage = JSON.parse(paymentFromLocalStorage);
      setPaymentMethod(parsedFormCepFromLocalStorage);
    }

    setLoadingFormCepFromStorage(false);
  }, []);

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

    localStorage.setItem("@coffee-delivery:form-cep", JSON.stringify(formCep));
  }, [formCep]);

  function activeButton(method: PaymentMethod) {
    setPaymentMethod(method);
    localStorage.setItem(
      "@coffee-delivery:payment-method",
      JSON.stringify(method)
    );
  }

  async function handleSubmit() {
    if (!formCep.complement.length || formCep.number === 0) {
      return toast("Preencha os restos dos dados do seu endereço 😠", {
        type: "error",
        pauseOnHover: false,
      });
    }

    const newOrder: Order = {
      address: formCep,
      coffees: shopping_cart,
      payment_method: paymentMethod,
    };

    setNewOrder(newOrder);

    const response = await axios.post(API_URL, newOrder);
    console.log(response.data);

    clearShoppingCart();

    navigation("/admin");
  }

  if (loadingFormCepFromStorage) return null;

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

                      <button
                        className="counter--remove"
                        onClick={() => excludeCoffeeInShoppingCart(coffee)}
                      >
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
            <button
              className="coffee-footer-button"
              disabled={isDisabled}
              title={
                isDisabled
                  ? "Por favor, seleciona uma quantidade válida de café"
                  : "Confirmar pedido"
              }
              onClick={handleSubmit}
            >
              Confirmar pedido
            </button>
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
            <span>Dinheiro</span>
          </Styled.Method>
        </Styled.Methods>
      </Styled.Payment>
    </Styled.Container>
  );
}
