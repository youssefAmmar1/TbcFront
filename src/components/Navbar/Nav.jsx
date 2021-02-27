import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./materialStyles/appBarStyles";
import navbarItems from "./static/navbarItems";

export default function ButtonAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {navbarItems.map((navbarItem) => (
        <MenuItem>
        <Link color="inherit" variant="button" className={classes.link}>
          {navbarItem.text}
        </Link>
      </MenuItem>
      ))}
      <MenuItem>
        <Button color="inherit" className={classes.subButton}>
          Subscribe
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <div className={classes.sectionMobile}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
            </div>

            <Typography variant="h3" className={classes.title}>
              ClickFit
            </Typography>
            <div className={classes.sectionDesktop}>
              {navbarItems.map((navbarItem) => (
                <Link variant="button" color="inherit" className={classes.link}>
                  {navbarItem.text}
                </Link>
              ))}
              <Button color="inherit" className={classes.subButton}>
                Subscribe
              </Button>
            </div>
            <Typography variant="h3" className={classes.titleMobile}>
              ClickFit
            </Typography>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
    </div>
  );
}
