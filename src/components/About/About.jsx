/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./About.module.css";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.svg";
import javascriptImg from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";
import redux from "../../assets/redux.png";

const techSkills = [
  {
    tech: "HTML",
    image: htmlImg,
    link: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    tech: "CSS",
    image: cssImg,
    link: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    tech: "JavaScript",
    image: javascriptImg,
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    tech: "React",
    image: reactImg,
    link: "https://es.reactjs.org/",
  },
  {
    tech: "Redux",
    image: redux,
    link: "https://es.redux.js.org/",
  },
];

export default function About(props) {
  return (
    <div className={styles.container}>
      <h1>ABOUT</h1>

      <div className={styles.portal}></div>
      <p>
        <strong>Hola, soy Daniel</strong> este proyecto fue creado con:{" "}
      </p>
      <ul className={styles.unorderedList}>
        {techSkills.map((skill) => (
          <button
            className={`${styles.listItem} ${styles.listItem.img}`}
            key={skill}
            onclick="<a href=www.google.com></a>">
            <a href={skill.link} target="_blank">
              <strong>{skill.tech}</strong>
            </a>

            <img src={skill.image} alt={skill.tech} />
          </button>
        ))}
      </ul>
      <br />
      <p>
        para mas información o dejar tu feedback, contactame en{" "}
        <a href="https://www.linkedin.com/in/dcordero-ing/" target="_blank">
          <strong>linkedIn</strong>
        </a>
      </p>
    </div>
  );
}
