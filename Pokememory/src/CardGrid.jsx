import { Card } from "./Card";
import "./CardGrid.css";

export function CardGrid({ cards, onClickedCard, shuffleCount }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={`${card.id}-${shuffleCount}`}
          card={card}
          onClickedCard={onClickedCard}
        />
      ))}
    </div>
  );
}
