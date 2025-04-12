/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import ReactTooltip from "react-tooltip";
import rick from "../../img/rick.png";

export default function Cards(props) {
  // const { characters } = props;
  let dispatch = useDispatch();
  let characters = useSelector((state) => state.myCharacters);
  let animContainer = styles.animContainer;
  let animBotonera = styles.animBotonera;
  const handleGender = (event) => {
    const gender = event.target.name;

    dispatch(actions.filterCards(gender));
  };

  return (
    <div>
      {characters.length ? (animContainer = null) : null}
      <div className={`${styles.Container} ${animContainer}`}>
        {characters.length ? (animBotonera = null) : null}
        {characters.length ? null : (
          <div>
            <img id="1" className={styles.rick} src={rick} />
          </div>
        )}

        <div id="menu" className={`${styles.Botonera} ${animBotonera}`}>
          <button
            data-tip
            data-for="todosTip"
            className={styles.all}
            name="All"
            onClick={handleGender}
          />
          <button
            data-tip
            data-for="femaleTip"
            className={styles.famale}
            name="Female"
            onClick={handleGender}
          />

          <button
            data-tip
            data-for="maleTip"
            className={styles.male}
            name="Male"
            onClick={handleGender}
          />

          <button
            data-tip
            data-for="gerderlessTip"
            className={styles.genderless}
            name="Genderless"
            onClick={handleGender}
          />

          <button
            data-tip
            data-for="unknownTip"
            className={styles.unknown}
            name="unknown"
            onClick={handleGender}
          />

          <ReactTooltip
            id="femaleTip"
            place="top"
            effect="solid"
            delayShow={2000}
          >
            FEMALE
          </ReactTooltip>
          <ReactTooltip
            id="maleTip"
            place="top"
            effect="solid"
            delayShow={2000}
          >
            MALE
          </ReactTooltip>
          <ReactTooltip
            id="gerderlessTip"
            place="top"
            effect="solid"
            delayShow={2000}
          >
            GENDERLESS
          </ReactTooltip>
          <ReactTooltip
            id="unknownTip"
            place="top"
            effect="solid"
            delayShow={2000}
          >
            UNKNOWN
          </ReactTooltip>
          <ReactTooltip
            id="todosTip"
            place="top"
            effect="solid"
            delayShow={2000}
          >
            ALL
          </ReactTooltip>
        </div>

        <div className={styles.cartas}>
          {characters.length ? null : (
            <div className={styles.conter}>
              <h1 style={{ letterSpacing: "5px", textAlign: "center" }}>
                AGREGA UNA CARTA
              </h1>
              <span className={styles.parpadea}>
                <strong style={{ letterSpacing: "5px", textAlign: "center" }}>
                  en la parte superior de la APP
                </strong>
              </span>
              <hr />
            </div>
          )}
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
      </div>
    </div>
  );
}
