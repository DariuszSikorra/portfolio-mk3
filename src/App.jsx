import React from "react";
import { HashRouter } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";

import "./App.scss";
import Navigation from "./components/navigation/navigation";
import Main from "./components/main/main";

function App() {
  const bgPoints = {
    startingPoint:
      "linear-gradient(-35deg, black 10%, rgb(73, 73, 73) 10% 20%, rgb(112, 112, 112) 20% 30%, rgb(140, 140, 140) 30% 40%, white 40%)",
    endingPoint:
      "linear-gradient(-35deg, black 8%, rgb(73, 73, 73) 8% 22%, rgb(112, 112, 112) 22% 28%, rgb(140, 140, 140) 28% 41%, white 40.5%)"
  };
  const bgAnimation = useSpring({
    from: {
      background: bgPoints.startingPoint
    },
    to: async next => {
      while (1) {
        await next({
          background: bgPoints.endingPoint
        });
        await next({
          background: bgPoints.startingPoint
        });
      }
    },
    config: { mass: 5, tension: 100, friction: 10 }
  });

  return (
    <HashRouter basename="/">
      <a.div className="app" style={bgAnimation}>
        <Navigation />
        <Main />
      </a.div>
    </HashRouter>
  );
}

export default App;
