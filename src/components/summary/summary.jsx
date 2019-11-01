import React from "react";
import "./summary.scss"
import pg from "../../assets/images/pg.jpg"

const Summary = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--summary">
        <h1>Summary</h1>
        <p>
          I graduated from Gdańsk University of Technology in the{" "}
          <strong>field of physics</strong>. I started my programming{" "}
          <strong>adventure</strong> during studies by using C++, creating a
          simulations of heat flow in solid bodies. I am looking for
          opportunities to learn in a <strong>professional</strong> development
          environment as a front-end developer. 
          <br/>
          <br/>
          My goal is to become a front-end
          developer using the <strong>latest</strong> technologies.
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--summary">
        <img src={pg} alt="Gdańsk University of Technology" />
      </div>
    </>
  );
};

export default Summary;
