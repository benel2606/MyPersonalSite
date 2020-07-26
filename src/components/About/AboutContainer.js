import React from "react";
import "./AboutContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutContainer = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <img src="developer.png" alt="" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="about-inner">
              <h2 className="about-title">About Me</h2>
              <p>
                Hey, I’m Benel, Outstanding Software Engineering Graduate.
                Experience in the development of undergraduate studies. Love
                learning and earning new abilities. High motivation and
                willingness of challenging mission. Aside from having fun with
                code I like to travel, sport And watching movies.
              </p>
              <div className="tech">Key Technologies:</div>
              <ul className="tech-list">
                <li>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>NodeJS</span>
                </li>
                <li>
                  <span>HTML5</span>
                </li>
                <li>
                  <span>CSS3</span>
                </li>
                <li>
                  <span>Java</span>
                </li>
                <li>
                  <span>Python</span>
                </li>
                <li>
                  <span>C++</span>
                </li>
              </ul>
              <a href="./Benel Aharon.pdf" className="btn btn-fill">
                Downlaod CV
                <FontAwesomeIcon
                  icon={faDownload}
                  className="icons"></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
