import React from "react";
import pg from "../../assets/images/pg.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4)
  },
  textPaper: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(2),
  },
  text: {
    padding: theme.spacing(2),
  },
  graphic: {
    width: 400,
    padding: theme.spacing(2)
  },
}));

const Summary = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.graphic} xs={12} sm={6} item>
        <Paper
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(${pg})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          elevation="13"
        />
      </Grid>
      <Grid className={classes.title} xs={12} sm={6} item>
        <Paper variant="outlined" className={classes.textPaper}>
          <Typography component="h1" variant="h2" align="center">
            Summary
          </Typography>
        </Paper>
      </Grid>
      <Grid className={classes.text} item>
        <Paper variant="outlined" className={classes.textPaper}>
          <Typography component="h5" variant="h5" align="center">
            I graduated from Gdańsk University of Technology in the{" "}
            <strong>field of physics</strong>. I started my programming{" "}
            <strong>adventure</strong> during studies by using C++, creating a
            simulations of heat flow in solid bodies. I am looking for
            opportunities to learn in a <strong>professional</strong>{" "}
            development environment as a front-end developer.
            <br />
            <br />
            My goal is to become a front-end developer using the{" "}
            <strong>latest</strong> technologies!
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Summary;
