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
    getAllCategories: builder.query({
      query: () => "categories.php",
    }),
    getRandomMeal: builder.query({
      query: () => "random.php",
    }),
    getMealById: builder.query({
      query: (id) => `lookup.php?i=${id}`,
    }),
    getRecipesByCategory: builder.query({
      query: (name) => `filter.php?c=${name}`,
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetAllRecipesQuery,
  useGetRandomMealQuery,
  useGetMealByIdQuery,
  useGetRecipesByCategoryQuery,
} = recipesApi;
