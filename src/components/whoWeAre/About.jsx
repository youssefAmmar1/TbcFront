import { Collapse, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./materialStyles/about";
import Button from "@material-ui/core/Button";
import useWindowPosition from "../../hooks/useWindowPosition";

export default function About() {
  const classes = useStyles();
  const checked = useWindowPosition("welcomeSection");
  return (
    <React.Fragment>
      <div className={classes.root} id="about">
      <Collapse in={checked} {...(checked? {timeout:500} : {})}>
        <Typography variant="h3" className={classes.title}>
          Who we are?
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Button color="inherit" className={classes.subButton}>
          Join the family!
        </Button>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
