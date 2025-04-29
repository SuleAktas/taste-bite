import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
	reducerPath: 'recipesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8081/api/',
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
			query: id => `recipe/id=${id}`,
		}),
		getRecipesByCategory: builder.query({
			query: name => `filter.php?c=${name}`,
		}),
		getRecipesByName: builder.query({
			query: name => `search.php?f=${name}`,
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
