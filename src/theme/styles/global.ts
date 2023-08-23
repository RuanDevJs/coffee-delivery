import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, select, textarea, label {
    font-family: 'Roboto', sans-serif;    
    font-size: 1rem;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  /* .global-grid-layout {
    display: grid;
    grid-template-areas: 
      "header header header"
      "main main main"
      "coffee-list coffee-list coffee-list"
    ;

  } */
`;
