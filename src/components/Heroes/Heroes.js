import React, { useEffect, useState } from "react";

import Hero from "../Hero/Hero";

function Heroes() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    console.log("aaaaaaaa");
    fetch("https://superheroapi.com/api.php/2369583713346880/search/spider-man")
      .then((response) => response.json())
      .then((dados) => {
        console.log(dados);

        const heroes = dados.results.map((hero) => {
          return {
            id: hero.id,
            name: [hero.biography.aliases[0]],
            image: [hero.image.url],
            work: [hero.work.base],
          };
        });
        console.log(heroes);
        setHeroes(heroes);
      });
  }, []);

  return (
    <>
      {heroes.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </>
  );
}

export default Heroes;
