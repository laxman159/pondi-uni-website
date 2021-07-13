import React from "react";
import "./Banner.css";
import logo from "../assets/pondi.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="head">
        <h4>Welcome to </h4>
        <h1>Pondicherry University</h1>
        <h5>
          A Central University under Ministry of Education, Govt. of India.
        </h5>
      </div>
    </div>
  );
}
