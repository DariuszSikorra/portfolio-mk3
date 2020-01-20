import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(2, 0, 2)
  },
  textPaper: {
    padding: theme.spacing(2, 2, 0, 2),
    backgroundColor: "white"
  }
}));

const InputForm = props => {
  const classes = useStyles();

  const [emailSent, setEmailSent] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const {
    values: { name, email, message },
    errors,
    touched,
    handleChange,
    isValid
  } = props;
  console.table(props);

  //Emailjs element witch send emails
  const sendEmail = e => {
    e.preventDefault();

    const templateParams = {
      message_html: message,
      from_name: name,
      reply_to: email
    };

    emailjs
      .send(
        "portfolioMail",
        "portfolio_mail_template",
        templateParams,
        "user_koYEw5c4OtDEbzpGdAdMP"
      )
      .then(
        result => {
          // console.log(result.text);
          setEmailSent(true);
        },
        error => {
          // console.log(error.text);
          setErrorOccurred(true);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <Paper variant="outlined" className={classes.textPaper}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              label="Name"
              size="small"
              type="text"
              name="name"
              helperText={touched.name ? errors.name : ""}
              error={Boolean(errors.name)}
              value={name}
              onChange={handleChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NameIcon />
                  </InputAdornment>
                )
              }}
            />
            <div>{Boolean(errors.name) ? errors.name : ""}</div>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant="outlined"
              label="Email"
              size="small"
              type="email"
              name="email"
              helperText={touched.email ? errors.email : ""}
              error={Boolean(errors.email)}
              fullWidth
              value={email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                )
              }}
            />
            <div>{Boolean(errors.email) ? errors.email : ""}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Message"
              size="small"
              multiline={true}
              rows="5"
              name="message"
              error={Boolean(errors.message)}
              fullWidth
              type="message"
              value={message}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                )
              }}
            />
            <div>{errors.password}</div>
          </Grid>
        </Grid>
        {emailSent && (
          <Grid>
            <Paper variant="outlined" size="small" color="primary">
              <Typography align="center" color="primary">
                Your e-mail has been sent!
              </Typography>
            </Paper>
          </Grid>
        )}
        {errorOccurred && (
          <Grid>
            <Paper variant="outlined" size="small" color="primary">
              <Typography align="center" color="secondary">
                Something went wrong!
              </Typography>
            </Paper>
          </Grid>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isValid}
          className={classes.submit}
        >
          Send
        </Button>
      </Paper>
    </form>
  );
};
export default InputForm;
