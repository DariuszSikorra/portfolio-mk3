import React from "react";

const Technologies = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--technologies">
        <h1>Technologies</h1>
        <p>
          I am a novice developer constantly broadening my horizons. Here are
          the main technologies I use:
        </p>
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
        <p>I am intrested in all technologies that can improve my workflow.</p>
      </div>
      <div className="main__photoContainer main__photoContainer--technologies"></div>
    </>
  );
};

export default Technologies;
