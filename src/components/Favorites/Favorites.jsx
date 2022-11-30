import React from "react";
import CardF from "../CardF/CardF";
import styles from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

export default function Cards(props) {
  let favorites = useSelector((state) => state.myFavorites);
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const reset = () => {
    navigate("/favorites");
  };

  const handleOrderMenor = () => {
    dispatch(actions.orderMenor());
    reset();
  };

  const handleOrderMayor = () => {
    dispatch(actions.orderMayor());
    reset();
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Botonera}>
        <button
          className={styles.menor}
          name="menor"
          onClick={handleOrderMenor}
        />
        <h4 className={styles.textFavorite}>{favorites.length}💚</h4>
        <button
          className={styles.mayor}
          name="menor"
          onClick={handleOrderMayor}
        />
      </div>

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
