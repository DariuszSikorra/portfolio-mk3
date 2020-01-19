import React from "react";

import projects from "../../assets/images/projects.jpg";

import ProjectCard from "./Card/ProjectCard";
import cardsData from "./cardsData";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

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
  cardsContainer: {
    padding: theme.spacing(2),
    flexGrow: 1
  },
  singleCardContainer: {}
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.graphic} xs={12} sm={6} item>
        <Paper
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(${projects})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          elevation="13"
        />
      </Grid>
      <Grid className={classes.title} xs={12} sm={6} item>
        <Typography component="h1" variant="h2" align="center">
          Projects
        </Typography>
      </Grid>
      <Grid className={classes.text} item>
        <Typography component="h5" variant="h5" align="center">
          I am currently working on projects written with TypeScript in
          React.js. <br />
          <br />I presented the most interesting projects in the following
          cards. All this projects and many more can be found on my{" "}
          <Link key="contact" to={"/contact"}>
            github account
          </Link>
          .
        </Typography>
      </Grid>
      <Grid
        container
        spacing={5}
        className={classes.cardsContainer}
        justify="space-around"
      >
        {cardsData.map(card => (
          <Grid
            md={4}
            xs={12}
            item
            id={card.id}
            className={classes.singleCardContainer}
          >
            <ProjectCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
