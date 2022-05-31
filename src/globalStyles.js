import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:"Montserrat", sans-serif;
  }
  html,body{
    overflow-x:hidden;
  }
  a{
    text-decoration:none;
  }



`

export default GlobalStyle