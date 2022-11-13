import React from "react";
import styles from "./Header.module.css";
import Bar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";

export default function Header(props) {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/home");
  };
  const backToAbout = () => {
    navigate("/about");
  };
  const backToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className={styles.header}>
      <div className={styles.sub}>
        <div className={styles.divTitle}>
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
            <button
              data-tip
              data-for="favoritesTip"
              onClick={backToFavorites}
              className={styles.favorites}
            />
            <ReactTooltip
              id="homeTip"
              place="bottom"
              effect="solid"
              delayShow={2000}>
              HOME
            </ReactTooltip>
            <ReactTooltip
              id="aboutTip"
              place="bottom"
              effect="solid"
              delayShow={2000}>
              ABOUT
            </ReactTooltip>
            <ReactTooltip
              id="favoritesTip"
              place="bottom"
              effect="solid"
              delayShow={2000}>
              favorites
            </ReactTooltip>
          </div>
        </div>
      </div>

      <div>
        <Bar onSearch={props.onSearch} onSearchAll={props.onSearchAll} />
      </div>
    </div>
  );
}
