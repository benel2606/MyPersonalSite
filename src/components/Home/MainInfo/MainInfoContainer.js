import React from "react";
import PersonalInfo from "./PersonalInfo";
import "./MainInfoContainer.css";
import MyImage from "./MyImage";

const MainInfoContainer = () => {
  return (
    <div>
      <div className="main-info">
        <div className="container">
          <div className="row xs-column-reverse section-separator home-padding">
            <div className="col-sm-6">
              <MyImage />
            </div>
            <div className="col-sm-6">
              <PersonalInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfoContainer;
