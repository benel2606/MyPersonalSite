import React from "react";
import "./ExperienceBox.css";

const ExperienceBox = (exp) => {
  return (
    <div className="education-deatils">
      <div className="education-item dark-bg">
        <div className="img-align">
          <img className="logo" src={`${exp.exp.image}`} alt="" />
        </div>
        {exp.exp.type === "edu" ? (
          <h4>
            {exp.exp.degree}, <div className="title">{exp.exp.title}</div>
          </h4>
        ) : (
          <h4>
            {exp.exp.position}, <div className="title">{exp.exp.workPlace}</div>
          </h4>
        )}

        <h5>{exp.exp.institution}</h5>

        <div className="year">{exp.exp.years}</div>
        <p>{exp.exp.description}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
