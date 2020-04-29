import React from "react";
import PersonalInfo from "./PersonalInfo";
import "./MainInfoContainer.css";
import MyImage from "./MyImage";

const MainInfo = () => {
  return (
    <div className="main-info">
      <div>
        <span className="bubble">Hello I'm</span>
      </div>
      <div className="row xs-column-reverse">
        <div className="col-sm-6 ">
          <PersonalInfo />
        </div>
        <div className="col-sm-6">
          <MyImage />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
