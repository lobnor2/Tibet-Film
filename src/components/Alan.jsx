import React, { useContext, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleColorMode";
import { fetchToken } from "../utils";
import {
  searchMovie,
  selectGenreOrCategory,
} from "../features/currentGenreOrCategory";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    alanBtn({
      key: "dd657cf801cd59dc48895e1da0e0aedf2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );
          if (foundGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            navigate("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear(); //will clear the local Storage
          navigate("/");
          //   window.location.href = "/";
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
