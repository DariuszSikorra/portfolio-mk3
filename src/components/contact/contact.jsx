import React from "react";
import EmailForm from "./EmailForm/emailForm";
import LinkIcons from "./LinkIcons/linkIcons";

import contact from "../../assets/images/contact.jpg";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
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
    color: "white",
    flexDirection: "column"
  },
  graphic: {
    width: 400,
    padding: theme.spacing(2)
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.graphic} xs={12} sm={6} item>
        <Paper
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(${contact})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          elevation="13"
        />
      </Grid>
      <Grid className={classes.title} xs={12} sm={6} item>
        <Typography component="h1" variant="h2" align="center">
          Contact
        </Typography>
      </Grid>
      <Grid className={classes.text} item>
        <Typography component="h5" variant="h5" align="center">
          Wanna get in touch or talk about a projects? Feel free to contact me:
        </Typography>
        <br />
        <Grid display="flex" direction="row" justify="space-evenly" container>
          <LinkIcons />
        </Grid>
        <br />
        <Typography component="h5" variant="h5" align="center">
          Or, send me a message:
        </Typography>
        <br/>
        <EmailForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
