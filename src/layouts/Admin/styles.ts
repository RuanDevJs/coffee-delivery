import styled, { keyframes } from "styled-components";
import * as PrimeReactDataTable from "primereact/datatable";
import * as PrimeReactDataColumn from "primereact/column";

const AnimateFromUpToDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, -30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0);
  }
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-size: 2rem;
  font-weight: 700;

  line-height: 1.3em;
  color: ${({ theme }) => theme.colors["base-title"]};

  padding: 1rem 0;
`;

export const Container = styled.main`
  animation: ${AnimateFromUpToDown} 0.5s forwards;

  padding: 2rem 3rem;

  button {
    width: 220px;
    padding: 1rem;
  }

  .p-column-title {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;

    line-height: 1.3em;
    color: ${({ theme }) => theme.colors["base-title"]};

    padding: 8px 12px;
    text-align: center;
  }
`;

export const Table = styled(PrimeReactDataTable.DataTable)`
  padding: 1rem;
`;

export const Column = styled(PrimeReactDataColumn.Column)`
  padding: 1rem;
`;
