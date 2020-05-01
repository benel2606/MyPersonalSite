import React from "react";
import MainInfoContainer from "./components/Home/MainInfo/MainInfoContainer";
import AboutContainer from "./components/About/AboutContainer";
import ExperienceConatiner from "./components/Experience/ExperienceContainer";

const App = () => {
  return (
    <div>
      <MainInfoContainer />
      <AboutContainer />
      <ExperienceConatiner />
    </div>
  );
};

export default App;
