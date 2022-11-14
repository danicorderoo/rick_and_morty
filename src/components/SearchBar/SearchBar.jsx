import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import ReactTooltip from "react-tooltip";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClickAdd = () => {
    dispatch(actions.addCard(id));
    setId("");
    // props.onSearch(id);
  };

  const handleClickRandom = () => {
    dispatch(actions.addCard(Math.floor(Math.random() * 826)));
  };

  const handleClickAll = () => {
    dispatch(actions.addAll());
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
          onClick={handleClickRandom}>
          Ramdon
        </button>
        <button
          className={styles.Buttons}
          data-tip
          data-for="searchTip"
          onClick={handleClickAdd}>
          Agregar
        </button>
        <button
          className={styles.Buttons}
          data-tip
          data-for="allTip"
          onClick={handleClickAll}>
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
