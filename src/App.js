import React from "react";
import MainInfoContainer from "./components/Home/MainInfo/MainInfoContainer";
import AboutContainer from "./components/About/AboutContainer";
import ExperienceConatiner from "./components/Experience/ExperienceContainer";
import PortfolioConatainer from "./components/Portfolio/PortfolioContainer";

const App = () => {
  return (
    <div>
      <MainInfoContainer />
      <AboutContainer />
      <ExperienceConatiner />
      <PortfolioConatainer />
    </div>
  );
};

export default App;
