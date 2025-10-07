import { useEffect, useState } from "react";
import "./App.css";
import { CardGrid } from "./CardGrid";
import { Header } from "./Header";
import { PokeDex } from "./PokeDex";

function extractPokemons(arr) {
  const newArr = [...arr];
  const randomPokemons = newArr.sort(() => Math.random() - 0.5).slice(0, 12);
  return randomPokemons;
}

function App() {
  const [minRange, setMinRange] = useState("");
  const [maxRange, setMaxRange] = useState("");
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0)

  function handleChangeDex(e) {
    if (e.target.value === "1") {
      setMinRange(0);
      setMaxRange(150);
    } else if (e.target.value === "2") {
      setMinRange(151);
      setMaxRange(250);
    } else {
      setMinRange(251);
      setMaxRange(385);
    }
    setHighScore(0)
  }

  function handleClickedCard(id) {
    if (!clickedCards.includes(id)) {
      setClickedCards([...clickedCards, id]);
      shuffleCards(cards);
    } else {
      if(clickedCards.length > highScore) setHighScore(clickedCards.length)
      setClickedCards([]);
      shuffleCards(cards);
    }
  }

  function shuffleCards(cards) {
    const newCards = [...cards];
    const shuffledCards = newCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${minRange}&limit=${maxRange}`
      );
      const data = await res.json();

      const cards = data.results.map((pokemon) => {
        const id = pokemon.url.split("/").filter(Boolean).pop();
        return {
          id: id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });
      const pokemonCards = extractPokemons(cards);
      setCards(pokemonCards);
    }
    fetchPokemons();
  }, [minRange, maxRange]);

  return (
    <>
      <Header score={clickedCards} highScore={highScore}/>
      <PokeDex onChangeDex={handleChangeDex} />
      <CardGrid cards={cards} onClickedCard={handleClickedCard} />
    </>
  );
}

export default App;
