import React from "react";
import {
  Typography,
  Grid,
  Grow,
  Tooltip,
  Rating,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Movie = ({ movie, i }) => {
  const isMobile = useMediaQuery("(max-Width:600px)");
  const classes = useStyles();
  return (
    <Grid item sx={12} sm={12} md={6} lg={4} xl={3} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
          />
          {isMobile ? (
            <Typography className={classes.title} variant="body2">
              {movie.title}
            </Typography>
          ) : (
            <Typography className={classes.title} variant="h6">
              {movie.title}
            </Typography>
          )}

          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
