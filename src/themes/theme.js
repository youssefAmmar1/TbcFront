import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
      h1: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize: "10em",
        letterSpacing: "0.3em"
      },
      h3: {
        fontFamily: "Montserrat",
        fontWeight: 400,
        letterSpacing: "0.5em"
      },
      button: {
        fontFamily: "Nunito",
        fontWeight: 700,
        fontSize: "1em",
      },
      subtitle1: {
        fontFamily: "Nunito",
        fontWeight: 400,
        fontSize: "1.5em"
      }
    }
  });

export default theme;