import { useEffect, useState } from "react";
import * as Styled from "./styles";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Order } from "../../context/Shopping/types";
import { ProgressSpinner } from "primereact/progressspinner";

import { Coffee } from "../../reducers/Shopping/types";

import axios from "axios";
import io from "socket.io-client";

interface DataResponse {
  orders: Order[];
}

interface Orders {
  address: {
    cep: string;
    street: string;
    neighborhood: string;
    city: string;
    uf: string;
    complement: string;
    number: number;
  };
  payment_method: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro";
  coffees: Coffee[];
}

const HOST = import.meta.env.VITE_API_ORDER_HOST;
const PORT = import.meta.env.VITE_API_ORDER_PORT;

const API_REST_URL = `http://${HOST}:${PORT}/orders`;
const SOCKET_API_URL = `http://${HOST}:${PORT}`;

export default function Admin() {
  const [allOrders, setAllOrders] = useState<Orders[]>();
  const [loadingAllOrders, setLoadingAllOrders] = useState(true);

  useEffect(() => {
    const socket = io(SOCKET_API_URL);

    async function fetchAllOrdersFromDB() {
      try {
        setLoadingAllOrders(true);

        const response = (await axios.get(API_REST_URL)).data as DataResponse;

        if (response && response.orders.length) {
          const updatedOrders: Orders[] = response.orders.map((order) => {
            if (order.payment_method === "credit-card") {
              return { ...order, payment_method: "Cartão de Crédito" };
            } else if (order.payment_method === "debit-card") {
              return { ...order, payment_method: "Cartão de Débito" };
            } else {
              return { ...order, payment_method: "Dinheiro" };
            }
          });
          setAllOrders(updatedOrders);
        } else {
          throw new Error("Not orders found in Database");
        }
      } catch (error) {
        if (error instanceof Error) console.error(error);
      } finally {
        setLoadingAllOrders(false);
      }
    }

    socket.on("connect", () => {
      console.log("Connected to socket: ", SOCKET_API_URL);
    });

    socket.on("newOrder", () => {
      fetchAllOrdersFromDB();
    });

    fetchAllOrdersFromDB();
  }, []);
  if (loadingAllOrders) {
    return (
      <Styled.Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: 460,
        }}
      >
        <ProgressSpinner />
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Styled.Title>Todos os pedidos</Styled.Title>
      <DataTable value={allOrders} tableStyle={{ minWidth: "50rem" }}>
        <Column
          field="_id"
          header="ID do Pedido"
          sortable
          bodyStyle={{ width: "25%", padding: "1rem" }}
          headerStyle={{
            padding: "1rem",
          }}
        />
        <Column
          field="payment_method"
          header="Método de Pagamento"
          sortable
          style={{ width: "25%" }}
          headerStyle={{
            padding: "1rem",
          }}
        />
        <Column
          field="address.street"
          header="Endereço do Cliente"
          sortable
          style={{ width: "25%" }}
          headerStyle={{
            padding: "1rem",
          }}
        />
        <Column
          field="address.neighborhood"
          header="Bairro"
          sortable
          style={{ width: "25%" }}
          headerStyle={{
            padding: "1rem",
          }}
        />
      </DataTable>
    </Styled.Container>
  );
}
