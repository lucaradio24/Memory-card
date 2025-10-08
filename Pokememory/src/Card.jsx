import { useState } from "react";
import "./Card.css";
import { AnimatePresence, motion } from "framer-motion";

const pokeball = "/assets/pokeball.svg";

export function Card({ card, onClickedCard }) {
  const [isCaptured, setIsCaptured] = useState(false);
  const [isClickable, setIsClickable] = useState(true);

  function handleClick() {
    if (!isClickable) return;

    setIsClickable(false);

    setTimeout(() => {
      
      setIsCaptured(true);
    }, 150);
    setTimeout(() => {
      onClickedCard(card.id);
    }, 500);
  }



  return (
    <motion.div
      layoutId={card.id}
      className="card"
     
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8, transition: {duration: 0.2, ease:'easeOut'} }}
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      }}
      layoutTransition={{
        // Transizione solo per layout (shuffle)
        type: "tween",
        stiffness: 100,
        damping: 20,
        delay: Math.random() * 0.2,
        duration: 0.8,
      }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={isCaptured ? "pokeball" : "front"}
          className={isCaptured ? "pokeball" : ""}
          src={isCaptured ? pokeball : card.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>
      <p className="pokemon-title">
        {card.name[0].toUpperCase() + card.name.slice(1)}
      </p>
    </motion.div>
  );
}
