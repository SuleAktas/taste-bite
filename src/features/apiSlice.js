import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => "search.php?f=b",
    }),
  }),
});

export const { useGetAllRecipesQuery } = recipesApi;
