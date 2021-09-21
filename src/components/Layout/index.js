import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import { HeaderWrapper } from "./Header/style";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    
  }
  h1{
    font-size: 2em;
  }
`;

export const Layout = ({ children }) => {  
    return (
        <div>
            <GlobalStyle />
            <Header/>
          
            <section>{children}</section>
        </div>
    );
};
