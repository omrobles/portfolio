import React from "react";
import "./HashPage.css";
import { HashLink, NavHashLink } from "react-router-hash-link";

import AboutMe from "./AboutMe";

const HashPage = () => {
  return (
    <div className="InfoContainer overflow-auto col-9 p-0">
      <AboutMe />
      <section id="my-develops" className="sectionInfo">
        <h1>hola desde My devs</h1>
      </section>
      <section id="skills" className="sectionInfo">
        <h1>hola desde Academic</h1>
      </section>
      <section id="contact" className="sectionInfo">
        <h1>hola desde Contact</h1>
      </section>
    </div>
  );
};

export default HashPage;
