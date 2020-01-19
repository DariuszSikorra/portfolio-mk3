import React from "react";

import ModalClicker from "./Modal/modal";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  card: {
    maxWidth: 450
    // background: "#555555",
    // color: "white"
  },
  cardActionArea: {},
  button: {
    textDecoration: "none"
  }
});

const ProjectCard = props => {
  const classes = useStyles();
  return (
    <Card raised={true} className={classes.card}>
      <CardActionArea className={classes.cardActionArea}>
        <ModalClicker card={props.card} />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.card.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.card.cardTextContent}
        </Typography>
      </CardContent>
      <CardActions>
        {props.card.githubLink && (
          <Button
            component={Link}
            href={props.card.githubLink}
            target="_blank"
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Github
          </Button>
        )}
        {props.card.link && (
          <Button
            component={Link}
            href={props.card.link}
            target="_blank"
            size="small"
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
