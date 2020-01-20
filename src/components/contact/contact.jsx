import React from "react";
import EmailForm from "./EmailForm/emailForm";
import LinkIcons from "./LinkIcons/linkIcons";

import contact from "../../assets/images/contact.jpg";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
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
        <Paper variant="outlined" className={classes.textPaper}>
          <Typography component="h1" variant="h2" align="center">
            Contact
          </Typography>
        </Paper>
      </Grid>
      <Grid className={classes.text} xs={12} item>
        <Paper variant="outlined" className={classes.textPaper}>
          <Grid component="div">
            <Typography component="h5" variant="h5" align="center">
              Wanna get in touch or talk about a projects? Feel free to contact
              me:
            </Typography>
            <br />
            <Grid
              display="flex"
              direction="row"
              justify="space-evenly"
              container
            >
              <LinkIcons />
            </Grid>
            <br />
            <Typography component="h5" variant="h5" align="center">
              Or, send me a message:
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <br />
      <Grid className={classes.text} xs={12} item>
        <Paper variant="outlined" className={classes.textPaper}>
          <EmailForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
