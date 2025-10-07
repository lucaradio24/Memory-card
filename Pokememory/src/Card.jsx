import './Card.css';

export function Card({ card, onClickedCard }) {
  

  return (
    <div className="card" >
      <img src={card.image} onClick={() => onClickedCard(card.id)} />
      <p>{card.name[0].toUpperCase() + card.name.slice(1)}</p>
    </div>
  );
}
