import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgba(32, 35, 41, 0.7);

  border-bottom: rgb(192, 223, 64) solid 1px;
  border-top: #c0df40 solid 1px;
  -webkit-text-stroke: 0.1px #3daec2ab;
  color: #c0df40;
  font-size: 1.5em;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;
  align-content: center;
  margin-top: 30px;
  margin-bottom: -271.2px;
`;

const IMG = styled.div`
  margin-top: -70px;
`;

export default function About(props) {
  return (
    <Container>
      <div>
        <h1>ERROR 404...</h1>
        <h2>Dimimención equivocada Morty...</h2>
      </div>
      <IMG>
        <img
          height={400}
          src="https://images.fineartamerica.com/images/artworkimages/medium/3/rick-and-morty-falling-portal-to-portal-carter-briar-transparent.png"
          alt=""
          srcset=""
        />
      </IMG>
    </Container>
  );
}
