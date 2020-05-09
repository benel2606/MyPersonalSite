import React from "react";
import { getProject } from "./ProjectInfo";
import PortfolioBox from "./PortfolioBox";
import "./PortfolioContainer.css";

const PortfolioConatainer = () => {
  const myProject = getProject();
  return (
    <div className="portfolio">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div className="container">
        <div className="row section-separator ">
          <div className="section-title col-sm-12">
            <h2 className="portfolio-title">
              Portfolio<hr></hr>
            </h2>
            <p>
              You can find more of my project on my{" "}
              <a className="my-github" href="https://github.com/benel2606">
                Github
              </a>
            </p>
          </div>
          <div className="project-gallery col-sm-12">
            <div className="portfolio row">
              {myProject.map((project, index) => {
                return <PortfolioBox key={index} project={project} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioConatainer;
