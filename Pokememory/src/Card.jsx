import "./Card.css";
import { motion } from "framer-motion";

export function Card({ card, onClickedCard }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "tween", duration: 0.3, ease:'easeOut', stiffness: "500", damping: "20" }}
      onClick={() => onClickedCard(card.id)}
    >
      <img src={card.image} />
      <p className="pokemon-title">
        {card.name[0].toUpperCase() + card.name.slice(1)}
      </p>
    </motion.div>
  );
}
