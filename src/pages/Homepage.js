import { gsap } from "gsap";
import React, { useEffect } from "react";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Header from "../component/Header";
import logo from "../assets/pondi.png";
import "./homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".openingdiv",
      { height: "100vh" },
      { height: 0, duration: 1.5, opacity: 0, animation: "ExpoIn" }
    );
    tl.to(".openingdiv", { backgroundColor: "white" });
    tl.fromTo(".new", { fontSize: 0 }, { fontSize: " 1.5rem", duration: 1 });
  }, []);
  return (
    <div className="homemain">
      <div className="openingdiv">
        <img src={logo} alt="" />
        <h4>Pondicherry University, Karikal Campus</h4>
      </div>
      <Header />
      <Banner />
      <h3>MCA STUDENT WEBSITE</h3>

      <div className="notice">
        <h2>Notice Board</h2>
        <div className="general">
          <span>General</span>
          <hr />
          <li>Big Data,OS,CN Internal Marks is out, check in sams portal</li>
          <li>
            Exam Dates are out{" "}
            <Link style={{ color: "red" }} to="/timetable">
              click here
            </Link>
          </li>
        </div>
        <div className="exam">
          <span>Exam</span>
          <hr />
          <li>2nd sem exam schedule from 20th of July</li>
          <li>DBMS lab exam posponed </li>
          <li>
            DBMS internal lab exam on 9th July 2021, 10:00 a.m. to 11:00 a.m{" "}
          </li>
          <li>DBMS internal lab exam viva on 9th July 2021</li>
          <li>DSA lab exam on 8th July from 10:00 a.m. to 2:00 p.m. </li>
          <li>Computet network viva for student who missed it on 8th july </li>
        </div>
      </div>
      <h2>How to become a frontend developer</h2>
      <div className="card">
        <h3>Frontend developer roadmap</h3>
        <span>(comming soon)</span>
      </div>
      <div className="info">
        <h1>MCA Helper Page</h1>
        <h2 className="new" style={{ color: "red" }}>
          *added exam page
        </h2>
        <h2 className="new" style={{ color: "red" }}>
          *added Operating System Theory Exam roadmap
        </h2>

        <h2>Pondicherry University</h2>
        <h3>Welcome to MCA pondicherry university Karikal Campus</h3>
        <span>
          This is a website in which you can get all the codes, roadmap, guides,
          studying material of MCA (all sems) lab for REFERENCE purposes only,
          😊
        </span>
      </div>

      <Footer />
    </div>
  );
}
