import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";

const NavButton = props => {
  let location = useLocation();
  const [isSlideIn, setSlideIn] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  //This function determines whether the tab is ejected or not
  const toggleSlide = () => {
    isSlideIn ? setSlideIn(false) : setSlideIn(true);
  };
  //A function, that generates a push button animation
  const toggleMousePress = () => {
    setIsClicked(false);
    const timer = setTimeout(() => {
      setIsClicked(true);
    }, 450);
    return () => clearTimeout(timer);
  };

  //Animation of web navigation
  const locationShadow = useSpring({
    background:
      location.pathname === props.route.path
        ? "rgb(140, 140, 140)"
        : "rgb(178, 184, 218)",
    transform: isClicked ? "scale(1)" : "scale(0.9)"
  });
  //Animation of sliding tab
  const slideText = useSpring({
    margin: isSlideIn ? "0 -180px" : "0 180px",
    background:
      location.pathname === props.route.path
        ? "rgb(140, 140, 140)"
        : "rgb(178, 184, 218)"
  });

  const buttonComponent = (
    <a.div
      className="item__number"
      onMouseOver={() => toggleSlide()}
      onMouseLeave={() => toggleSlide()}
      onClick={() => toggleMousePress()}
      // onTouchStart={() => toggleSlide()}
      style={locationShadow}
    >
      <div className="number__link"></div>
    </a.div>
  );

  const tabComponent = (
    <a.div className="item__text" style={slideText}>
      {props.route.name}
    </a.div>
  );

  return (
    <div key={props.route.id} className="nav__item">
      <NavLink key={props.route.id} to={props.route.path}>
        {buttonComponent}
      </NavLink>
      {tabComponent}
    </div>
  );
};

export default NavButton;
