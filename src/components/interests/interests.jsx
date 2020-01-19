import React from "react";
import interests from "../../assets/images/interests.jpg";

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
    padding: theme.spacing(2),
    color: "white"
  },
  graphic: {
    width: 400,
    padding: theme.spacing(2)
  },
  paper: {}
}));

const Interests = () => {
  const classes = useStyles();
  
  return (
    <Grid className={classes.container} container>
      <Grid className={classes.graphic} xs={12} sm={6} item>
        <Paper
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(${interests})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          elevation="13"
        />
      </Grid>
      <Grid className={classes.title} xs={12} sm={6} item>
        <Typography component="h1" variant="h2" align="center">
          Interests
        </Typography>
      </Grid>
      <Grid className={classes.text} item>
        <Typography component="h5" variant="h5" align="center">
          My passion are mountains, in my spare time when I'm not working on my
          projects I am looking for travel opportunities. I love spring and
          winter journeys, walking and cycling in the mountains. I love to
          admire the views and put myself on more and more difficult challenges.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Interests;
