import React from "react";
import "./Skills.css";

import htmlLogo from "../media/HTML5.png";
import cssLogo from "../media/CSS3.png";
import jsLogo from "../media/Javascript.png";
import reactLogo from "../media/react2.png";
import nodeLogo from "../media/nodejs.png";
import mongodbLogo from "../media/mongodb.png";
import bootstrapLogo from "../media/bootstrap.png";
import gitLogo from "../media/git.png";
import githubLogo from "../media/github.png";
import collaboration from "../media/softskills.png";

const Skills = () => {
  return (
    <section id="skills" className="m-0 p-5">
      <h2>Hard Skills</h2>
      <div id="hardSkillsInfo" class="col-6 p-1 skillsInfo">
        <p>
          I count with different hard skills to be a Full-Stack Developer. With the usage of{" "}
          <strong>HTML</strong> for estructure, <strong>CSS</strong> for styling and{" "}
          <strong>Javascript</strong> to manage all the logic, I am able to create small
          applications with great perfomance.
          <br />
          Adding libraries and tools such as <strong>ReactJS</strong>, <strong>NodeJS</strong>,{" "}
          <strong>MongoDB</strong> and<strong> Bootstrap</strong>; I am able to create{" "}
          <strong>Frontend</strong>, <strong>Backend</strong> or <strong>Full-Stack </strong>
          applications. <br />
          Using technologies as <strong>Git</strong> for control versioning and{" "}
          <strong>GitHub</strong> to upload my codes, I am able to share my contributions to others.
        </p>
      </div>
      <div id="hardSkillsLogos" class="col-6 p-1">
        <div id="techLogos" className="m-2">
          <img src={htmlLogo} />
          <img src={cssLogo} />
          <img src={jsLogo} />
          <img src={reactLogo} />
          <img src={bootstrapLogo} />
          <img src={nodeLogo} />
          <img src={mongodbLogo} />
          <img src={gitLogo} />
          <img src={githubLogo} />
        </div>
      </div>
      <h2>Soft Skills</h2>
      <div id="softSkillsInfo" class="col-6 p-2 skillsInfo">
        <p>
          Through the years in my professional career I have developed skills in{" "}
          <strong>Project Management</strong> and <strong>teamwork</strong>, always focusing on the
          objectives and looking for the <strong>most efficient solutions</strong> for the daily
          challenges. With an <strong>open mind</strong> I allow myself to{" "}
          <strong>learn and teach</strong> from other persons getting{" "}
          <strong>continuous improvement</strong> in my professional and personal development.
        </p>
      </div>
      <div id="softSkillsLogos" class="col-6 p-0">
        <div id="softLogos">
          <img src={collaboration} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
