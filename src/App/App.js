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
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function login(userDate) {
    const username = "danielc@soyhenry.com";
    const password = "Daniel.1";
    if (userDate.password === password && userDate.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  React.useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Header />}
      <Routes>
        <Route exact path="/" element={<Login login={login} />} />
        <Route exact path="/home" element={<Cards />} />
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
