import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Detail(props) {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <div className={styles.IMG}>
          <img src={character.image} alt="img" />
        </div>

        <div className={styles.infos}>
          <h2>NOMBRE: {character.name}</h2>
          <h2>STATUS: {character.status}</h2>
          <h2>ESPECIE: {character.species}</h2>
          <h2>GENERO: {character.gender}</h2>
        </div>
      </div>
    </div>
  );
}
