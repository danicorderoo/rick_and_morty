import "./App.css";
import Cards from "../components/Cards/Cards.jsx";
import Header from "../components/Header/Header.jsx";
import About from "../components/About/About.jsx";
import Detail from "../components/Detail/Detail.jsx";
import Error from "../components/Error/Error404.jsx";
import Favorites from "../components/Favorites/Favorites.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail detailId />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollToTop smooth className="upButton" color="transparent" />
      <div className="footer">
        <h4>🌌</h4>
      </div>
    </div>
  );
}

export default App;
