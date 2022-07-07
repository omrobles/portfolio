import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container-md">
      <p className="">
        <FontAwesomeIcon icon={faCopyright} /> 2022 Omar Robles. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
