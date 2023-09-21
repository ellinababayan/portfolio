import React from "react";
import "./Projects.css";
import { External } from "./Svg";

const Projects = () => {
  return (
    <div className="section-projects" id="projects">
      <h3 className="section-projects__h3">My Projects</h3>
      <div className="project_container">
        <div className="project_1 project__item">
          <a href="https://natours-beta-six.vercel.app/" target="_blank">
            <video className="project_img" autoPlay loop muted>
              <source
                // src="img/Natours _ Exciting tours for adventurous people - Google Chrome 2023-09-11 23-28-31.mp4"
                src="img/Natours_screenrecord.mp4"
                type="video/mp4"
              />
              Video is not supported by browser
            </video>{" "}
          </a>
          <div>
            <h1 className="project_header">Natours</h1>
            <p className="project_description">
              Natours is a captivating and nature-inspired travel website
              showcased in this repository. It's designed to help adventure
              seekers discover exciting tour packages set in stunning natural
              landscapes. <br></br> With a fresh and immersive user interface,
              Natours provides an enticing platform for travelers to explore and
              book their next thrilling journey into the wild.
            </p>
            <a
              href="https://natours-beta-six.vercel.app/"
              target="_blank"
              className="project_link"
            >
              Visit web site <External />
            </a>
          </div>
        </div>
        <div className="project_2 project__item">
          <a href="https://trillo-pied-nine.vercel.app/" target="_blank">
            <video className="project_img" autoPlay loop muted>
              <source
                // src="img/Trillo _ Your holiday in one click - Google Chrome 2023-09-11 23-41-29.mp4"
                src="img/Trillo_screenrecord.mp4"
                type="video/mp4"
              />
              Video is not supported by browser
            </video>{" "}
          </a>
          <div>
            <h1 className="project_header">Trillo</h1>
            <p className="project_description">
              Trillo is a dynamic and stylish hotel booking website featured in
              this repository. It offers a one-stop solution for travelers to
              search and reserve accommodations with ease. <br></br>The site's
              contemporary design and intuitive features make planning and
              managing trips a breeze, ensuring a seamless and enjoyable booking
              experience for users on the go.
            </p>
            <a
              href="https://trillo-pied-nine.vercel.app/"
              target="_blank"
              className="project_link"
            >
              Visit web site <External />
            </a>
          </div>
        </div>
        <div className="project_3 project__item">
          <a href="https://nexter-topaz.vercel.app/" target="_blank">
            <video className="project_img" autoPlay loop muted>
              <source
                // src="img/Nexter — your home, your freedom - Google Chrome 2023-09-11 23-46-57.mp4"
                src="img/Nexter_screenrecord.mp4"
                type="video/mp4"
              />
              Video is not supported by browser
            </video>
          </a>
          <div>
            <h1 className="project_header">Nexter</h1>
            <p className="project_description">
              Nexter is a modern real estate website built using the latest web
              technologies. It offers an intuitive and visually appealing
              platform for browsing and exploring real estate listings.<br></br>
              With a sleek and user-friendly design, Nexter provides a seamless
              experience for both buyers and sellers in the real estate market.
            </p>
            <a
              href="https://nexter-topaz.vercel.app/"
              target="_blank"
              className="project_link"
            >
              Visit web site <External />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
