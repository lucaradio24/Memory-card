import "./Card.css";
import { motion } from "framer-motion";

export function Card({ card, onClickedCard }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      onClick={() => onClickedCard(card.id)}
    >
      <img src={card.image}  />
      <p className="pokemon-title">
        {card.name[0].toUpperCase() + card.name.slice(1)}
      </p>
    </motion.div>
  );
}
