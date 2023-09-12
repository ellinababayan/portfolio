import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="navbar_container">
      <img
        src="https://jobs.traff.ink/wp-content/uploads/2022/09/3527962.png"
        alt="logo"
        className="navbar_logo"
      />
      <div className="navbar_navigation">
        <a
          href="#home"
          className="navbar_item"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className="navbar_item"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          href="#projects"
          className="navbar_item"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="navbar_item"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
