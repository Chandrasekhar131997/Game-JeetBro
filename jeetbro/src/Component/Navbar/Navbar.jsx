import React from "react";
// import Toggle from "../Toggle/Toggle";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <img src="../Images/Logo.png" alt="logo" style={{width:"50px" , height:"60px"}}/>
        </div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="features" spy={true} smooth={true}>
                Features
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="n-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
