import React from "react";
import "./projects.scss"

const Projects = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--projects">
        <h1>Projects</h1>
        <p>
          I write frontend applications in the React.js environment, using the
          latest solutions. I use libraries such as react-router-dom,
          react-spring and many others (depending on the given project). I am
          currently learning to implement technologies such as:
          <ul> 
            <li>Typescript</li>
            <li>GraphQl</li>
            <li>Redux</li>
          </ul>
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--projects"></div>
    </>
  );
};

export default Projects;
