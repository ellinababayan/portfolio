import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header__container" id="home">
        <div className="section-header__photo_container">
          <img
            src="https://avatars.githubusercontent.com/u/128013006?v=4"
            alt="Ellina`s Photo"
            className="header-section__photo"
          ></img>
        </div>
        <div className="section-header__text">
          <p className="section-header__hi">Hi! My name is</p>
          <h1 className="section-header__h1">Ellina Babaian</h1>
          <h3 className="section-header__h3">I build things for the web</h3>
          <h4 className="section-header__h4">
            {/* Hi! My name is Ellina Babaian<br></br> */}
            I'm a Front End Developer based in Los Angeles, CA
          </h4>
          <div className="section-header__contact">
            <div className="popup__contact_header">
              <a
                href="https://www.linkedin.com/in/ellina-babaian-302645267/"
                target="_blank"
                className="link_tag__header"
              >
                <img
                  className="link_logo__header"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                ></img>
              </a>
              <a
                href="https://github.com/ellinababayan"
                target="_blank"
                className="link_tag__header"
              >
                <img
                  className="link_logo__header"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                ></img>
              </a>
              <a
                href="mailto:famogl375@gmail.com"
                target="_blank"
                className="link_tag__header"
              >
                <img
                  className="link_logo__header"
                  src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tech_stack__container">
        <h2 className="section-header__h2">Tech Stack:</h2>
        <ul className="tech_stack">
          <li>
            <img src="img/html-logo.png" alt="HTML" className="stack_logo" />
            <p className="stack_description">HTML</p>
          </li>
          <li>
            <img src="img/css-logo.png" alt="CSS" className="stack_logo" />
            <p className="stack_description">CSS</p>
          </li>
          <li>
            <img
              src="img/js-logo.png"
              alt="JavaScript"
              className="stack_logo"
            />
            <p className="stack_description">JavaScript</p>
          </li>
          <li>
            <img
              src="img/python-logo.png"
              alt="Python"
              className="stack_logo"
            />
            <p className="stack_description">Python</p>
          </li>
          <li>
            <img
              src="img/typescript-logo.png"
              alt="TypeScript"
              className="stack_logo"
            />
            <p className="stack_description">TypeScript</p>
          </li>
          <li>
            <img src="img/react-logo.webp" alt="React" className="stack_logo" />
            <p className="stack_description">React</p>
          </li>
          <li>
            <img src="img/redux-logo.png" alt="Redux" className="stack_logo" />
            <p className="stack_description">Redux</p>
          </li>
          <li>
            <img src="img/node-logo.png" alt="Node.js" className="stack_logo" />
            <p className="stack_description">Node.js</p>
          </li>
          <li>
            <img src="img/sass-logo.png" alt="Sass" className="stack_logo" />
            <p className="stack_description">Sass</p>
          </li>
          <li>
            <img
              src="img/bootstrap-logo.png"
              alt="Bootstrap"
              className="stack_logo"
            />
            <p className="stack_description">Bootstrap</p>
          </li>
          <li>
            <img
              src="img/jquery-logo.png"
              alt="jQuery"
              className="stack_logo"
            />
            <p className="stack_description">jQuery</p>
          </li>
          <li>
            <img src="img/git-logo.png" alt="Git" className="stack_logo" />
            <p className="stack_description">Git</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
