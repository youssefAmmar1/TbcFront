import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "65vh",
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
    margin: "2em 5em",
  },
  paper: {
    position: "relative",
    textAlign: "center",
    margin: "0 0.1em 0.5em",
    zIndex: "0",
    padding: "5em 1em",
    border: "1px solid #ddd",
    borderRadius: "2em",
  },
  circle: {
    position: "absolute",
    width: "18vh",
    zIndex: "-1",
    // left: "-1em",
    //     top: "-2em",
  },
  rating: {
    position: "relative",
    zIndex: "2",
    bottom: "1.8em",
    // left: "1em",
    // top: "2em",
  },
  ratingSection: {
    position: "absolute",
    backgroundColor: "red",
    textAlign: "center",
    maxHeight: "18vh",
    zIndex: "1",
    left: "0em",
    top: "0em",
  },
  testimonialCarousel: {
    minHeight: "50vh",
    backgroundColor: "green",
  },
}));

export default useStyles;
