import { configureStore } from "@reduxjs/toolkit";
import { recipesApi } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});
