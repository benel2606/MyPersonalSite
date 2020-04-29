import React from "react";
import "./PersonalInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const PersonalInfo = () => {
  return (
    <div>
      <h2 className="my-name">Benel Aharon</h2>
      <div className="my-title">Software Engineering Student</div>
      <ul>
        <li className="other-details">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icons"></FontAwesomeIcon>
          <a className="data" href="mailto:benel2606@gmail.com">
            benel2606@gmail.com
          </a>
        </li>
        <li className="other-details">
          <FontAwesomeIcon icon={faPhone} className="icons"></FontAwesomeIcon>
          <a className="data" href="callto:(+972) 52 5777807">
            (+972) 52 5777807
          </a>
        </li>
        <li className="other-details">
          <FontAwesomeIcon
            icon={faMapMarker}
            className="icons"></FontAwesomeIcon>
          <a href="none" className="data">
            Ashdod, Israel
          </a>
        </li>
      </ul>
      <ul className="social-icons icons">
        <li>
          <a href="https://www.facebook.com/ben.aharon.14">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/ben.aharon.14">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/ben.aharon.14">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PersonalInfo;
