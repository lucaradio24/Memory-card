import { Card } from "./Card";
import './CardGrid.css'

export function CardGrid({ cards, onClickedCard }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClickedCard={onClickedCard} />
      ))}
    </div>
  );
}
