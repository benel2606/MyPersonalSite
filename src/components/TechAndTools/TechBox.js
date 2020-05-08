import React from "react";
import "./TechBox.css";

const TechList = ({ name, image }) => {
  return (
    <div className="grid-item col-md-4 col-sm-6 col-xs-12 ">
      <div className="tech-box">
        <img src={image} alt=""></img>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default TechList;
