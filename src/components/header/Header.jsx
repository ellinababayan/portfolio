import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container" id="home">
      <div className="section-header__photo_container">
        <img
          src="https://avatars.githubusercontent.com/u/128013006?v=4"
          alt="Ellina`s Photo"
          className="header-section__photo"
        ></img>
      </div>
      <div className="section-header__text">
        <h1 className="section-header__h1">Front End Developer</h1>
        <h4 className="section-header__h4">
          Hi! My name is Ellina Babaian<br></br>A passionate Front End Developer
          based in Los Angeles, CA
        </h4>
        <div className="section-header__contact">
          <div className="popup__contact_header">
            <a
              href="https://www.linkedin.com/in/ellina-babaian-302645267/"
              target="_blank"
              className="link_tag"
            >
              <img
                className="link_logo__header"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              ></img>
            </a>
            <a
              href="https://github.com/ellinababayan"
              target="_blank"
              className="link_tag"
            >
              <img
                className="link_logo__header"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              ></img>
            </a>
            <a
              href="mailto:famogl375@gmail.com"
              target="_blank"
              className="link_tag"
            >
              <img
                className="link_logo__header"
                src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
              ></img>
            </a>
          </div>
        </div>
        <div className="tech_stack__container">
          <h3 className="section-header__h3">Tech Stack:</h3>
          <ul className="tech_stack">
            <li>
              <img src="img/html-logo.png" alt="HTML" className="stack_logo" />
            </li>
            <li>
              <img src="img/css-logo.png" alt="CSS" className="stack_logo" />
            </li>
            <li>
              <img
                src="img/js-logo.png"
                alt="JavaScript"
                className="stack_logo"
              />
            </li>
            <li>
              <img
                src="img/python-logo.png"
                alt="Python"
                className="stack_logo"
              />
            </li>
            <li>
              <img
                src="img/typescript-logo.png"
                alt="TypeScript"
                className="stack_logo"
              />
            </li>
            <li>
              <img
                src="img/react-logo.webp"
                alt="React"
                className="stack_logo"
              />
            </li>
            <li>
              <img
                src="img/redux-logo.png"
                alt="Redux"
                className="stack_logo"
              />
            </li>
            <li>
              <img
                src="img/node-logo.png"
                alt="Node.js"
                className="stack_logo"
              />
            </li>
            <li>
              <img src="img/sass-logo.png" alt="Sass" className="stack_logo" />
            </li>
            <li>
              <img
                src="img/bootstrap-logo.png"
                alt="Bootstrap"
                className="stack_logo"
              />
            </li>
            <li>
              <img
                src="img/jquery-logo.png"
                alt="jQuery"
                className="stack_logo"
              />
            </li>
            <li>
              <img src="img/git-logo.png" alt="Git" className="stack_logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
