import { useEffect, useState } from "react";
import "./App.css";
import { CardGrid } from "./CardGrid";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  const [minRange, setMinRange] = useState("");
  const [maxRange, setMaxRange] = useState("");
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [cardNumber, setCardNumber] = useState(12);
  const [selectedDifficulty, setSelectedDifficulty] = useState('2')

 

  function handleChangeDifficulty(e) {
    setSelectedDifficulty(e.target.value)
    if (e.target.value === "1") {
      setCardNumber(8);
    } else if (e.target.value === "2") {
      setCardNumber(12);
    } else {
      setCardNumber(18);
    }
  }

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
    setHighScore(0);
  }

  function handleClickedCard(id) {
    if (!clickedCards.includes(id)) {
      setClickedCards([...clickedCards, id]);
      setTimeout(() => {
      shuffleCards(cards);
      }, 300);
      
    } else {
      if (clickedCards.length > highScore) setHighScore(clickedCards.length);
      setClickedCards([]);
       setTimeout(() => {
      shuffleCards(cards);
      }, 300);

    }
  }

  function shuffleCards(cards) {
    const newCards = [...cards];
    const shuffledCards = newCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setShuffleCount((prev) => prev + 1);
  }

  useEffect(() => {
    function extractPokemons(arr) {
    const newArr = [...arr];
    const randomPokemons = newArr
      .sort(() => Math.random() - 0.5)
      .slice(0, cardNumber);
    return randomPokemons;
  }

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
          backImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
        };
      });
      const pokemonCards = extractPokemons(cards);
      setCards(pokemonCards);
    }
    fetchPokemons();
  }, [cardNumber, minRange, maxRange]);

  return (
    <>
      <div className="layout">
        <Header score={clickedCards} highScore={highScore} cardNumber={cardNumber} />
        <Sidebar
          onChangeDex={handleChangeDex}
          onChangeDifficulty={handleChangeDifficulty}
          selectedDifficulty={selectedDifficulty}
        />
        <div className="main">
          <CardGrid
            cards={cards}
            onClickedCard={handleClickedCard}
            shuffleCount={shuffleCount}
            selectedDifficulty={selectedDifficulty}
          />
        </div>
      </div>
    </>
  );
}

export default App;
