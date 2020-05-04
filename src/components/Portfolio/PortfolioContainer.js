import React from "react";
import { getProject } from "./ProjectInfo";
import PortfolioBox from "./PortfolioBox";
import "./PortfolioContainer.css";

const PortfolioConatainer = () => {
  const myProject = getProject();
  return (
    <div className="row section-separator ">
      <div className="section-title col-sm-12">
        <h3>Portfolio</h3>
      </div>
      <div className="container">
        <div className="project-gallery col-sm-12">
          <div className="portfolio row">
            {myProject.map((project, index) => {
              return <PortfolioBox key={index} project={project} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioConatainer;

/*
<div class="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <h3>Recent Portfolio</h3>
                    </div>*/
