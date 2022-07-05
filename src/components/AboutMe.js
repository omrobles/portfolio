import React from "react";
import "./AboutMe.css";
import htmlLogo from "../media/HTML5.png";
import cssLogo from "../media/CSS3.png";
import jsLogo from "../media/JavaScript-logo.png";
import reactLogo from "../media/React.png";
import nodeLogo from "../media/node.png";
import mongodbLogo from "../media/mongodb.png";

const AboutMe = () => {
  return (
    <section id="about-me" className="m-0 p-5">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
              <img src={htmlLogo} alt="HTML5" />
              <img src={cssLogo} alt="CSS3" />
              <img src={jsLogo} alt="Javascript" />
              <img src={reactLogo} alt="React" />
              <img src={nodeLogo} alt="NodeJS" />
              <img src={mongodbLogo} alt="MongoDB" />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
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
