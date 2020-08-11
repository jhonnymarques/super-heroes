import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    height: 100vh;
    background: #FFFFF3;
  }

  a{
    text-decoration: none;
    color: #41D3BD;
  }
`;

export default GlobalStyle;
