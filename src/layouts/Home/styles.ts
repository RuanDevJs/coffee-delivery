import styled, { keyframes } from "styled-components";

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

export const Container = styled.main`
  animation: ${AnimateFromUpToDown} 0.5s forwards;
`;
