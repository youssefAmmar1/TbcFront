import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Navbar/Nav";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import Footer from "./Footer/Footer";
import landing from "../pages/landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Router>
        <Switch>
          <Route path="/" exact component={landing} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
