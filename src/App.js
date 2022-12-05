import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// / -> root -> all movies
// /movie1 -> movie information -> more

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route path="/movie/:id" element={<h1>Movie Information</h1>} />
          <Route path="/actors/:id" element={<h1>Actors</h1>} />
          <Route path="/" element={<h1>Movies</h1>} />
          <Route path="/profile/:id" element={<h1>Profile</h1>} />
        </Routes>
      </main>
      {/* <h1>Hello World Tibet Film</h1> */}
    </div>
  );
}

export default App;
