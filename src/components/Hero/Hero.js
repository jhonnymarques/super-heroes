import React from "react";

function Hero(props) {
  return (
    <div>
      <ul>
        <li>ID:{props.hero.id}</li>
        <li>Nome:{props.hero.name}</li>
        <img src={props.hero.image} alt="imagem batman" />
      </ul>
    </div>
  );
}

export default Hero;
