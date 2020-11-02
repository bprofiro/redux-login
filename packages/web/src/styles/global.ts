import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #1C1D21;
    -webkit-font-smoothing: antialiased;
  }
  body, button {
    font: 16px "Roboto Slab", serif;
    color: #E3E4E4;
  }
  button {
    cursor: pointer;
  }
`;
