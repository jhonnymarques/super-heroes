import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #0F123D;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
  }

  a{
    text-decoration: none;
    color: #7CDDF1;
  }
`;

export default GlobalStyle;
