import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
  }
`;