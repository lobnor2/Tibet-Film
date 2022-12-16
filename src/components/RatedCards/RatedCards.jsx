import React from "react";
import useStyles from "./styles";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { Movie } from "..";

const RatedCards = ({ title, data }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-Width:600px)");
  return (
    <Box>
      {isMobile ? (
        <Typography
          variant="h5"
          gutterBottom
          sx={{ mt: "30px", mb: "-10px" }}
          align="center"
        >
          {title}
        </Typography>
      ) : (
        <Typography variant="h4" gutterBottom sx={{ mt: "30px", pl: "35px" }}>
          {title}
        </Typography>
      )}

      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
