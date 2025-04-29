import React from 'react';
import PopularRecipe from './components/PopularRecipe/PopularRecipe';
import Inbox from './components/Inbox/Inbox';
import LatestRecipes from './components/LatestRecipes/LatestRecipes';
import HandPickedCollections from './components/HandPickedCollections/HandPickedCollections';
import PopularCategories from './components/PopularCategories/PopularCategories';
import RatedRecipe from './components/RatedRecipe/RatedRecipe';

import {
	useGetAllRecipesQuery,
	useGetAllCategoriesQuery,
	useGetRandomMealQuery,
	useGetAllCollectionsQuery,
} from '../../features/apiSlice';
import './HomePage.css';

function HomePage() {
	const { data, isLoading: isRecipesLoading } = useGetAllRecipesQuery();
	const { data: categories, isLoading: isCategoriesLoading } =
		useGetAllCategoriesQuery();
	const { data: collections, isLoading: isCollectionsLoading } =
		useGetAllCollectionsQuery();
	const { data: randomMeal, isLoading: isRandomMealLoading } =
		useGetRandomMealQuery();

	if (
		isRecipesLoading ||
		isCategoriesLoading ||
		isRandomMealLoading ||
		isCollectionsLoading
	) {
		return <div>Loading...</div>;
	}

	return (
		<div className="outer-box">
			<div className="home-page">
				<div className="popular-recipe">
					<PopularRecipe
						title={randomMeal.name}
						image={randomMeal.photoUrl}
						id={randomMeal.id}
						rate={randomMeal.rating}
					/>
				</div>
				<div className="super-delicious">
					<span className="title">Super Delicious</span>
					<div className="recipe-boxes">
						{data?.slice(0, 9).map(recipe => (
							<RatedRecipe
								key={recipe.id}
								id={recipe.id}
								image={recipe.photoUrl}
								title={recipe.name}
							/>
						))}
					</div>
				</div>
				<div className="popular-categories">
					<div className="popular-title">Popular Categories</div>
					<div className="popular-categories-boxes">
						{categories?.slice(0, 6).map(category => (
							<PopularCategories
								key={category.id}
								image={category.photoUrl}
								title={category.name}
							/>
						))}
					</div>
				</div>
				<div className="inbox">
					<Inbox />
				</div>
				<div className="collections">
					<span className="collection-title2">Hand-Picked Collections</span>
					<div className="collection-boxes">
						{collections.map(collection => (
							<HandPickedCollections
								image={collection.photoUrl}
								title={collection.name}
								link={`${collection.recipes.length} Recipes`}
							/>
						))}
					</div>
				</div>

				<div className="latest-recipes">
					<div className="latest-recipes-title">Latest Recipes</div>
					<div className="latest-recipe-boxes">
						{data?.slice(0, 6).map(recipe => (
							<LatestRecipes
								key={recipe.id}
								id={recipe.id}
								image={recipe.photoUrl}
								title={recipe.name}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
