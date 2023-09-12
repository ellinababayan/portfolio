import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="home">
      <div className="section-header__photo">
        <img
          src="https://avatars.githubusercontent.com/u/128013006?v=4"
          alt="Ellina`s Photo"
        ></img>
      </div>
      <div className="section-header__text">
        <h1>Front End Developer</h1>
        <h3>
          Hi! My name is Ellina Babaian<br></br>A passionate Front End Developer
          based in Los Angeles, CA
        </h3>
        <div>
          <h3>Tech Stack</h3>
          <ul>
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
              {" "}
              <img src="img/git-logo.png" alt="Git" className="stack_logo" />
            </li>
            {/* <li> <img src="" alt="" className="stack_logo" /></li> */}
            {/* <li></li>
            <li></li>
            <li></li>
            <li></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
