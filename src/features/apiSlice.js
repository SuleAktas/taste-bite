import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
	reducerPath: 'recipesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_PROD}api/`,
	}),
	endpoints: builder => ({
		getAllRecipes: builder.query({
			query: () => 'recipe',
		}),
		getAllCategories: builder.query({
			query: () => 'category',
		}),
		getRandomMeal: builder.query({
			query: () => 'recipe/popularRecipe',
		}),
		getMealById: builder.query({
			query: id => `recipe/${id}`,
		}),
		getRecipesByCategory: builder.query({
			query: name => `/recipe/recipeByCategoryName/q=${name}`,
		}),
		getRecipesByName: builder.query({
			query: name => `/recipe/recipeByName/q=${name}`,
		}),
		getAllCollections: builder.query({
			query: () => `collection`,
		}),
	}),
});

export const {
	useGetAllCategoriesQuery,
	useGetAllRecipesQuery,
	useGetRandomMealQuery,
	useGetMealByIdQuery,
	useGetRecipesByCategoryQuery,
	useGetRecipesByNameQuery,
	useGetAllCollectionsQuery,
} = recipesApi;
