import React from 'react';
import './RecipesPage.css';
import { useGetRecipesByCategoryQuery } from '../../features/apiSlice';
import RatedRecipe from '../HomePage/components/RatedRecipe/RatedRecipe';
import { useLocation } from 'react-router-dom';

function RecipesPage() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const { data: recipes, isLoading: isRecipesLoading } =
		useGetRecipesByCategoryQuery(params.get('name'));
	if (isRecipesLoading) return <div>Loading...</div>;

	return (
		<div className="recipes-box">
			{recipes.map(recipe => (
				<RatedRecipe
					key={recipe.id}
					id={recipe.id}
					image={recipe.photoUrl}
					title={recipe.name}
				/>
			))}
		</div>
	);
}

export default RecipesPage;
