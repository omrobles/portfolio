import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNode,
  faGitAlt,
  faGithub,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <section id="about-me" className="m-0 p-5">
      <div id="carouselAbout" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active Slide">
            <h3 className="H3">
              Hi ! My name is <span>Omar Robles</span> and I am a{" "}
              <span>Full-Stack Developer...</span>
            </h3>
          </div>
          <div class="carousel-item Slide">
            <h3 className="H3">
              With <span>big passion</span> for technology I look to bring{" "}
              <span>ideal solutions</span> for real world.
            </h3>
          </div>
          <div class="carousel-item Slide">
            <div className="Logos">
              <h3>Experience with:</h3>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faJsSquare} />
              <FontAwesomeIcon icon={faGitAlt} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNode} />
              <FontAwesomeIcon icon={faBootstrap} />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselAbout"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselAbout"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
