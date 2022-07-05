import React from "react";
import "./HashPage.css";
import { HashLink, NavHashLink } from "react-router-hash-link";

const HashPage = () => {
  return (
    <div className="InfoContainer overflow-auto col-9">
      <section id="about" className="sectionInfo">
        <h1>hola desde about</h1>
      </section>
      <section id="my-devs" className="sectionInfo">
        <h1>hola desde My devs</h1>
      </section>
      <section id="academic" className="sectionInfo">
        <h1>hola desde Academic</h1>
      </section>
      <section id="contact" className="sectionInfo">
        <h1>hola desde Contact</h1>
      </section>
    </div>
  );
};

export default HashPage;
