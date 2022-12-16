import React, { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ExitToApp } from "@mui/icons-material";
import { userSelector } from "../../features/auth.js";
import useStyles from "./style.js";
import { useGetListQuery } from "../../services/TMDB.js";
import { RatedCards } from "..";

const Profile = () => {
  const { user } = useSelector(userSelector);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  useEffect(() => {
    refetchFavorites();
    refetchWatchlist();
  }, []);

  const classes = useStyles();
  // const favoriteMovies = [];
  const logout = () => {
    localStorage.clear(); //will clear the local Storage

    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" flexDirection="column">
        <Typography
          variant="h4"
          style={{ textAlign: "center" }}
          className={classes.title}
        >
          {" "}
          My Profile {`(${user.username})`}
        </Typography>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Add Favorite Movies
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist Movies" data={watchlistMovies} />
        </Box>
      )}

      <Button
        variant="contained"
        // color="error"
        // size="small"
        onClick={logout}
        className={classes.logoutButton}
        sx={{ mb: "40px" }}
      >
        Logout &nbsp; <ExitToApp />
      </Button>
    </Box>
  );
};

export default Profile;
