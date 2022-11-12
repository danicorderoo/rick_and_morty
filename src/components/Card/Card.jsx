import React from "react";
import styles from "./Card.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Container = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  transition: 1s;
  height: 31em;
  width: 18em;
  background-color: rgb(0, 0, 0, 0.9);
  color: gray;
`;

export default function Card(props) {
  var especie = styles.divBack;

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

  return (
    <Container className={especie}>
      <div className={styles.DivHeader}>
        <h2>{props.name}</h2>
        <button
          className={styles.Buttons}
          onClick={() => props.onClose(props.id)}>
          X
        </button>
      </div>

      <div className={styles.divImg}>
        <Link to={`/detail/${props.id}`}>
          <img
            data-tip
            data-for="imgTip"
            src={props.image}
            alt="img"
            height={300}
            widt={300}
          />
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
    </Container>
  );
}
