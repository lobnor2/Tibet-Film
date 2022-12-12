import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import { setupListeners } from "@reduxjs/toolkit/query";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";

export const store = configureStore({
  // export default configureStore({
  reducer: {
    // add the generated reducer as a specific top level slice
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },

  //adding the api middleware enables caching, invalidation, polling,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

// setupListeners(store.dispatch);
