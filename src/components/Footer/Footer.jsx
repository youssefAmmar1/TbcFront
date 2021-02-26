import { Button, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./materialStyles/footer";
import { createMuiTheme } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


function Footer() {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
        button: {
            fontFamily: "Nunito",
            fontWeight: 700,
            fontSize: "1.1em",
            textTransform: "none"
          },
          h3: {
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "1.4em",
            letterSpacing: "0.2em"
          },
          subtitle1: {
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "1em"
          }
        }
    });

  return (
      <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <div className={classes.navAndSocials}>
        <div className={classes.firstNav}>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
        </div>
        <div className={classes.secondNav}>
        <Button>FAQ's</Button>
        <Button>Login</Button>
        <Button>Terms & Conditions</Button>
        </div>
        <div className={classes.followUs}>
        <Typography variant="h3">Follow us on:</Typography>
        <FacebookIcon fontSize="large"/>
        <TwitterIcon fontSize="large"/>
        <InstagramIcon fontSize="large"/>
        <YouTubeIcon fontSize="large"/>
        </div>
      </div>
      <div className={classes.copyright}>
      <Typography variant="subtitle1">
      © 2020 ClickFit All rights reserved <br/>
      Designed and developed by ClickFit
      </Typography>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Footer;
