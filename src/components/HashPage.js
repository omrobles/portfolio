import React from "react";
import "./HashPage.css";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import MyDevs from "./MyDevs";
import Contact from "./Contact";
import Footer from "./Footer";

const HashPage = () => {
  return (
    <div className="InfoContainer overflow-auto col-9 p-0">
      <AboutMe />
      <Skills />
      <MyDevs />
      <Contact />
      <Footer />
    </div>
  );
};

export default HashPage;
