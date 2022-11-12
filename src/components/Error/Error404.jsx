import React from "react";
import styles from "./Error.module.css";

export default function About(props) {
  return (
    <div className={styles.Container}>
      <div>
        <h1>ERROR 404...</h1>
        <h2>Dimimención equivocada Morty...</h2>
      </div>
      <div className={styles.IMG}>
        <img
          height={400}
          src="https://images.fineartamerica.com/images/artworkimages/medium/3/rick-and-morty-falling-portal-to-portal-carter-briar-transparent.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}
