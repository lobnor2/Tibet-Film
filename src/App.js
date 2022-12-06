import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
  Errorpage,
} from "./components/index";
import useStyles from "./components/styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
      {/* <h1>Hello World Tibet Film</h1> */}
    </div>
  );
}

export default App;
