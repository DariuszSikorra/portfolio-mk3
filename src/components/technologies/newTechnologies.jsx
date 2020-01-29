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
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
  },
  tableContainer: {
    padding: theme.spacing(2)
  }
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
        <Paper
          style={{
            width: "100%",
            height: "500px",
            backgroundPosition: "center",
          }}
          variant="outlined"
          className={classes.textPaper}
        >
          <div className="main__photoContainer">
            <ul class="circle-container">
              {iconList.map(icon => (
                <li>
                  <img src={icon} alt="..." />
                </li>
              ))}
            </ul>
          </div>
        </Paper>
      </Grid>
      <Grid className={classes.title} xs={12} sm={6} item>
        <Paper variant="outlined" className={classes.textPaper}>
          <Typography component="h1" variant="h2" align="center">
            Technologies
          </Typography>
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
      <Grid className={classes.text} item>
        <Paper variant="outlined" className={classes.textPaper}>
          <Grid component="div">
            <Typography component="h5" variant="h5" align="center">
              I am a novice developer constantly broadening my horizons. Here
              are the main technologies I use:
            </Typography>
            <br />
            <Box component="div" className={classes.tableContainer}>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="simple table"
                  size="small"
                >
                  <TableHead component="thead">
                    <TableRow>
                      <TableCell align="center">
                        <strong>Front-end</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Design</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>Dev Tools</strong>
                      </TableCell>
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
            </Box>
            <br />
            <Typography component="h5" variant="h5" align="center">
              I am intrested in all technologies that can improve my workflow.
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Technologies;
