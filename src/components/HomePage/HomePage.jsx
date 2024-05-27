import React from "react";
import PopularRecipe from "./components/PopularRecipe/PopularRecipe";
import Inbox from "./components/Inbox/Inbox";
import LatestRecipes from "./components/LatestRecipes/LatestRecipes";
import HandPickedCollections from "./components/HandPickedCollections/HandPickedCollections";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import RatedRecipe from "./components/RatedRecipe/RatedRecipe";

import {
  useGetAllRecipesQuery,
  useGetAllCategoriesQuery,
  useGetRandomMealQuery,
} from "../../features/apiSlice";
import "./HomePage.css";

function HomePage() {
  const { data, isLoading: isRecipesLoading } = useGetAllRecipesQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetAllCategoriesQuery();
  const { data: randomMeal, isLoading: isRandomMealLoading } =
    useGetRandomMealQuery();

  const COLLECTION1 = process.env.PUBLIC_URL + "/images/collection1.jpeg";
  const COLLECTION2 = process.env.PUBLIC_URL + "/images/COLLECTION2.jpeg";
  const COLLECTION3 = process.env.PUBLIC_URL + "/images/COLLECTION3.jpeg";
  const COLLECTION4 = process.env.PUBLIC_URL + "/images/COLLECTION4.jpeg";
  const COLLECTION5 = process.env.PUBLIC_URL + "/images/COLLECTION5.webp";
  if (isRecipesLoading || isCategoriesLoading || isRandomMealLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  console.log("kategoriler", categories.categories);
  console.log("random yemek", randomMeal);
  return (
    <div className="home-page">
      <div className="popular-recipe">
        <PopularRecipe
          title={randomMeal.meals[0].strMeal}
          image={randomMeal.meals[0].strMealThumb}
          id={randomMeal.meals[0].idMeal}
        />
      </div>
      <div className="super-delicious">
        <span className="title">Super Delicious</span>
        <div className="recipe-boxes">
          {data?.meals.slice(0, 9).map((recipe) => (
            <RatedRecipe
              key={recipe.idMeal}
              id={recipe.idMeal}
              image={recipe.strMealThumb}
              title={recipe.strMeal}
            />
          ))}
        </div>
      </div>
      <div className="popular-categories">
        <div className="popular-title">Popular Categories</div>
        <div className="popular-categories-boxes">
          {categories?.categories.slice(0, 6).map((category) => (
            <PopularCategories
              key={category.id}
              image={category.strCategoryThumb}
              title={category.strCategory}
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
          <HandPickedCollections
            image={COLLECTION1}
            title={"Sushi Combos for your Next Party!"}
            link={"180 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION2}
            title={"Mouthwatering Vegan Recipes!"}
            link={"157 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION3}
            title={"Best Vegetarian Dinner Recipes"}
            link={"1 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION4}
            title={"Best Salmon Recipes!"}
            link={"55 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION5}
            title={"Wholesome Lentil Recipes!"}
            link={"44 Recipes"}
          />
        </div>
      </div>

      <div className="latest-recipes">
        <div className="latest-recipes-title">Latest Recipes</div>
        <div className="latest-recipe-boxes">
          {data?.meals.slice(9, 17).map((recipe) => (
            <LatestRecipes
              id={recipe.idMeal}
              image={recipe.strMealThumb}
              title={recipe.strMeal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
