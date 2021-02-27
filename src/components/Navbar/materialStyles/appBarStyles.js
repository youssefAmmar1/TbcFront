import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  title: {
    display: "none",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  titleMobile: {
    display: "flex",
    fontSize: "2em",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  subButton: {
    flexGrow: 1,
    padding: "0.5em 0.8em",
    backgroundColor: "rgba(4,241,170,255)",
    marginLeft: "1em",
    "&:hover": {
      backgroundColor: "#0ea876",
    },
    [theme.breakpoints.down("md")]: {
        marginLeft: "0",
      },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      marginRight: "1em",
    },
  },
  sectionMobile: {
    display: "flex",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  button: {
    margin: "0 1.2em",
    "&:hover": {
      color: "rgba(4,241,170)",
      backgroundColor: "transparent"
    },
  },
  link: {
    margin: "0 1.2em",
    "&:hover": {
      color: "rgba(4,241,170)",
      backgroundColor: "transparent",
      textDecoration: "none"
    },
  }
}));

export default useStyles;
