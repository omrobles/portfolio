import React from "react";
import "./HashPage.css";

import AboutMe from "./AboutMe";
import Skills from "./Skills";

const HashPage = () => {
  return (
    <div className="InfoContainer overflow-auto col-9 p-0">
      <AboutMe />
      <Skills />
      <section id="my-develops" className="m-0 p-5 sectionInfo">
        <h1>hola desde My devs</h1>
      </section>
      <section id="contact" className="m-0 p-5 sectionInfo">
        <h1>hola desde Contact</h1>
      </section>
    </div>
  );
};

export default HashPage;
