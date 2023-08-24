import styled, { css } from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-areas:
    "address address shopping"
    "address address shopping"
    "payment payment shopping";

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px 80px max-content;
  align-items: start;
  justify-content: space-between;
  padding: 2rem 3rem;

  gap: 1rem;

  h1 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors["base-subtitle"]};

    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    "heading heading heading"
    "cep . ."
    "street street street"
    "number complement complement"
    "neighborhood city state";

  background-color: ${({ theme }) => theme.colors["base-card"]};

  padding: 1rem;

  border-radius: 6px;
  gap: 1rem;

  .input--cep {
    grid-area: cep;
  }

  .input--street {
    grid-area: street;
  }

  .input--complement {
    grid-area: complement;
  }

  .input--number {
    grid-area: number;
  }

  .input--neighborhood {
    grid-area: neighborhood;
  }

  .input--city {
    grid-area: city;
  }

  .input--state {
    grid-area: state;
  }
`;

export const Heading = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors["base-card"]};
  grid-area: heading;

  margin-bottom: 1rem;

  h2 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors["base-subtitle"]};
    line-height: 1.5em;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};

  padding: 0.875rem;
  outline: 0;

  border-radius: 4px;
`;

export const Address = styled.div`
  grid-area: address;
`;

export const ShoppingCart = styled.div`
  grid-area: shopping;
`;

export const Payment = styled.div`
  grid-area: payment;

  background-color: ${({ theme }) => theme.colors["base-card"]};

  padding: 12px;
  border-radius: 6px;
`;

export const Methods = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-around;
  gap: 1rem;
`;

interface MethodProps {
  active: boolean;
}

export const Method = styled.button<MethodProps>`
  margin-top: 1rem;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 18px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors["purple-light"] : theme.colors["base-button"]};

  border-radius: 6px;
  border: ${({ theme, active }) =>
    active
      ? `1px solid ${theme.colors["purple-dark"]}`
      : `1px solid ${theme.colors["base-button"]}`};

  cursor: pointer;
  transition: 0.2s ease-in-out;

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors["base-text"]};

    text-transform: uppercase;
  }
`;

export const Coffees = styled.div`
  padding: 20px;

  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;

  div {
    width: 100%;
    gap: 1rem;
  }
`;

export const Coffee = styled.div`
  width: 100%;
  display: flex;

  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
`;

export const CoffeePorster = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;

export const CoffeeHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const CoffeeFooter = styled.div`
  margin-top: 8px;

  .counter {
    display: flex;
    gap: 0;
  }

  .counter--minus {
    width: 30px;
    height: 30px;

    background-color: ${({ theme }) => theme.colors["base-button"]};
    border: 0;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px 0 0 6px;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }
  }

  .counter--plus {
    width: 30px;
    height: 30px;

    background-color: ${({ theme }) => theme.colors["base-button"]};
    border: 0;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0 6px 6px 0;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }
  }

  .counter--length {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    background-color: ${({ theme }) => theme.colors["base-button"]};
    border: 0;

    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  .counter--remove {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 12px;
    border: 0;
    margin-left: 1rem;

    cursor: pointer;
    background-color: ${({ theme }) => theme.colors["base-button"]};

    border-radius: 6px;
    transition: 0.2s ease-in-out;

    span {
      font-size: 0.75rem;
      margin-left: 4px;
      color: ${({ theme }) => theme.colors["base-text"]};

      text-transform: uppercase;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }
  }
`;

export const CoffeesFooter = styled.div`
  .coffee-footer-button {
    width: 100%;
    padding: 12px;

    border: 0;
    cursor: pointer;

    border-radius: 6px;
    margin-top: 4px;
  }

  .coffee-footer-button {
    ${({ theme }) => css`
      background-color: ${theme.colors.yellow};

      font-size: 0.875rem;
      font-weight: 700;
      color: ${theme.colors.white};

      text-transform: uppercase;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: ${theme.colors["yellow-dark"]};
      }

      &:disabled {
        background-color: ${theme.colors["yellow"]};
        opacity: 0.7;
        cursor: no-drop;
      }
    `}
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;

  :nth-child(1) {
    p {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors["base-text"]};
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }

  :nth-child(2) {
    p {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors["base-text"]};
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }

  :nth-child(3) {
    p {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    span {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }
  }
`;
