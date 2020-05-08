import React from "react";
import "./App.css";
import MainInfoContainer from "./components/Home/MainInfo/MainInfoContainer";
import AboutContainer from "./components/About/AboutContainer";
import ExperienceConatiner from "./components/Experience/ExperienceContainer";
import PortfolioConatainer from "./components/Portfolio/PortfolioContainer";
import NavBar from "./components/NavBar/NavBar";
import TechAndTools from "./components/TechAndTools/TechAndTools";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainInfoContainer />
      <AboutContainer />
      <ExperienceConatiner />
      <PortfolioConatainer />
      {/* <TechAndTools /> */}
    </div>
  );
};

export default App;
