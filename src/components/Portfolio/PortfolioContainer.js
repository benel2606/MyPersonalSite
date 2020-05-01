import React, { useState } from "react";
import "./PortfolioContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const PortfolioConatainer = () => {
  const [showComponents, setShowComponents] = useState(false);

  const getComponent = () => {
    return (
      <figcaption className="fig-caption">
        <FontAwesomeIcon icon={faSearch} className="fa"></FontAwesomeIcon>
        <h5 className="titles">Blog</h5>
      </figcaption>
    );
  };

  return (
    <div className="container">
      <div className="project-gallery col-sm-12">
        <div className="portfolio row">
          <div className="grid-item col-md-4 col-sm-6 col-xs-12 ">
            <figure
              onMouseOver={() => setShowComponents(true)}
              onMouseLeave={() => setShowComponents(false)}>
              <img src="blogs.jpg" alt="img04" />
              {showComponents ? getComponent() : null}
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioConatainer;
