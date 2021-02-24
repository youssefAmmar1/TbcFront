import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "./materialStyles/welcomeSection";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Collapse } from '@material-ui/core';

export default function SimpleContainer() {
  const classes = useStyles();
  const [checked,setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, [])
  return (
    <div id="welcomeSection">
    <React.Fragment>
    
      <Container maxWidth="false" disableGutters="true" className={classes.root}>
      <Collapse in={checked} {...(checked? {timeout:1500} : {})} collapsedHeight={50}>
        <Typography variant="h1" className={classes.header}>Click<span className={classes.fit}>Fit</span></Typography>
        <div className={classes.socials}>
          <FacebookIcon fontSize="large" className={classes.margining} />
          <TwitterIcon fontSize="large" className={classes.margining}/>
          <InstagramIcon fontSize="large" className={classes.margining}/>
          <YouTubeIcon  fontSize="large" className={classes.margining}/>
        </div>
        </Collapse>
      </Container>
      
    </React.Fragment>
    </div>
  );
}
