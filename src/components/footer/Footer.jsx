import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="contact" className="section-contact">
      <h1 className="contact_h1">Contact</h1>
      <div>
        <h3 className="contact_h3">
          Hi there! <br></br>Looking forward to hear from you back
        </h3>
        <div className="popup__contact">
          <a
            href="https://www.linkedin.com/in/ellina-babaian-302645267/"
            target="_blank"
            className="link_tag"
          >
            <img
              className="link_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            ></img>
          </a>
          <a
            href="https://github.com/ellinababayan"
            target="_blank"
            className="link_tag"
          >
            <img
              className="link_logo"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            ></img>
          </a>
          <a
            href="mailto:famogl375@gmail.com"
            target="_blank"
            className="link_tag"
          >
            <img
              className="link_logo"
              src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            ></img>
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/ellina-babaian-302645267/"
          target="_blank"
          className="btn"
        >
          Contact Now
        </a>
        <p class="copyright"> &#169;Copyright 2023 by Ellina Babaian</p>
      </div>
    </div>
  );
};

export default Footer;
