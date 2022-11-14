import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";

export default function Cards(props) {
  // const { characters } = props;
  let characters = useSelector((state) => state.myCharacters);
  return (
    <div className={styles.Container}>
      <div className={styles.cartas}>
        {characters.length ? null : (
          <div className={styles.conter}>
            <h1>AGREGA UNA CARTA</h1>
            <span className={styles.parpadea}>
              <strong>
                el menu se encuentra en la parte superior de la APP
              </strong>
            </span>
            <hr />
          </div>
        )}
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
