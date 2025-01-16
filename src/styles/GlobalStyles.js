import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #121212;
    color: #ffffff;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;