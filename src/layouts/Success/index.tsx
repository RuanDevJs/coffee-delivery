import { useContext } from "react";
import { ShoppingContext } from "../../context/Shopping/ShoppingContext";

import { MapPin, Timer } from "phosphor-react";
import Illustration from "../../assets/orders/Illustration.svg";

import * as Styled from "./styles";
import { useTheme } from "styled-components";

export default function Success() {
  const { order } = useContext(ShoppingContext);
  const theme = useTheme();

  function convertPayment() {
    if (order.payment_method === "credit-card") return "Cartão de Crédito";
    else if (order.payment_method === "debit-card") return "Cartão de Débito";
    else return "Dinheiro";
  }

  return (
    <Styled.Container>
      <header>
        <Styled.Title>Uhu! Pedido confirmado</Styled.Title>
        <Styled.Description>
          Agora é só aguardar que logo o café chegará até você
        </Styled.Description>
      </header>
      <Styled.Row>
        <Styled.OrderInfo>
          <Styled.Info>
            <Styled.Heading>
              <div className="button">
                <MapPin color={theme.colors["white"]} size={18} weight="fill" />
              </div>
              <div className="info">
                <h2>
                  Entrega em{" "}
                  <strong>
                    {order.address.street}, {order.address.number}
                  </strong>
                </h2>
                <p>
                  {order.address.neighborhood} - {order.address.city},{" "}
                  {order.address.uf}
                </p>
              </div>
            </Styled.Heading>
            <Styled.Heading>
              <div className="button--yelow">
                <Timer color={theme.colors["white"]} size={18} weight="fill" />
              </div>
              <div className="info">
                <h2>Previsão de entrega</h2>
                <p>
                  <strong>20 min - 30 min </strong>
                </p>
              </div>
            </Styled.Heading>
            <Styled.Heading>
              <div className="button--orange">
                <MapPin color={theme.colors["white"]} size={18} weight="fill" />
              </div>
              <div className="info">
                <h2>Pagamento na entrega</h2>
                <p>
                  <strong>{convertPayment()}</strong>
                </p>
              </div>
            </Styled.Heading>
          </Styled.Info>
          <Styled.Illustration
            src={Illustration}
            alt="Uhu! Pedido confirmado"
            title="Uhu! Pedido confirmado"
            draggable={false}
          />
        </Styled.OrderInfo>
      </Styled.Row>
    </Styled.Container>
  );
}
