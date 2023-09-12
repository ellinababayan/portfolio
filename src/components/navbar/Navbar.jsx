import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img
        src="https://jobs.traff.ink/wp-content/uploads/2022/09/3527962.png"
        alt="logo"
        className="navbar_logo"
      />
      <div className="navbar_navigation">
        <a href="#home" className="navbar_item">
          Home
        </a>
        <a href="#projects" className="navbar_item">
          Projects
        </a>
        <a href="#about" className="navbar_item">
          About
        </a>
        <a href="#contact" className="navbar_item">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
