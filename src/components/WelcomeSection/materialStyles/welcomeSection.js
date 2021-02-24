import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "89vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto"
  },
  fit: {
    color: "white"
  },
  header: {
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
    },
  },
  margining: {
    marginRight: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.2em"
    },
  },
  socials: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default useStyles;