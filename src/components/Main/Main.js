import React from "react";

import * as S from "./styles";
import Heroes from "../Heroes/Heroes";

const Main = () => {
  return (
    <div>
      <S.TitleHeroes>
        <S.Title>Heróis</S.Title>
      </S.TitleHeroes>
      <S.Section>
        <Heroes />
      </S.Section>
    </div>
  );
};

export default Main;
