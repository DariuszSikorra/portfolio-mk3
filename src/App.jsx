import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { useSpring, animated as a } from "react-spring";

import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./components/navigation/newNavigation";
import Main from "./components/main/main";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  mainBox: {
    background: "#494953",
    display: "flex",
    flexDirection: "row"
  },
  backgroundBox: {
    flexGrow: 1,
    height: "100vh",
    position: "sticky",
    top: 0
  },
  containerBox: {
    minHeight: "100vh"
  }
});

function App() {
  const classes = useStyles();

  const bgPoints = {
    startingPoint:
      "linear-gradient(-35deg, black 10%, rgb(73, 73, 73) 10% 20%, rgb(112, 112, 112) 20% 30%, rgb(140, 140, 140) 30% 40%, rgb(251, 140, 0) 40%)",
    endingPoint:
      "linear-gradient(-35deg, black 8%, rgb(73, 73, 73) 8% 22%, rgb(112, 112, 112) 22% 28%, rgb(140, 140, 140) 28% 41%, rgb(251, 140, 0) 40.5%)"
  };
  const bgAnimation = useSpring({
    from: {
      background: bgPoints.startingPoint,
      backgroundSize: "auto",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat", 
    },
    to: async next => {
      while (1) {
        await next({
          background: bgPoints.endingPoint,
        });
        await next({
          background: bgPoints.startingPoint,
        });
      }
    },
    config: { mass: 5, tension: 100, friction: 10 }
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Box className={classes.mainBox}>
        <Box className={classes.backgroundBox} />
        <a.div style={bgAnimation}>
          <Container fixed maxWidth="md" className={classes.containerBox}>
            <Navigation />
            <Main />
          </Container>
        </a.div>
        <Box className={classes.backgroundBox} />
      </Box>
    </Router>
  );
}

export default App;
