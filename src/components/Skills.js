import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="m-0 p-5">
      <h2>Full-Stack Skills</h2>
      <div id="skillsInfo" class="col-6 p-2">
        I count with different hard skills to be a Full-Stack Developer. With the usage of{" "}
        <strong>HTML</strong> for estructure, <strong>CSS</strong> for styling and{" "}
        <strong>Javascript</strong> to manage all the logic, I am able to create small applications
        with great perfomance. Adding libraries and tools such as <strong>ReactJS</strong>,{" "}
        <strong>NodeJS</strong>, <strong>MongoDB</strong>,<strong>Bootstrap</strong>; I am able to
        create <strong>Frontend</strong>, <strong>Backend</strong> or <strong>Full-Stack </strong>
        applications. <br /> Below you can see some applications I have develop by my own.
      </div>
      <div id="skillsBars" class="col-6 p-3">
        <p>HTML5</p>
        <div class="progress">
          <div
            id="htmlBar"
            class="progress-bar progress-bar-striped bg-info"
            role="progressbar"
          ></div>
        </div>
        <p>CSS</p>
        <div class="progress">
          <div
            id="cssBar"
            class="progress-bar progress-bar-striped bg-info"
            role="progressbar"
          ></div>
        </div>
        <p>Javascript</p>
        <div class="progress">
          <div
            id="jsBar"
            class="progress-bar progress-bar-striped bg-info"
            role="progressbar"
          ></div>
        </div>
        <p>ReactJS</p>
        <div class="progress">
          <div
            id="reactBar"
            class="progress-bar progress-bar-striped bg-info"
            role="progressbar"
          ></div>
        </div>
        <p>NodeJS</p>
        <div class="progress">
          <div
            id="nodeBar"
            class="progress-bar progress-bar-striped bg-info"
            role="progressbar"
          ></div>
        </div>
        <p>MongoDB</p>
        <div class="progress">
          <div
            id="mongoBar"
            class="progress-bar progress-bar-striped bg-info"
            role="progressbar"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
