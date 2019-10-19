import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import { useLocation } from "react-router-dom";

const NavButton = props => {
  let location = useLocation();
  const [isSlideIn, setSlideIn] = useState(false);

  const locationShadow = useSpring({
    background: location.pathname === props.route.path ? "gray" : "white"
  });
  const slideText = useSpring({
    margin: isSlideIn ? "0 -180px" : "0 180px",
    background: location.pathname === props.route.path ? "gray" : "white"
  });

  const toggleSlide = () => {
    isSlideIn ? setSlideIn(false) : setSlideIn(true);
  };

  location.pathname === props.route.path && console.log(`${props.route.path}`);
  return (
    <div key={props.route.id} className="nav__item">
      <NavLink key={props.route.id} to={props.route.path}>
        <a.div
          className="item__number"
          onMouseOver={() => toggleSlide()}
          onMouseLeave={() => toggleSlide()}
          style={locationShadow}
        >
          <div className="number__link"></div>
        </a.div>
      </NavLink>
      <a.div className="item__text" style={slideText}>
        {props.route.name}
      </a.div>
    </div>
  );
};

export default NavButton;
