import React, { useState } from "react";
import styles from "./Login.module.css";

const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

const validation = (userDate) => {
  let errors = {};

  if (!regexUser.test(userDate.username)) {
    errors.username = "Debe ser un correo electrónico";
  }
  if (userDate.username.length >= 35) {
    errors.username = "Debe tener menos de 35";
  }
  if (!userDate.username) {
    errors.username = "No puede quedar vacio Username";
  }
  if (!regexPassword.test(userDate.password)) {
    errors.password = "La contraseña es invalida";
  }

  return errors;
};

export default function About(props) {
  const [userDate, setUserDate] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    const nombre = event.target.name;
    const valor = event.target.value;
    setUserDate({ ...userDate, [nombre]: valor });

    setErrors(
      validation({
        ...userDate,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.password && !errors.username) {
      console.log("pasa");
      props.login(userDate);
    } else {
      console.log("no pasa");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.Search}>
          <label>Username: </label>
          <input
            className={styles.Entrada}
            name="username"
            type="email"
            placeholder="Ingrese su Username..."
            value={userDate.username}
            onChange={handleInputChange}
          />
          {errors.username ? <p>{errors.username}</p> : <h5>ok</h5>}

          <label>Password: </label>
          <input
            className={styles.Entrada}
            name="password"
            type="text"
            placeholder="Ingrese su Contraseña..."
            value={userDate.password}
            onChange={handleInputChange}
          />
          {errors.password ? <p>{errors.password}</p> : <h5>ok</h5>}

          <button className={styles.Buttons} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
