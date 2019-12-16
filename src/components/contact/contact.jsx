import React, { useState } from "react";
import "./contact.scss";

import linkedInRound from "../../assets/contactIcons/linkedInRound.svg";
import githubRound from "../../assets/contactIcons/githubRound.svg";
import mailRound from "../../assets/contactIcons/mailRound.svg";
import contact from "../../assets/images/contact.jpg";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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
  }
}));

const Contact = () => {
  const classes = useStyles();
  const [message, setMessage] = useState(false);

  return (
    <>
      <div className="main__textContainer main__textContainer--contact">
        <h1>Contact</h1>
        <p>
          Wanna get in touch or talk about a projects? Feel free to contact me:
          {message ? (
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    size="small"
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    size="small"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    size="small"
                    multiline={true}
                    rows="4"
                    name="message"
                    label="Message"
                    type="message"
                    id="message"
                    autoComplete="message"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          ) : (
            <table>
              <tr>
                <th>
                  <div>
                    <img src={mailRound} alt="email" />
                  </div>
                </th>
                <th>
                  <div>
                    <span>dariusz.sikorra@gmail.com</span>
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                  <a href="https://www.linkedin.com/in/dariuszsikorra">
                    <img src={linkedInRound} alt="linkedin" />
                  </a>
                </th>
                <th>
                  <a href="https://www.linkedin.com/in/dariuszsikorra">
                    <span>https://www.linkedin.com/in/dariuszsikorra</span>
                  </a>
                </th>
              </tr>
              <tr>
                <th>
                  <a id="link" href="https://github.com/DariuszSikorra">
                    <img src={githubRound} alt="github" />
                  </a>
                </th>
                <th>
                  <a id="link" href="https://github.com/DariuszSikorra">
                    <span>https://github.com/DariuszSikorra</span>
                  </a>
                </th>
              </tr>
            </table>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => setMessage(!message)}
          >
            {message ? "Back to contact" : "Send message"}
          </Button>
        </p>
      </div>

      <div className="main__photoContainer main__photoContainer--contact">
        <img src={contact} alt="" />
      </div>
    </>
  );
};

export default Contact;
