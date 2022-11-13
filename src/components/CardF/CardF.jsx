import React from "react";
import styles from "./CardF.module.css";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useState, useEffect } from "react";

export default function Card(props) {
  var especie = styles.divBack;
  const dispatch = useDispatch();
  let favorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [favorites, props.id]);

  switch (props.species) {
    case "Human":
      especie = styles.human;
      break;
    case "Alien":
      especie = styles.alien;
      break;
    case "Robot":
      especie = styles.robot;
      break;
    case "Humanoid":
      especie = styles.humanoid;
      break;
    case "Mythological Creature":
      especie = styles.mythological;
      break;
    case "Animal":
      especie = styles.animal;
      break;
    case "Poopybutthole":
      especie = styles.poopy;
      break;
    case "unknown":
      especie = styles.unknown;
      break;
    case "Cronenberg":
      especie = styles.cronenberg;
      break;

    default:
      especie = styles.default;
      break;
  }

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(actions.delteFavorite(props.id));
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(actions.addFavorite(props));
    }
  };

  return (
    <div className={`${styles.Container} ${especie}`}>
      <div className={styles.DivHeader}>
        <h2>{props.name}</h2>
        {isFav ? (
          <button
            className={`${styles.hearth} ${styles.onHearth}`}
            onClick={handleFavorite}>
            💚
          </button>
        ) : (
          <button
            className={`${styles.hearth} ${styles.offHearth}`}
            onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>

      <div className={styles.divImg}>
        <Link to={`/detail/${props.id}`}>
          <img data-tip data-for="imgTip" src={props.image} alt="img" />
        </Link>
        <ReactTooltip
          id="imgTip"
          place="bottom"
          effect="solid"
          delayShow={2500}>
          ¡HAZ CLICK!
        </ReactTooltip>
        ;
      </div>

      <div className={styles.DivFooter}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}
