import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import * as S from "./styles";

function Header() {
  return (
    <Router>
      <S.Header>
        <S.Ul>
          <S.Li>
            <NavLink to="/herois">Heróis</NavLink>
          </S.Li>
          <S.Li>
            <NavLink to="/detalhes">Detalhes</NavLink>
          </S.Li>
        </S.Ul>
      </S.Header>
    </Router>
  );
}

export default Header;
