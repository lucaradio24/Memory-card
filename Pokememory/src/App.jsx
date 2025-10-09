import { useEffect, useState } from "react";
import "./App.css";
import { CardGrid } from "./CardGrid";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { LoseModal } from "./LoseModal";
import { WinModal } from "./WinModal";

function App() {
  const [minRange, setMinRange] = useState("");
  const [maxRange, setMaxRange] = useState("");
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [cardNumber, setCardNumber] = useState(12);
  const [selectedDifficulty, setSelectedDifficulty] = useState("2");
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [loseScore, setLoseScore] = useState(0);
  const [toggleImages, setToggleImages] = useState(true);
  const [showWinModal, setShowWinModal] = useState(false);

  function handleChangeDifficulty(e) {
    setSelectedDifficulty(e.target.value);
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
      setMaxRange(251);
    } else if (e.target.value === "3") {
      setMinRange(252);
      setMaxRange(386);
    } else if (e.target.value === "4") {
      setMinRange(387);
      setMaxRange(493);
    } else if (e.target.value === "5") {
      setMinRange(494);
      setMaxRange(649);
    } else if (e.target.value === "6") {
      setMinRange(650);
      setMaxRange(721);
    } else if (e.target.value === "7") {
      setMinRange(722);
      setMaxRange(809);
    } else if (e.target.value === "8") {
      setMinRange(810);
      setMaxRange(905);
    } else {
      setMinRange(906);
      setMaxRange(1025);
    }

    setClickedCards([]);
    setHighScore(0);
  }

  function handleClickedCard(id) {
    if (!clickedCards.includes(id)) {
      const newClickedCards = [...clickedCards, id]
      setClickedCards(newClickedCards);
      setTimeout(() => {
        shuffleCards(cards);
      }, 300);
      if (newClickedCards.length === cardNumber) {
      setTimeout(() => {
        setShowWinModal(true);
      }, 400);
    }
    }  else {
      setLoseScore(clickedCards.length);

      setShowLoseModal(true);
    }
  }

  function shuffleCards(cards) {
    const newCards = [...cards];
    const shuffledCards = newCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setShuffleCount((prev) => prev + 1);
  }

  function handleToggleImages() {
    setToggleImages(!toggleImages);
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
          image: toggleImages
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });
      const pokemonCards = extractPokemons(cards);
      setCards(pokemonCards);
    }
    fetchPokemons();
  }, [toggleImages, cardNumber, minRange, maxRange]);

  return (
    <>
      <div className="layout">
        <Header
          score={clickedCards}
          highScore={highScore}
          cardNumber={cardNumber}
        />
        <Sidebar
          onChangeDex={handleChangeDex}
          onChangeDifficulty={handleChangeDifficulty}
          selectedDifficulty={selectedDifficulty}
          onChangeImages={handleToggleImages}
          toggleImages={toggleImages}
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
      <LoseModal
        show={showLoseModal}
        score={clickedCards.length}
        onClose={() => {
          setHighScore(Math.max(highScore, loseScore));
          setShowLoseModal(false);
          setClickedCards([]);
          shuffleCards(cards);
        }}
      />
      <WinModal
        show={showWinModal}
        onClose={() => {
          setHighScore(Math.max(highScore, loseScore));
          setShowWinModal(false);
          setClickedCards([]);
          shuffleCards(cards);
        }}
      />
    </>
  );
}

export default App;
