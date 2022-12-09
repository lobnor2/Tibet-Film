import { configureStore } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";
import { tmdbApi } from "../services/TMDB";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
