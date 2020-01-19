import React from "react";

import "./technologies.scss";

import css3Icon from "../../assets/techIcons/css3Icon.svg";
import graphQlIcon from "../../assets/techIcons/graphQlIcon.svg";
import html5Icon from "../../assets/techIcons/html5Icon.svg";
import jsIcon from "../../assets/techIcons/jsIcon.svg";
import npmIcon from "../../assets/techIcons/npmIcon.svg";
import reactIcon from "../../assets/techIcons/reactIcon.svg";
import reduxIcon from "../../assets/techIcons/reduxIcon.svg";
import sassIcon from "../../assets/techIcons/sassIcon.svg";
import typescriptIcon from "../../assets/techIcons/typescriptIcon.svg";

import { makeStyles } from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    // minWidth: 650
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
    color: "white",
    flexDirection: "column",
    padding: theme.spacing(2)
  },
  graphic: {
    width: 400,
    padding: theme.spacing(2)
  },
  paper: {}
}));

const iconList = [
  reactIcon,
  graphQlIcon,
  html5Icon,
  jsIcon,
  css3Icon,
  npmIcon,
  reduxIcon,
  sassIcon,
  typescriptIcon
];

const createData = (frontEnd, design, devTools) => {
  return { frontEnd, design, devTools };
};

const rows = [
  createData("HTML5", "Css3 in Sass", "npm"),
  createData(
    "TypeScript with JS ES6+",
    "Bootstrap/TailWind",
    "Chrome Dev Tools"
  ),
  createData("React.js 16+", "Adobe Photoshop", "GIT"),
  createData("Apollo with GraphQL", "", "MacOS/Windows")
];

const Technologies = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.graphic} xs={12} sm={6} item>
        <div className="main__photoContainer main__photoContainer--technologies">
          <ul class="circle-container">
            {iconList.map(icon => (
              <li>
                <img src={icon} alt="..." />
              </li>
            ))}
          </ul>
        </div>
      </Grid>
      <Grid className={classes.title} xs={12} sm={6} item>
        <Typography component="h1" variant="h2" align="center">
          Technologies
        </Typography>
      </Grid>
      <br />
      <br />
      <br />
      <Grid className={classes.text} item>
        <Typography component="h5" variant="h5" align="center">
          I am a novice developer constantly broadening my horizons. Here are
          the main technologies I use:
        </Typography>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Front-end</TableCell>
                <TableCell align="center">Design</TableCell>
                <TableCell align="center">Dev Tools</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell align="center">{row.frontEnd}</TableCell>
                  <TableCell align="center">{row.design}</TableCell>
                  <TableCell align="center">{row.devTools}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Typography component="h5" variant="h5" align="center">
          I am intrested in all technologies that can improve my workflow.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Technologies;
