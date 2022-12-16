import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../index";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { Pagination } from "..";
import { FeaturedMovie } from "..";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  // console.log(data);
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }
  if (error) return "An error has occured";

  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} excludeFirst />
      <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default Movies;
