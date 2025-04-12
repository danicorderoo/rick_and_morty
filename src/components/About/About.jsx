/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./About.module.css";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.svg";
import javascriptImg from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
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
      <div className={styles.titulo}>
        <h1>ABOUT</h1>
      </div>
      <p>
        <strong>Hola, Soy Daniel</strong> este proyecto fue creado con:{" "}
      </p>
      <ul className={styles.unorderedList}>
        {techSkills.map((skill) => (
          <button
            className={`${styles.listItem} ${styles.listItem.img}`}
            key={skill}
            onclick="<a href=www.google.com></a>"
          >
            <a href={skill.link} target="_blank">
              <strong>{skill.tech}</strong>
            </a>

            <img src={skill.image} alt={skill.tech} />
          </button>
        ))}
      </ul>
      <br />
      <p>Para más información o dejar su feedback, contáctame en </p>
      <div className={styles.botones}>
        <a href="https://www.linkedin.com/in/dcordero-ing/" target="_blank">
          <img src={linkedin} alt="" srcset="" />
        </a>
        <a href="https://github.com/danicorderoo" target="_blank">
          <img src={github} alt="" srcset="" />
        </a>
      </div>
    </div>
  );
}
