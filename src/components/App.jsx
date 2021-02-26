import React from "react";
import Nav from "./Navbar/Nav";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import About from "./whoWeAre/About";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import VideoPreview from "./VideoPreview/VideoPreview";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/images/background.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Nav />
        <WelcomeSection />
        <About />
        <VideoPreview />
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
