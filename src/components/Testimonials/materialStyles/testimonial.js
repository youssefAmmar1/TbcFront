import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "60vh",
    margin: "2em 2em 2em",
    [theme.breakpoints.down("md")]: {
      minHeight: "30vh",
    },
  },
  testimonialTitle: {
    letterSpacing: "0.1em",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
  },
  carousel: {
    margin: "1em 5em"
  },
  paper: {
    textAlign: "center",
    margin: "auto 0.1em",
    padding: "5em 1em",
    border: "1px solid #ddd",
    borderRadius: "1em",
  },
  circle: {
    position: "absolute",
    width: "22vh",
    zIndex: 2
  },
  ratingNumber: {
    position: "absolute",
    fontSize: "4em",
    letterSpacing: 0,
    zIndex: 3,
    marignTop: "5em",

  },
  ratingSection: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "22vh",
    minHeight: "22vh",
  },
  itemDiv: {
      display: "flex",
      flexDirection: "column",
      minHeight: "60vh"
  }
}));

export default useStyles;
