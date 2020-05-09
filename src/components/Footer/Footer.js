import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul className="social-icons-footer">
          <li>
            <a href="https://www.linkedin.com/in/benel-aharon-337822165/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://github.com/benel2606">
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
      <div>&copy;Benel Aharon 2020</div>
    </div>
  );
};

export default Footer;
