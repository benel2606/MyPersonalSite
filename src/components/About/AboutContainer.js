import React from "react";
import "./AboutContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutContainer = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <img src="developer.png" alt="" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="about-inner">
              <h2>About Me</h2>
              <p>
                Hey, I’m a Benel,Fourth-year Software Engineering Student.
                Experience in the development of undergraduate studies.
                {/* Creative, Team Player, Independent and fast learner. */}
                Love learning and earning new abilities. High motivation and
                willingness of challenging mission. Aside from having fun with
                development I like to Travel, Sport And Movies.
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
                  <span>HTML</span>
                </li>
                <li>
                  <span>CSS</span>
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
              <a href="./Benel Aharon- CV.pdf" className="btn btn-fill">
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
