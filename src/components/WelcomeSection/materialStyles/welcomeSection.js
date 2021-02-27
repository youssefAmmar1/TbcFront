import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // maxHeight: "100vh",
    alignItems: "center",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/background.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "125px 5.2%",
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