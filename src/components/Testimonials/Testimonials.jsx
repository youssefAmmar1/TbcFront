import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@material-ui/core";
import useStyles from "./materialStyles/testimonials";
import reviews from "./reviews";
import "./styles.css";

function TestimonialCarousel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.testimonialTitle}>
        Testimonials
      </Typography>
      <Carousel
        className={classes.carousel}
        indicators={false}
        fullHeightHover={false}
      >
        {reviews.map((review, i) => (
          <Item key={i} item={review} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper} elevation={7}>
        <img
          src={process.env.PUBLIC_URL + "/svgs/circle.svg"}
          className={classes.circle}
          alt="circle"
        />
        <Typography variant="h4">{props.item.text}</Typography>
        <Typography variant="h3" className={classes.rating}>{props.item.rating}</Typography>

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    </div>
  );
}

export default TestimonialCarousel;
