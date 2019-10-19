import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useSpring, useTransition, animated as a } from "react-spring";

import { routes } from "./assets/routes";

import "./App.scss";
import ErrorPage from "./components/errorPage/errorPage";
import Navigation from "./components/navigation/navigation";

function App() {
  const bgAnimation = useSpring({
    from: {
      background:
        "linear-gradient(-35deg, black 20%, rgb(73, 73, 73) 20% 40%, rgb(112, 112, 112) 40% 60%, rgb(140, 140, 140) 60% 80%, white 80%)"
    },
    to: async next => {
      while (1) {
        await next({
          background:
            "linear-gradient(-35deg, black 18%, rgb(73, 73, 73) 18% 42%, rgb(112, 112, 112) 42% 58%, rgb(140, 140, 140) 58% 81%, white 81%)"
        });
        await next({
          background:
            "linear-gradient(-35deg, black 20%, rgb(73, 73, 73) 20% 40%, rgb(112, 112, 112) 40% 60%, rgb(140, 140, 140) 60% 80%, white 80%)"
        });
      }
    }
  });
  // const transitionAnimation = useTransition(items, item => item.key, {
  //   from: { transform: "translate3d(0,-40px,0)" },
  //   enter: { transform: "translate3d(0,0px,0)" },
  //   leave: { transform: "translate3d(0,-40px,0)" }
  // });

  return (
    <Router>
      <a.div className="app" style={bgAnimation}>
        <Navigation />
        <Switch>
          <a.div className="app__main">
            {routes.map(route => (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <Route component={ErrorPage} />
          </a.div>
        </Switch>
      </a.div>
    </Router>
  );
}

export default App;
