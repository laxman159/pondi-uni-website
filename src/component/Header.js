import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { gsap } from "gsap";

export default function Header() {
  const history = useHistory().location.pathname;

  useEffect(() => {
    gsap.fromTo(".a", { y: -100 }, { y: 0, stagger: 0.1, duration: 0.3 });
  }, []);

  return (
    <div className="header">
      <ul className="ul">
        <Link
          to="/"
          className={history === "/" ? "activeheader a" : "header a"}
        >
          <li>HOME</li>
        </Link>
        <Link
          to="/cn"
          className={history.includes("/cn") ? "activeheader a" : "header a"}
        >
          <li>CN</li>
        </Link>

        <Link
          to="/os"
          className={history.includes("/os") ? "activeheader a" : "header a"}
        >
          <li>OS</li>
        </Link>

        <Link
          to="/timetable"
          className={
            history.includes("/timetable") ? "activeheader a" : "header a"
          }
        >
          <li>EXAM</li>
        </Link>

        {/* <Link
          to="/oosd"
          className={history.includes("/oosd") ? "activeheader a" : "header a"}
        >
          <li>OOSD</li>
        </Link> */}
      </ul>
      <hr />
    </div>
  );
}
