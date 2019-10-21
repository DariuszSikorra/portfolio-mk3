import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import { useLocation } from "react-router-dom";

const NavButton = props => {
  let location = useLocation();
  const [isSlideIn, setSlideIn] = useState(false);
  const [isClicked, setIsClicked] = useState(true);


  //This function determines whether the tab is ejected or not
  const toggleSlide = () => {
    isSlideIn ? setSlideIn(false) : setSlideIn(true);
  };
  //A function, that generates a push button animation
  const togglePress = () => {
    setIsClicked(false);
    const timer = setTimeout(() => {
      setIsClicked(true);
    }, 450);
    return () => clearTimeout(timer);
  };


  //Animation of web navigation
  const locationShadow = useSpring({
    background:
      location.pathname === props.route.path ? "rgb(140, 140, 140)" : "rgb(255, 255, 255)",
    transform: isClicked ? "scale(1)" : "scale(0.9)"
  });
  //Animation of sliding tab
  const slideText = useSpring({
    margin: isSlideIn ? "0 -180px" : "0 180px",
    background:
      location.pathname === props.route.path
        ? "rgb(140, 140, 140)"
        : "rgb(255, 255, 255)"
  });


  return (
    <div key={props.route.id} className="nav__item">
      {/* button component */}
      <NavLink key={props.route.id} to={props.route.path}>
        <a.div
          className="item__number"
          onMouseOver={() => toggleSlide()}
          onMouseLeave={() => toggleSlide()}
          onMouseDown={() => togglePress()}
          style={locationShadow}
        >
          <div className="number__link"></div>
        </a.div>
      </NavLink>
      {/* tab component */}
      <a.div className="item__text" style={slideText}>
        {props.route.name}
      </a.div>
    </div>
  );
};

export default NavButton;
