import React from "react";
import styled from "styled-components";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Buttons = styled.button`
  border-radius: 5px;
  border-color: transparent;
  margin: 10px;
  height: 38px;
  width: 38px;
  padding: 10px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #c82a2a;
    font-size: 1em;
    box-shadow: 0px 0px 15px #c82a2a;
    transition: 1s;
  }
`;

const Container = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 15px;
  transition: 1s;
  height: 31em;
  width: 18em;
`;

const DivHeader = styled.div`
  display: flex;
  height: 100px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DivFooter = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
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
      <DivHeader>
        <h2>{props.name}</h2>
        <Buttons onClick={() => props.onClose(props.id)}>X</Buttons>
      </DivHeader>
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
          <ReactTooltip
            id="imgTip"
            place="bottom"
            effect="solid"
            delayShow={2500}>
            ¡HAZ CLICK!
          </ReactTooltip>
        </Link>
      </div>
      <DivFooter>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </DivFooter>
    </Container>
  );
}
