import React from "react";

import "./technologies.scss";

import css3Icon from "../../assets/techIcons/css3Icon.svg";
import graphQlIcon from "../../assets/techIcons/graphQlIcon.svg";
import html5Icon from "../../assets/techIcons/html5Icon.svg";
import jsIcon from "../../assets/techIcons/jsIcon.svg";
import npmIcon from "../../assets/techIcons/npmIcon.svg";
import reactIcon from "../../assets/techIcons/reactIcon.svg";
import reduxIcon from "../../assets/techIcons/reduxIcon.svg";
import sassIcon from "../../assets/techIcons/sassIcon.svg";
import typescriptIcon from "../../assets/techIcons/typescriptIcon.svg";

const Technologies = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--technologies">
        <h1>Technologies</h1>
        <p>
          I am a novice developer constantly broadening my horizons. Here are
          the main technologies I use:
          <br />
          <br/>
          <table>
            <tr>
              <th>Front-end</th>
              <th>Design</th>
              <th>Dev Tools</th>
            </tr>
            <tr>
              <td>HTML</td>
              <td>Css and Sass</td>
              <td>npm</td>
            </tr>
            <tr>
              <td>JavaScript ES6+</td>
              <td>Bootstrap</td>
              <td>Chrome Dev Tools</td>
            </tr>
            <tr>
              <td>React.js</td>
              <td>Adobe Photoshop</td>
              <td>GIT</td>
            </tr>
            <tr>
              <td></td>
              <td>AutoCAD for 3D</td>
              <td></td>
            </tr>
          </table>
          <br/>
          I am intrested in all technologies that can improve my workflow.
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--technologies">
        <ul class="circle-container">
          <li>
            <img src={reactIcon} alt="..." />
          </li>
          <li>
            <img src={graphQlIcon} alt="..." />
          </li>
          <li>
            <img src={html5Icon} alt="..." />
          </li>
          <li>
            <img src={jsIcon} alt="..." />
          </li>
          <li>
            <img src={css3Icon} alt="..." />
          </li>
          <li>
            <img src={npmIcon} alt="..." />
          </li>
          <li>
            <img src={reduxIcon} alt="..." />
          </li>
          <li>
            <img src={sassIcon} alt="..." />
          </li>
          <li>
            <img src={typescriptIcon} alt="..." />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Technologies;