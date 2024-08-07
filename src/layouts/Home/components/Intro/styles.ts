import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;

  gap: 4rem;

  padding: 2rem 3rem;
  grid-area: main;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-size: 3rem;
  font-weight: 700;

  line-height: 1.3em;
  color: ${({ theme }) => theme.colors["base-title"]};
`;

export const Subtitle = styled.p`
  font-family: "Roboto";
  font-size: 1.25rem;
  font-weight: 400;

  line-height: 1.3em;
  color: ${({ theme }) => theme.colors["base-subtitle"]};

  margin-top: 1rem;
`;

export const Logo = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;

  cursor: pointer;
  object-fit: cover;
`;

export const Info = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: minmax(80px, 300px) minmax(80px, 300px);

  gap: 1rem;
`;

export const InfoDetail = styled.div`
  display: flex;
  align-items: center;

  text-align: center;
  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors["base-text"]};
    margin-left: 0.5rem;
  }

  .icon-area {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    border-radius: 50px;
  }

  margin-bottom: 0.5rem;
`;
