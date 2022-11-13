import "./App.css";
import Cards from "../components/Cards/Cards.jsx";
import Header from "../components/Header/Header.jsx";
import About from "../components/About/About.jsx";
import Detail from "../components/Detail/Detail.jsx";
import Error from "../components/Error/Error404.jsx";
import Login from "../components/Login/Login.jsx";
import Favorites from "../components/Favorites/Favorites.jsx";
import React from "react";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ScrollToTop from "react-scroll-to-top";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/index";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const username = "danielc@soyhenry.com";
  const password = "Daniel.1";
  const dispatch = useDispatch();

  function login(userDate) {
    if (userDate.password === password && userDate.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  React.useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    for (let i = 0; i < characters.length; i++) {
      const element = characters[i];
      // eslint-disable-next-line eqeqeq
      if (element.id == character) {
        return Swal.fire({
          position: "top",
          icon: "warning",
          title: "¡Solo es Ciencia Amigo!",
          timer: 6000,
          timerProgressBar: true,
          width: 400,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          html: `
          <h3>Ya existe un personaje con ese ID</h3>`,
          backdrop: `
            rgba(32, 35, 41, 0.7)
            url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-97953505.gif")
            left bottom
            no-repeat
          `,
        });
      }
    }
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          Swal.fire({
            width: 0,
            showConfirmButton: false,
            timer: 1050,
            backdrop: `
              url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-90632132.gif")
              center center
              no-repeat
            `,
          });
        } else {
          Swal.fire({
            position: "top",
            icon: "warning",
            title: "¡Solo es ciencia Amigo!",
            timer: 6000,
            timerProgressBar: true,
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            html: `
            <h3>No existe ese ID en la <a href="https://rickandmortyapi.com/documentation/#character">API</a></h3>`,
            backdrop: `
              rgba(32, 35, 41, 0.7)
              url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-65285982.gif")
              right bottom
              no-repeat
            `,
          });
        }
      });
  };

  const onSearchAll = () => {
    setCharacters([]);
    let consult1 = [];

    for (let i = 1; i < 101; i++) {
      consult1 = [...consult1, i];
    }

    fetch(`https://rickandmortyapi.com/api/character/${consult1}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCharacters(() => [...data]);
        }
        Swal.fire({
          width: 0,
          showConfirmButton: false,
          timer: 1050,
          backdrop: `
            url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-90632132.gif")
            center center
            no-repeat
          `,
        });
      });
  };

  function onClose(id) {
    Swal.fire({
      position: "top",
      title: "¿Estás seguro?",
      text: "Quieres eliminar esta carta",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí... ¡ELIMINAR!",
      cancelButtonText: "No",
      backdrop: `
      rgba(32, 35, 41, 0.7)
      url("http://www.animated-gifs.fr/category_cartoons/rick-morty/rick-and-morty-88484938.gif")
      left bottom
      no-repeat
    `,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setCharacters((eliminado) =>
          eliminado.filter((char) => char.id !== id)
        );
        dispatch(actions.delteFavorite(id));
        Swal.fire({
          title: "Eliminada!",
          text: "Olvídala de una vez por todas chico",
          timer: 3000,
          icon: "success",
          timerProgressBar: true,
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelado",
          text: "¡En tu Cara!",
          icon: "error",
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  }

  return (
    <div className="App">
      {location.pathname === "/" ? null : (
        <Header onSearch={onSearch} onSearchAll={onSearchAll} />
      )}
      <Routes>
        <Route exact path="/" element={<Login login={login} />} />

        <Route
          exact
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail detailId />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollToTop smooth className="upButton" color="transparent" />
      <div className="footer">
        <h4>Daniel Cordero - Desde Venezuela con 💚</h4>
      </div>
    </div>
  );
}

export default App;
