import React, { useState } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const Entrada = styled.input`
  height: 30px;
  width: 120px;
  border: #c0df40 solid 1px;
  &:hover {
    background-color: #d3e880;
    transition: 1s;
  }
  &:focus {
    background-color: #c0df40;
  }
`;

const Buttons = styled.button`
  font-family: "MyFont";
  border-radius: 5px;
  margin: 5px;
  height: 30px;
  width: 80px;
  padding: 5px;
  background-color: rgba(61, 174, 194, 0.6);
  cursor: pointer;
  border-color: transparent;
  transition: 1s;
  &:hover {
    background-color: #c0df40;
    transition: 1.5s;
    font-size: 0.9em;
    box-shadow: 0px 0px 10px #8db001;
  }
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Botonera = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <Search>
      <div>
        <Entrada
          data-tip
          data-for="inputTip"
          type="search"
          value={id}
          onChange={handleChange}
          placeholder="ID"
        />
      </div>
      <Botonera>
        <Buttons
          data-tip
          data-for="romdomTip"
          onClick={() => props.onSearch(Math.floor(Math.random() * 826))}>
          Ramdon
        </Buttons>
        <Buttons
          data-tip
          data-for="searchTip"
          onClick={() => props.onSearch(id)}>
          Agregar
        </Buttons>
        <Buttons
          data-tip
          data-for="searchTip"
          onClick={() => props.onSearchAll()}>
          All
        </Buttons>
      </Botonera>

      <ReactTooltip id="romdomTip" place="left" effect="solid" delayShow={2000}>
        Agregar de forma aleatoria
      </ReactTooltip>
      <ReactTooltip id="searchTip" place="left" effect="solid" delayShow={2000}>
        Agregar por ID
      </ReactTooltip>
      <ReactTooltip id="inputTip" place="left" effect="solid" delayShow={2000}>
        Ingresa el ID
      </ReactTooltip>
    </Search>
  );
}
