import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.Container}>
      <div className={styles.cartas}>
        {characters.map((card) => (
          <Card
            name={card.name}
            species={card.species}
            gender={card.gender}
            image={card.image}
            key={card.id}
            id={card.id}
            onClose={props.onClose}
          />
        ))}
      </div>
    </div>
  );
}
