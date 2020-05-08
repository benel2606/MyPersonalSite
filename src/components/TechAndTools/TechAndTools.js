import React from "react";
import "./TechAndTools.css";
import TechList from "./TechList";
const TechAndTools = () => {
  const lists = [1, 2, 3, 4, 5, 6];
  return (
    <div className="portfolio">
      <div className="container">
        <div className="row section-separator ">
          <div className="section-title col-sm-12">
            <h2 className="tech-title">Tech And Tools</h2>
          </div>
          <div className="col-sm-12">
            <div className="row">
              {lists.map((list) => (
                <TechList list={list} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechAndTools;
