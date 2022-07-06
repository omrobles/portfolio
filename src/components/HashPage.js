import React from "react";
import "./HashPage.css";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyDevs from "./MyDevs";

const HashPage = () => {
  return (
    <div className="InfoContainer overflow-auto col-9 p-0">
      <AboutMe />
      <Skills />
      <MyDevs />
      <section id="contact" className="m-0 p-5 sectionInfo">
        <h1>hola desde Contact</h1>
      </section>
    </div>
  );
};

export default HashPage;
