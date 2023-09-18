import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="section-about" id="about">
      <h3 className="section-about__h3">About Me</h3>
      <div className="about_features">
        <p>
          I'm a passionate Front End Developer residing in Los Angeles, CA, USA.
          I have dedicated myself to the exciting world of web development and
          have embarked on a journey of constant learning and growth.
        </p>{" "}
        <br></br>
        <p>
          From a young age, I was fascinating by technology and its ability to
          shape the world around us. This curiosity led me to explore programing
          and web development, where I quicly discovered knack for creating
          dynamic and user-friendly applications.{" "}
        </p>{" "}
        <br></br>{" "}
        <p>
          {" "}
          I possess a diverse skill set that allows me to handle both the
          frontend and backend aspects of web devepoment
        </p>
      </div>
      <div className="resume_container">
        <a
          type="application/pdf"
          href="Ellina_Babaian_cv.pdf"
          target="_blank"
          // download
          className="resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
