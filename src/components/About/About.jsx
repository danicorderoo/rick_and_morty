import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding: 40px;
  margin-top: 30px;
`;

export default function About(props) {
  return (
    <Container>
      <h1>Holisss soy About</h1>
    </Container>
  );
}
