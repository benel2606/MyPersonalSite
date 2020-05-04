import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./PortfolioBox.css";

const PortfolioBox = ({ project }) => {
  const [showHover, setShowHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const getHover = (name) => {
    return (
      <figcaption className="fig-caption">
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"></FontAwesomeIcon>
        <h5 className="project-name">{name}</h5>
      </figcaption>
    );
  };
  return (
    <div className="grid-item col-md-4 col-sm-6 col-xs-12 ">
      <div>{project.name}</div>
      <figure
        onMouseOver={() => setShowHover(true)}
        onMouseLeave={() => setShowHover(false)}
        onClick={() => {
          setShowModal(true);
        }}>
        <img src={project.main_image} alt="" />
        {showHover ? getHover(project.name) : null}
      </figure>
      <PortfolioModal
        project={project}
        showModal={showModal}
        setShowModal={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default PortfolioBox;
