import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import ReactTooltip from "react-tooltip";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = (event) => {
    setId("");
    props.onSearch(id);
  };

  return (
    <div className={styles.Search}>
      <div>
        <input
          className={styles.Entrada}
          data-tip
          data-for="inputTip"
          type="search"
          value={id}
          onChange={handleChange}
          placeholder="ID"
        />
      </div>
      <div className={styles.Botonera}>
        <button
          className={styles.Buttons}
          data-tip
          data-for="romdomTip"
          onClick={() => props.onSearch(Math.floor(Math.random() * 826))}>
          Ramdon
        </button>
        <button
          className={styles.Buttons}
          data-tip
          data-for="searchTip"
          onClick={handleClick}>
          Agregar
        </button>
        <button
          className={styles.Buttons}
          data-tip
          data-for="allTip"
          onClick={() => props.onSearchAll()}>
          <strong>All</strong>
        </button>
      </div>

      <ReactTooltip
        id="romdomTip"
        place="bottom"
        effect="left"
        delayShow={2000}>
        AGREGA ALEATORIO
      </ReactTooltip>
      <ReactTooltip id="searchTip" place="left" effect="solid" delayShow={2000}>
        AGREGA ID
      </ReactTooltip>
      <ReactTooltip id="inputTip" place="left" effect="solid" delayShow={2000}>
        Ingresa el ID
      </ReactTooltip>
      <ReactTooltip id="allTip" place="left" effect="solid" delayShow={2000}>
        AGREGA TODAS
      </ReactTooltip>
    </div>
  );
}
