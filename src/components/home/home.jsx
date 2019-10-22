import React from "react";
import "./home.scss";
import home from "../../assets/images/home.jpg"
import reactIcon from "../../assets/techIcons/reactIcon.svg";

const Home = () => {
  return (
    <>
      <div className="main__textContainer main__textContainer--home">
        <h1>Dariusz Sikorra</h1>
        <p classname="textContainer--home__title">
          Front-end Developer React
          <br />
          <img src={reactIcon} className="title__spiningLogo"alt="Spining React Icon" ></img>
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--home">
        <img src={home} alt="portrait"/>
      </div>
    </>
  );
};

export default Home;
