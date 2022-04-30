import React from "react";
import { Link } from "react-router-dom";
import "../App";

// Css
import "./../style/navbar.css";

// Icons
import homeIcon from "../icons/homeIcon.png";
import workIcon from "../icons/workIcon.png";
import educationIcon from "../icons/educationIcon.png";
import skillsIcon from "../icons/skillsIcon.png";

const Navbar = () => {
  return (
    <div class="navbar">
      <li>
        <Link to="/">
          <img src={homeIcon} alt="Home"></img>
        </Link>
      </li>
      <li>
        <Link to="/Experience">
          <img src={workIcon} alt="Home"></img>
        </Link>
      </li>
      <li>
        <Link to="/Education">
          <img src={educationIcon} alt="Home"></img>
        </Link>
      </li>
      <li>
        <Link to="/Skills">
          <img src={skillsIcon} alt="Home"></img>
        </Link>
      </li>
    </div>
  );
};

export default Navbar;
