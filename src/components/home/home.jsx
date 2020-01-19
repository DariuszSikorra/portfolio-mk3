import React from "react";
import home from "../../assets/images/home.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
    alignItems: "center",
    padding: 0,
    margin: 0
  },
  title: {
    padding: theme.spacing(2),
    color: "white"
  },
  text: {
    margin: "auto",
    display: "flex",
    color: "white"
  },
  graphic: {
    width: 400,
    padding: theme.spacing(2)
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  paper: {}
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid xs={12} sm={6} className={classes.graphic} item>
        <Paper
          style={{
            width: "100%",
            height: "600px",
            backgroundImage: `url(${home})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          elevation="13"
        />
      </Grid>
      <Grid xs={12} sm={6} className={classes.title} item>
        <Typography component="h1" variant="h2" align="center">
          Dariusz Sikorra
        </Typography>
        <Typography component="h2" variant="h4" align="center">
          Front-end Developer React
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
