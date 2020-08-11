import React from "react";

import GlobalStyle from "./globalstyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Heroes from "./components/Heroes/Heroes";

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Heroes />
      </Main>
    </>
  );
};

export default Layout;
