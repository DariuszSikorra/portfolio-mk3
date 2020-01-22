import React from "react";
import interests from "../../assets/images/interests.jpg";

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
    padding: theme.spacing(2)
  },
  title: {
    padding: theme.spacing(2)
  },
  text: {
    padding: theme.spacing(2)
  },
  graphic: {
    width: 400,
    padding: theme.spacing(2)
  }
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
        <Paper variant="outlined" className={classes.textPaper}>
          <Typography component="h1" variant="h2" align="center">
            Interests
          </Typography>
        </Paper>
      </Grid>
      <Grid className={classes.text} item>
        <Paper variant="outlined" className={classes.textPaper}>
          {/* <Grid container>
            <Grid lg={4} item>
              <Paper
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundImage: `url(${interests})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                elevation="13"
              />
            </Grid>
            <Grid lg={8} item> */}
              <Typography component="h5" variant="h5" align="center">
                My passion are mountains, in my spare time when I'm not working
                on my projects I am looking for travel opportunities. I love
                spring and winter journeys, walking and cycling in the
                mountains. I love to admire the views and put myself on more and
                more difficult challenges.
              </Typography>
            {/* </Grid>
          </Grid> */}
        </Paper>
      </Grid>
      {/* <Grid className={classes.text} item>
        <Paper variant="outlined" className={classes.textPaper}>
          <Grid container>
            <Grid lg={8} item>
              <Typography component="h5" variant="h5" align="center">
                My passion are mountains, in my spare time when I'm not working
                on my projects I am looking for travel opportunities. I love
                spring and winter journeys, walking and cycling in the
                mountains. I love to admire the views and put myself on more and
                more difficult challenges.
              </Typography>
            </Grid>
            <Grid lg={4} item>
              <Paper
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundImage: `url(${interests})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                elevation="13"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default Interests;
