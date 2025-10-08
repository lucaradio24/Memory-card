import { Card } from "./Card";
import "./CardGrid.css";

export function CardGrid({ cards, onClickedCard, shuffleCount, selectedDifficulty }) {
  return (
    <div className={`card-grid${selectedDifficulty === '3' ? '-hard' : ''}`}>
      {cards.map((card) => (
        <Card
          key={`${card.id}-${shuffleCount}`}
          card={card}
          onClickedCard={onClickedCard}
          shuffleCount={shuffleCount}
        />
      ))}
    </div>
  );
}
