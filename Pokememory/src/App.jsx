import { useEffect, useState } from "react";
import "./App.css";
import { CardGrid } from "./CardGrid";
import { Header } from "./Header";


function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([])


  function handleClickedCard(id){
    if(!clickedCards.includes(id)) {
      setClickedCards([...clickedCards, id])
      shuffleCards(cards)
    } else {
      setClickedCards([])
      shuffleCards(cards)
    }
  }

  function shuffleCards(cards){
    const newCards = [...cards]
    const shuffledCards = newCards.sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
  }

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();

      const cards = data.results.map((pokemon) => {
        const id = pokemon.url.split("/").filter(Boolean).pop();
        return {
          id: id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });

      setCards(cards);
    }
    fetchPokemons();
  }, []);

  return (
    <>
      <Header score={clickedCards} />
      <CardGrid cards={cards} onClickedCard={handleClickedCard} />
    </>
  );
}

export default App;
