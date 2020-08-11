import React from "react";

import * as S from "./styles";
import Heroes from "../Heroes/Heroes";

const Main = () => {
  return (
    <S.Wrapper>
      <h1>Herois</h1>

      <Heroes />
    </S.Wrapper>
  );
};

export default Main;
