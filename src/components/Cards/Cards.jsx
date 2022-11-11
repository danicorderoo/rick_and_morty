import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import styles from "./Cards.module.css";

const Container = styled.div`
  background-color: rgba(32, 35, 41, 0.6);
  border-bottom: #c0df40 solid 1px;
  border-top: #c0df40 solid 1px;
  padding-top: 15px;
  margin-top: 30px;
  margin-bottom: -415px;
`;

export default function Cards(props) {
  const { characters } = props;
  return (
    <Container>
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
    </Container>
  );
}
