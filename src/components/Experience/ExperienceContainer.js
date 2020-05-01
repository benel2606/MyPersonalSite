import React from "react";
import "./ExperienceContainer.css";
import ExperienceBox from "./ExperienceBox";
import { getExp } from "./ExperienceInfo";

const ExperienceConatiner = () => {
  const educationExp = getExp("education");
  const workExp = getExp("work");
  return (
    <div className="experience">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <h3 className="exp-title">Education</h3>
            {educationExp.map((exp) => {
              return <ExperienceBox exp={exp} key={exp.key} />;
            })}
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="work">
              <h3 className="exp-title">Work Experience</h3>
              {workExp.map((exp) => {
                return <ExperienceBox exp={exp} key={exp.key} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceConatiner;

/*<div class="bolor-overlay">
      <div class="container">
        <div class="row section-separator">
          <div class="col-sm-12 col-md-6">
            <div class="mh-education">
              <h3
                class="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
                style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.2s; animation-name: fadeInUp;">
                Education
              </h3>
              <div class="mh-education-deatils">
                <div
                  class="mh-education-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                  style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.3s; animation-name: fadeInUp;">
                  <h4>
                    Art &amp; Multimedia From <a href="">Oxford University</a>
                  </h4>
                  <div class="mh-eduyear">2005-2008</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum{" "}
                  </p>
                </div>

                <div
                  class="mh-education-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                  style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.5s; animation-name: fadeInUp;">
                  <h4>
                    Art &amp; Multimedia From <a href="">Oxford University</a>
                  </h4>
                  <div class="mh-eduyear">2005-2008</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum{" "}
                  </p>
                </div>

                <div
                  class="mh-education-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.6s"
                  style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.6s; animation-name: fadeInUp;">
                  <h4>
                    Art &amp; Multimedia From <a href="">Oxford University</a>
                  </h4>
                  <div class="mh-eduyear">2005-2008</div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using L orem Ipsum{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="mh-work">
              <h3>Work Experience</h3>
              <div class="mh-experience-deatils">
                <div
                  class="mh-work-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                  style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.4s; animation-name: fadeInUp;">
                  <h4>
                    UI/UX Designer <a href="">IronSketch</a>
                  </h4>
                  <div class="mh-eduyear">2005-2008</div>
                  <span>Responsibility :</span>
                  <ul class="work-responsibility">
                    <li>
                      <i class="fa fa-circle"></i>Validate CSS
                    </li>
                    <li>
                      <i class="fa fa-circle"></i>Project Management
                    </li>
                  </ul>
                </div>

                <div
                  class="mh-work-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.6s"
                  style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.6s; animation-name: fadeInUp;">
                  <h4>
                    Art &amp; Multimedia From <a href="">Oxford University</a>
                  </h4>
                  <div class="mh-eduyear">2005-2008</div>
                  <span>Responsibility :</span>
                  <ul class="work-responsibility">
                    <li>
                      <i class="fa fa-circle"></i>Validate CSS
                    </li>
                    <li>
                      <i class="fa fa-circle"></i>Project Management
                    </li>
                  </ul>
                </div>

                <div
                  class="mh-work-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                  style="visibility: visible; animation-duration: 0.8s; animation-delay: 0.7s; animation-name: fadeInUp;">
                  <h4>
                    Art &amp; Multimedia From <a href="">Oxford University</a>
                  </h4>
                  <div class="mh-eduyear">2005-2008</div>
                  <span>Responsibility :</span>
                  <ul class="work-responsibility">
                    <li>
                      <i class="fa fa-circle"></i>Validate CSS
                    </li>
                    <li>
                      <i class="fa fa-circle"></i>Project Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); */
