import React from "react";

const TechList = ({ list }) => {
  return (
    <div className="grid-item col-md-4 col-sm-6 col-xs-12 ">
      <div>{list}</div>
    </div>
  );
};

export default TechList;
