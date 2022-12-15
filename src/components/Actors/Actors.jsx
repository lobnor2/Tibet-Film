import React, { useState } from "react";
import useStyles from "./style";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import { MovieList } from "..";

//use useParams to get the actor's id
//make a new call using redux toolkit query => get the details of the actors
//research tmdb api docs..
// use newly created useGetActorHook to get actor's information

const Actors = () => {
  const page = 1;
  const isMobile = useMediaQuery("(max-Width:600px)");
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
  // console.log(data);
  const navigate = useNavigate();
  const classes = useStyles();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      {/* Actors {id}
      {data.name}
      {data.birthday}
      {data.biography} */}
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4} className={classes.imagegrid}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt={data.name}
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {isMobile ? (
            <Typography variant="h3" gutterBottom align="center">
              {data?.name}
            </Typography>
          ) : (
            <Typography variant="h2" gutterBottom align="center">
              {data?.name}
            </Typography>
          )}

          <Typography variant="h5" gutterBottom align="center">
            Born :{data?.birthday}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="justify"
            sx={{ px: "10px" }}
            paragraph
          >
            {data?.biography || "Sorry no bio available"}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        {isMobile ? (
          <Typography variant="h5" align="center" gutterBottom>
            Movies Related to {data?.name}
          </Typography>
        ) : (
          <Typography variant="h3" align="center" gutterBottom>
            Movies Related to {data?.name}
          </Typography>
        )}
        {movies && <MovieList movies={movies} />}
      </Box>
    </>
  );
};

export default Actors;
