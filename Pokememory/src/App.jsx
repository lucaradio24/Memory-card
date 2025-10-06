import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

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

  return <>
  <Header />
  <CardGrid cards={cards} />
  </>;
}

export default App;

 function Header(){
   return <header>
     <h1>Pokememory</h1>
   </header>
 }

function CardGrid({cards}) {
  return <div className="card-grid">
    {cards.map((card) => (
      <Card key={card.id} card={card}/>
    ))}
  </div>;
}

 function Card({card}){
  return (
    <div>
      <img src={card.image} />
      <p>{card.name}</p>
    </div>
  )
 }
