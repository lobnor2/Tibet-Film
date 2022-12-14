import React, { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ExitToApp } from "@mui/icons-material";
import { userSelector } from "../../features/auth.js";
import useStyles from "./style.js";

const Profile = () => {
  const { user } = useSelector(userSelector);
  const classes = useStyles();
  const favoriteMovies = [];
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
      {!favoriteMovies.length ? (
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Add Favorite Movies
        </Typography>
      ) : (
        <Box>Favorite Movies</Box>
      )}

      <Button
        variant="contained"
        // color="error"
        // size="small"
        onClick={logout}
        className={classes.logoutButton}
      >
        Logout &nbsp; <ExitToApp />
      </Button>
    </Box>
  );
};

export default Profile;
