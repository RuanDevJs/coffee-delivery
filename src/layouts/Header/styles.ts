import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;

  align-items: center;
  padding: 2rem 3rem;

  grid-area: header;
`;

export const Logo = styled.img`
  display: block;
  max-width: 100%;

  cursor: pointer;
  object-fit: cover;
`;

export const Navigation = styled.nav`
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: red;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  li + li {
    margin-left: 1rem;
  }

  #state-menu {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors["purple-light"]};
    padding: 8px;

    border-radius: 6px;

    select {
      border: 0;
      background-color: transparent;
      outline: 0;

      cursor: pointer;

      color: ${({ theme }) => theme.colors["purple-dark"]};
    }

    cursor: pointer;

    transition: 0.2s ease-in-out;
  }

  #shopping-cart {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    padding: 8px;

    border-radius: 6px;
    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors["yellow"]};
    }
  }
`;
