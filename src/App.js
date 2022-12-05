import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components/index";
import useStyles from "./components/styles";

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      {/* <h1>Hello World Tibet Film</h1> */}
    </div>
  );
}

export default App;
