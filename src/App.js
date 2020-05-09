import React from "react";
import "./App.css";
import MainInfoContainer from "./components/Home/MainInfo/MainInfoContainer";
import AboutContainer from "./components/About/AboutContainer";
import ExperienceConatiner from "./components/Experience/ExperienceContainer";
import PortfolioConatainer from "./components/Portfolio/PortfolioContainer";
import NavBar from "./components/NavBar/NavBar";
import TechAndToolsContainer from "./components/TechAndTools/TechAndToolsContainer";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainInfoContainer />
      <AboutContainer />
      <ExperienceConatiner />
      <PortfolioConatainer />
      <TechAndToolsContainer />
      <Footer />
    </div>
  );
};

export default App;
