import React from "react";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img
        src="https://jobs.traff.ink/wp-content/uploads/2022/09/3527962.png"
        alt="logo"
      />
      <div className="navbar_navigation">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
