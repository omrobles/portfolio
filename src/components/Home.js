import React from "react";
import "./Home.css";
import { HashLink } from "react-router-hash-link";
import picture from "../media/picture.jpg";

const Home = () => {
  return (
    <nav className="NavContainer col-3 m-0">
      <div className="PersonalInfo">
        <img src={picture} alt="Omar Robles" className="imgPicture" />
        <h3>Omar Robles Hernandez</h3>
        <h5>Full-Stack Developer</h5>
      </div>
      <ul className="sectionUl">
        <li>
          <HashLink to="/#about-me">About Me</HashLink>
        </li>

        <li>
          <HashLink to="/#skills">Skills</HashLink>
        </li>
        <li>
          <HashLink to="/#my-develops">My Develops</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>
      <div className="contactInfo">
        <a href="https://www.linkedin.com/in/omar-robles-hernandez-7b5b1537" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/omrobles" target="_blank">
          <i class="bi bi-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Home;
