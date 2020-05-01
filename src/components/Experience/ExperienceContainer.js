import React from "react";
import "./ExperienceContainer.css";
import ExperienceBox from "./ExperienceBox";
import { getExp } from "./ExperienceInfo";

const ExperienceConatiner = () => {
  const educationExp = getExp("education");
  const workExp = getExp("work");
  return (
    <div className="experience">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <h3 className="exp-title">Education</h3>
            {educationExp.map((exp) => {
              return <ExperienceBox exp={exp} key={exp.key} />;
            })}
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="work">
              <h3 className="exp-title">Work Experience</h3>
              {workExp.map((exp) => {
                return <ExperienceBox exp={exp} key={exp.key} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceConatiner;
