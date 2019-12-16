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
  },
  // cell: {
  //   align: "center"
  // }
});





const Technologies = () => {
  const classes = useStyles();

  return (
    <>
      <div className="main__textContainer main__textContainer--technologies">
        <h1>Technologies</h1>
        <p>
          I am a novice developer constantly broadening my horizons. Here are
          the main technologies I use:
          <br />
          <br />
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.cell}>Front-end</TableCell>
                  <TableCell className={classes.cell}>Design</TableCell>
                  <TableCell className={classes.cell}>Dev Tools</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.cell}>HTML5</TableCell>
                  <TableCell className={classes.cell}>Css3 in Sass</TableCell>
                  <TableCell className={classes.cell}>npm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell}>
                    TypeScript with JS ES6+
                  </TableCell>
                  <TableCell className={classes.cell}>
                    Bootstrap/TailWind
                  </TableCell>
                  <TableCell className={classes.cell}>
                    Chrome Dev Tools
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell}>React.js 16+</TableCell>
                  <TableCell className={classes.cell}>
                    Adobe Photoshop
                  </TableCell>
                  <TableCell className={classes.cell}>GIT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.cell}>
                    Apollo with GraphQL
                  </TableCell>
                  <TableCell className={classes.cell}></TableCell>
                  <TableCell className={classes.cell}>MacOS/Windows</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <br />I am intrested in all technologies that can improve my workflow.
        </p>
      </div>
      <div className="main__photoContainer main__photoContainer--technologies">
        <ul class="circle-container">
          <li>
            <img src={reactIcon} alt="..." />
          </li>
          <li>
            <img src={graphQlIcon} alt="..." />
          </li>
          <li>
            <img src={html5Icon} alt="..." />
          </li>
          <li>
            <img src={jsIcon} alt="..." />
          </li>
          <li>
            <img src={css3Icon} alt="..." />
          </li>
          <li>
            <img src={npmIcon} alt="..." />
          </li>
          <li>
            <img src={reduxIcon} alt="..." />
          </li>
          <li>
            <img src={sassIcon} alt="..." />
          </li>
          <li>
            <img src={typescriptIcon} alt="..." />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Technologies;
