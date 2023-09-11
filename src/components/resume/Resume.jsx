import React from "react";

const Resume = () => {
  return (
    <div id="about">
      <div className="about_features"></div>
      <div>
        <a
          type="application/pdf"
          href="https://docs.google.com/document/d/1EvGotpraBWEuchxTqccNWyG8tdx7u_yerPjlo0i_3YM/edit?usp=sharing"
          target="_blank"
          download
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
