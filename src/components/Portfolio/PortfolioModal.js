import React from "react";
import "./PortfolioModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const PortfolioModal = ({ showModal, setShowModal, project }) => {
  showModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  return (
    <div>
      <div className={showModal ? "modal display-block" : "modal display-none"}>
        <div className="portfolio-modal">
          <div className="container">
            <div className="row portfolio-modal-inner">
              <div className="col-sm-5">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="about-tag">
                  <ul>
                    {project.techs.map((tech, index) => {
                      return (
                        <li key={index}>
                          <span>{tech}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <a href={project.site} className="btn btn-fill">
                  Live Demo
                </a>
              </div>
              <div className="col-sm-7">
                <div className="portfolio-modal-img">
                  {project.images.map((image, index) => {
                    return (
                      <div key={index}>
                        <img src={image[0]} alt="" className="img-fluid" />
                        <p>{image[1]}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <button className="close-btn" onClick={setShowModal}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="search-icon"></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
