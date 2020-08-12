import React from "react";

import * as S from "./styles";

function Hero(props) {
  return (
    <S.Card>
      <S.ContainerImage>
        <S.ImageHeroes src={props.hero.image} alt="imagem heroes" />
      </S.ContainerImage>

      <S.CardContent>
        <S.Title>Nome: {props.hero.name}</S.Title>
      </S.CardContent>

      <S.CardInfo>
        <p>ID: {props.hero.id}</p>
        <br />
        <p>Local Trabalho: {props.hero.work}</p>
      </S.CardInfo>
    </S.Card>
  );
}

export default Hero;
