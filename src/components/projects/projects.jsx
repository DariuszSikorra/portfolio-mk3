import React from "react";
import "./projects.scss";

import projects from "../../assets/images/projects.jpg";



const Projects = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--projects">
        <h1>Projects</h1>
        <p>
          I am currently working on projects written with TypeScript in
          React.js. <br />
          <br/>
          The list of projects with photos will be added soon. <br /><br/>
          All projects and descriptions can be found on my github account (link
          in the contact tab).
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--projects">
        <img src={projects} alt="" />
      </div>
    </>
  );
};

export default Projects;
