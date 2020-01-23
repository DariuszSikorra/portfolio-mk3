import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles({
  icon: {
    // color: "white"
  }
});

const LinkIcons = () => {
  const classes = useStyles();

  return (
    <>
      <Link
        display="block"
        variant="body1"
        href="https://www.linkedin.com/in/dariuszsikorra"
        key="linkedIn"
        target="_blank"
      >
        <Grid
          className={classes.icon}
          container
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <LinkedInIcon fontSize="large" />
          </Grid>
        </Grid>
      </Link>
      <Link
        display="block"
        variant="body1"
        href="https://github.com/DariuszSikorra"
        key="github"
        target="_blank"
      >
        <Grid
          className={classes.icon}
          container
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <GitHubIcon fontSize="large" />
          </Grid>
        </Grid>
      </Link>
      <Link display="block" variant="body1" key="email">
        <Grid
          className={classes.icon}
          container
          direction="row"
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <EmailIcon fontSize="large" />
          </Grid>
          <Grid item>dariusz.sikorra@gmail.com</Grid>
        </Grid>
      </Link>
    </>
  );
};

export default LinkIcons;
