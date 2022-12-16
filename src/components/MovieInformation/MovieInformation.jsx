import React, { useState } from "react";
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
import {
  useGetListQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../services/TMDB";
import useStyles from "./style";
import genreIcons from "../../assets/genres";
import { MovieList } from "..";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { userSelector } from "../../features/auth";
import { useEffect } from "react";

const MovieInformation = () => {
  const { user } = useSelector(userSelector);
  const isMobile = useMediaQuery("(max-Width:600px)");
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { data: favoriteMovies } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationsQuery({
      list: "/recommendations",
      movie_id: id,
    });
  // console.log(data);

  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);
  useEffect(() => {
    setIsMovieFavorited(
      !!favoriteMovies?.results?.find((movie) => movie?.id === data?.id)
    );
  }, [favoriteMovies, data]);
  useEffect(() => {
    setIsMovieWatchlisted(
      !!watchlistMovies?.results?.find((movie) => movie?.id === data?.id)
    );
  }, [watchlistMovies, data]);
  const addToFavorites = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem("session_id")}`,
      {
        media_type: "movie",
        media_id: id,
        favorite: !isMovieFavorited,
      }
    );
    setIsMovieFavorited((prev) => !prev);
  };
  const addToWatchlist = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem("session_id")}`,
      {
        media_type: "movie",
        media_id: id,
        watchlist: !isMovieWatchlisted,
      }
    );
    setIsMovieWatchlisted((prev) => !prev);
  };

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
        <Grid>
          <Typography align="center" gutterBottom>
            Release Date : {data?.release_date}
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
                <Button
                  onClick={() => setOpen(true)}
                  href="#"
                  endIcon={<Theaters />}
                >
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
      {/* You might also like section */}
      <Box marginTop="2rem" width="100%">
        <Typography variant="h3" gutterBottom align="center">
          You might also like
        </Typography>
        {/* Loop through the recommended movies... */}
        {recommendations ? (
          <MovieList movies={recommendations} numberofMovies={12} />
        ) : (
          <Box>Sorry, nothing was found </Box>
        )}
      </Box>
      <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className={classes.video}
            frameBorder="0"
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </Modal>
    </Grid>
  );
};

export default MovieInformation;
