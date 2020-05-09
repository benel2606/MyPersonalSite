import React from "react";
import "./TechAndToolsContainer.css";
import TechBox from "./TechBox";
import { getTech } from "./TechList";
const TechAndToolsContainer = () => {
  return (
    <div className="skills-tools">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div className="container">
        <div className="row section-separator ">
          <div className="section-title col-sm-12">
            <h2 className="tech-title">
              Skills And Tools<hr></hr>
            </h2>
          </div>
          <div className="col-sm-12">
            <div className="row">
              {getTech().map((tech, index) => (
                <TechBox key={index} name={tech.name} image={tech.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAndToolsContainer;
