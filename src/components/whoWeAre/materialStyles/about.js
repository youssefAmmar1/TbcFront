import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "85vh",
    margin: "7em 2em 0em",
  },
  title: {
    fontFamily: "Nunito",
    letterSpacing: "0.3em",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5em",
    },
  },
  subtitle: {
    marginTop: "1em",
    maxWidth: "30em",
    [theme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
  },
  subButton: {
    marginTop: "1em",
    textTransform: "none",
    fontSize: "1.5em",
    display: "flex",
    padding: "0.5em 0.8em",
    backgroundColor: "rgba(4,241,170,255)",
    "&:hover": {
      backgroundColor: "#0ea876",
    },
  },
}));

export default useStyles;
