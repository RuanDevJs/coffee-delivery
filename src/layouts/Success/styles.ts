import styled, { keyframes } from "styled-components";

const AnimateFromUpToDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-12px, -30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0);
  }
`;

export const Container = styled.div`
  padding: 2rem 3rem;

  header {
    margin-bottom: 2rem;
  }

  animation: ${AnimateFromUpToDown} 0.3s forwards;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 2rem;

  h2 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors["base-text"]};
    line-height: 1.5em;

    margin-left: 4px;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.875rem;

    color: ${({ theme }) => theme.colors["base-text"]};
    margin-left: 4px;
  }

  .button {
    width: 30px;
    height: 30px;

    background-color: ${({ theme }) => theme.colors["purple"]};
    padding: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
  }

  .button--yelow {
    width: 30px;
    height: 30px;

    background-color: ${({ theme }) => theme.colors["yellow"]};
    padding: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
  }

  .button--orange {
    width: 30px;
    height: 30px;

    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    padding: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
  }
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 3rem;

  color: ${({ theme }) => theme.colors["yellow-dark"]};
  line-height: 1.3em;
  margin-left: 4px;
`;

export const Description = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1.25em;

  color: ${({ theme }) => theme.colors["base-subtitle"]};

  margin-left: 4px;
`;

export const Row = styled.div``;

export const OrderInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 50%;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;

  border-radius: 50em;
  border: 1px solid transparent;

  padding: 40px;
  border-radius: 6px 36px;
`;

export const Illustration = styled.img`
  display: block;
  max-width: 100%;

  object-fit: cover;
`;
