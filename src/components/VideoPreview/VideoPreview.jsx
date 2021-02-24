import React from "react";
import useStyles from "./materialStyles/videoPreview";
import useWindowPosition from "../../hooks/useWindowPosition";
import { Collapse } from "@material-ui/core";

export default function VideoPreview() {
    const classes=useStyles();
    const checked = useWindowPosition("about");
  return (
    <React.Fragment>
      <div className={classes.root}>
      <Collapse in={checked} {...(checked? {timeout:1500} : {})}>
      <img src={process.env.PUBLIC_URL + "/images/videoPlayer.jpg"} alt="video preview"/>
      </Collapse>
      </div>
    </React.Fragment>
  );
}
