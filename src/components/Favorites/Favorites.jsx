import React from "react";
import CardF from "../CardF/CardF";
import styles from "./Favorites.module.css";
import { useSelector } from "react-redux";

export default function Cards(props) {
  let favorites = useSelector((state) => state.myFavorites);
  return (
    <div className={styles.Container}>
      <div className={styles.cartas}>
        {favorites.length ? null : (
          <div className={styles.conter}>
            <h1>SIN FAVORITOS</h1>
            <span className={styles.parpadea}>
              <strong>AGREGALOS DESDE HOME</strong>
            </span>
            <hr />
          </div>
        )}
        {favorites.map((card) => (
          <CardF
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
