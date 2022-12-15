import React from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
  Divider,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useGetMovieQuery } from "../../services/TMDB";
import useStyles from "./style";
import genreIcons from "../../assets/genres";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const MovieInformation = () => {
  const isMobile = useMediaQuery("(max-Width:600px)");

  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
  // console.log(data);

  const isMovieFavorited = true;
  const isMovieWatchlisted = true;

  const addToFavorites = () => {};
  const addToWatchlist = () => {};

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="5rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong, Go back </Link>
      </Box>
    );
  }

  return (
    <Grid container className={classes.containerSpaceAround}>
      {/* Move information */}
      <Grid item sm={12} lg={4}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          className={classes.poster}
          alt={data?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={6}>
        {isMobile ? (
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className={classes.title}
          >
            {data?.title} ({data.release_date.split("-")[0]})
          </Typography>
        ) : (
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            className={classes.title}
          >
            {data?.title} ({data.release_date.split("-")[0]})
          </Typography>
        )}
        {isMobile ? (
          <Typography variant="subtitle1" align="center" gutterBottom>
            {data?.tagline}
          </Typography>
        ) : (
          <Typography variant="h6" align="center" gutterBottom>
            {data?.tagline}
          </Typography>
        )}

        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readonly value={data.vote_average / 2} />
            <Typography
              variant="sibtitle1"
              gutterBottom
              style={{ marginLeft: "10px" }}
            >
              {(data?.vote_average).toFixed(1)}/10
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography align="center" gutterBottom>
            {data?.runtime}min{" "}
            {data?.spoken_languages.length > 0
              ? `/ ${data?.spoken_languages[0].english_name} `
              : ""}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre, i) => (
            <Link
              className={classes.links}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
              key={genre.name}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                height={30}
              />
              <Typography color="textprimary" variant="subtitle1">
                {genre.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: "10px",
            marginLeft: "10px",
          }}
        >
          Overview
        </Typography>
        <Typography sx={{ mx: "10px", mb: "30px" }}>
          {data?.overview}
        </Typography>
        <Divider />
        <Typography
          variant="h5"
          sx={{ mx: "10px", mb: "20px" }}
          display="flex"
          justifyContent="center"
        >
          Top Cast
        </Typography>

        <Grid item container spacing={3} style={{ paddingLeft: "10px" }}>
          {data &&
            data.credits.cast
              .map(
                (character, i) =>
                  character.profile_path && (
                    <>
                      <Grid
                        key={i}
                        item
                        sx={4}
                        sm={3}
                        md={2}
                        component={Link}
                        to={`/actors/${character.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                          alt={character.name}
                          className={classes.castImage}
                        />
                        {isMobile ? (
                          <Typography color="textPrimary" variant="body2">
                            {character?.name}
                          </Typography>
                        ) : (
                          <Typography color="textPrimary" variant="">
                            {character?.name}
                          </Typography>
                        )}
                        {isMobile ? (
                          <Typography color="textSecondary" variant="body2">
                            {character.character.split("/")[0]}
                          </Typography>
                        ) : (
                          <Typography color="textSecondary">
                            {character.character.split("/")[0]}
                          </Typography>
                        )}
                      </Grid>
                    </>
                  )
              )
              .slice(0, 6)}
        </Grid>
        <Grid item container style={{ marginTop: "2rem" }}>
          <div
          // className={classes.buttonsContainer}
          >
            <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
              <ButtonGroup
                size="medium"
                variant="outlined"
                fullWidth
                sx={{ px: { xs: "15px" }, width: { lg: "400px" }, my: "10px" }}
              >
                <Button
                  target="_blank "
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  endIcon={<Language />}
                >
                  Website
                </Button>
                <Button
                  target="_blank "
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button onClick={() => {}} href="#" endIcon={<Theaters />}>
                  Trailer
                </Button>
                {/* {isMobile ? <br /> : ""} */}
              </ButtonGroup>
              <ButtonGroup
                size="medium"
                variant="outlined"
                fullWidth
                sx={{ px: { xs: "15px" }, width: { lg: "400px" } }}
              >
                <Button
                  onClick={addToFavorites}
                  endIcon={
                    isMovieFavorited ? <Favorite /> : <FavoriteBorderOutlined />
                  }
                >
                  {isMovieFavorited ? "Unfavorite" : "Favorite"}
                </Button>
                <Button
                  onClick={addToWatchlist}
                  endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
                >
                  {/* {isMovieWatchlisted
                    ? "Remove from Watchlist"
                    : "Add to Watchlist"} */}
                  Watchlist
                </Button>
                <Button
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: "primary.main" }}
                >
                  <Typography
                    component={Link}
                    to="/"
                    color="inherit"
                    variant="subtitle2"
                    style={{ textDecoration: "none" }}
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieInformation;
