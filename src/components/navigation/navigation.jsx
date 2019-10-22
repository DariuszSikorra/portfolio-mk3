import React from "react";

import NavButton from "./navButton/navButton";

import { routes } from "../../assets/routes";

import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="app__nav">
      {routes.map(route => (
        <NavButton route={route} />
      ))}
    </nav>
  );
};

export default Navigation;
