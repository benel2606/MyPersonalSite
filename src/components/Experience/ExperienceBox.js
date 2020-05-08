import React from "react";
import "./ExperienceBox.css";

const ExperienceBox = ({ exp }) => {
  return (
    <div className="education-deatils">
      <div className="education-item dark-bg">
        <div className="img-align">
          <img className="logo" src={`${exp.image}`} alt="" />
        </div>
        {exp.type === "edu" ? (
          <h4>
            {exp.degree}, <div className="title">{exp.title}</div>
          </h4>
        ) : (
          <h4>
            {exp.position}, <div className="title">{exp.workPlace}</div>
          </h4>
        )}

        <h5>{exp.institution}</h5>

        <div className="year">{exp.years}</div>
        <p>{exp.description}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
