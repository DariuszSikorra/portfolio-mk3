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
import Container from "@material-ui/core/Container";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
  // cell: {
  //   align: "center"
  // }
});

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
    <Paper component="div">
      <h1>Technologies</h1>
      <p>
        I am a novice developer constantly broadening my horizons. Here are the
        main technologies I use:
        <br />
        <br />
        <Paper className={classes.root}>
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
        </Paper>
        <br />I am intrested in all technologies that can improve my workflow.
      </p>
      <div className="main__photoContainer main__photoContainer--technologies">
        <ul class="circle-container">
          {iconList.map(icon => (
            <li>
              <img src={icon} alt="..." />
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  );
};

export default Technologies;
