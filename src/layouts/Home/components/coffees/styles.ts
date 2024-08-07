import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2rem;

  padding: 2rem 3rem;

  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;

    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 1rem;

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 220px));
  justify-content: space-between;

  /* gap: 2rem; */
  margin-top: 1rem;
`;

export const Coffee = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px;

  padding: 12px;
  box-sizing: border-box;
`;

export const Detail = styled.div``;

export const Poster = styled.img`
  display: block;
  max-width: 100%;

  object-fit: cover;
  margin: 1rem auto;
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const Category = styled.div`
  max-width: 100px;
  background-color: ${({ theme }) => theme.colors["yellow-light"]};

  padding: 8px;
  border-radius: 100px;

  p {
    font-size: 0.625rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colors["yellow-dark"]};
    text-transform: uppercase;
  }

  cursor: pointer;
`;

export const Title = styled.h3`
  font-family: "Baloo 2";
  font-size: 1.25rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors["base-subtitle"]};
  text-transform: capitalize;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-family: "Roboto";
  font-size: 0.875;
  font-weight: 400;

  color: ${({ theme }) => theme.colors["base-label"]};
  text-align: center;
`;

export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;

  #action {
    display: flex;
    align-items: center;

    gap: 1rem;
  }
`;

export const Price = styled.span`
  display: flex;
  align-items: center;

  p:nth-child(1) {
    font-family: "Roboto";
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    margin-right: 4px;
  }

  p:nth-child(2) {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;

    padding: 8px;
    border: 0;

    background-color: ${({ theme }) => theme.colors["base-button"]};
    cursor: pointer;

    color: ${({ theme }) => theme.colors["purple-dark"]};

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }

  span {
    font-family: "Roboto";
    font-size: 1rem;
    color: ${({ theme }) => theme.colors["base-title"]};

    padding: 7.5px;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    cursor: pointer;
  }
`;

export const ShoppingCart = styled.button`
  border: 0;
  display: flex;

  background-color: ${({ theme }) => theme.colors["purple-dark"]};
  color: ${({ theme }) => theme.colors["white"]} !important;

  padding: 8px;
  border-radius: 6px;

  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors["purple"]};
    color: ${({ theme }) => theme.colors["purple-light"]} !important;
  }
`;
