import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import { useTheme } from "@mui/material/styles";
import { Sidebar, Search } from "../index";
import { fetchToken, createSessionId, moviesApi } from "../../utils";
const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-Width:600px)");
  const theme = useTheme();
  const dispatch = useDispatch();

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();

          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* for mobile show hamburger icon button  */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          {/* light and dark icon button  */}
          <IconButton sx={{ ml: 1 }} onClick={() => {}} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* for device larger than 600px, show Search after light and dark icon button  */}
          {!isMobile && <Search />}
          {isMobile && <Search />}

          <div>
            {/* for unauthenticated user show login button and for authenticated user show my movies */}
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <> My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                />
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* for sidebar  */}
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
