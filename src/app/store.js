import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  // export default configureStore({
  reducer: {
    // add the generated reducer as a specific top level slice
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  //adding the api middleware enables caching, invalidation, polling,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

// setupListeners(store.dispatch);
