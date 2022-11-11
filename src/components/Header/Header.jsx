import React from "react";
import styles from "./Header.module.css";
import Bar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";

export default function Header(props) {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  const backToAbout = () => {
    navigate("/about");
  };

  return (
    <div className={styles.header}>
      <div className={styles.sub}>
        <div className={styles.divTitle}></div>

        <div className={styles.menu}>
          <button
            data-tip
            data-for="homeTip"
            onClick={backToHome}
            className={styles.home}
          />
          <button
            data-tip
            data-for="aboutTip"
            onClick={backToAbout}
            className={styles.about}
          />
          <ReactTooltip
            id="homeTip"
            place="bottom"
            effect="solid"
            delayShow={500}>
            HOME
          </ReactTooltip>
          <ReactTooltip
            id="aboutTip"
            place="bottom"
            effect="solid"
            delayShow={500}>
            ABOUT
          </ReactTooltip>
        </div>
      </div>

      <Bar onSearch={props.onSearch} onSearchAll={props.onSearchAll} />
    </div>
  );
}
