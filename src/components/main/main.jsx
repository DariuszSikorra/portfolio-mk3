import React from "react";
import { Switch, Route } from "react-router-dom";
import { useTransition, animated as a } from "react-spring";
import useRouter from "../../assets/useRouter";

import { routes } from "../../assets/routes";

import ErrorPage from "../errorPage/errorPage";

const Main = (p) => {
  const { location } = useRouter();
  const transitionAnimation = useTransition(
    location,
    location => location.pathname,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 1 },
    }
  );

  return transitionAnimation.map(({ item, props, key}) => (
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
