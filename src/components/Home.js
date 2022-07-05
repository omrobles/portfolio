import React from "react";
import "./Home.css";
import { HashLink } from "react-router-hash-link";
import picture from "../media/picture.jpg";

const Home = () => {
  return (
    <nav className="NavContainer col-3">
      <div>
        <img src={picture} alt="Omar Robles" className="imgPicture" />
        <h3>Omar Robles Hernandez</h3>
        <h5>Full Stack Developer</h5>
      </div>

      <ul>
        <li>
          <HashLink to="/page#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/page#my-devs">My Develops</HashLink>
        </li>
        <li>
          <HashLink to="/page#academic">Academic Knowledge</HashLink>
        </li>
        <li>
          <HashLink to="/page#contact">Contact</HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
