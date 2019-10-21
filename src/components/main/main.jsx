import React from "react";
import { Switch, Route } from "react-router-dom";
import { useTransition, animated as a } from "react-spring";
import useRouter from "../../assets/useRouter";
import "./main.scss"

import { routes } from "../../assets/routes";

import ErrorPage from "../errorPage/errorPage";

const Main = () => {
  const { location } = useRouter();
  const transitionAnimation = useTransition(
    location,
    location => location.pathname,
    // {
    //   from: { transform: "translate3d(0,-100vh,0)" },
    //   enter: { transform: "translate3d(0,0px,0)" },
    //   leave: { transform: "translate3d(0,100vh,0)" },
    // }
    {
      from: { transform: "rotate(-90deg)", transformOrigin: "bottom left" },
      enter: { transform: "rotate(0deg)", transformOrigin: "bottom left" },
      leave: { transform: "rotate(-90deg)", transformOrigin: "bottom right" },
    }
  );

  return transitionAnimation.map(({ item, props, key }) => (
    <a.div className="app__main" key={key} style={props}>
      <Switch location={item}>
        {routes.map(route => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route component={ErrorPage} />
      </Switch>
    </a.div>
  ));
};

export default Main;
