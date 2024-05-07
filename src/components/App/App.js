import HandPickedCollections from "../HandPickedCollections/HandPickedCollections";
import PopularCategories from "../PopularCategories/PopularCategories";
import RatedRecipe from "../RatedRecipe/RatedRecipe";

import { useGetAllRecipesQuery } from "../../features/apiSlice";
import "./App.css";
import PopularRecipe from "../PopularRecipe/PopularRecipe";
import Inbox from "../Inbox/Inbox";
import LatestRecipes from "../LatestRecipes/LatestRecipes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const { data } = useGetAllRecipesQuery();
  console.log(data);
  const RECIPE = process.env.PUBLIC_URL + "/images/recipe.jpg";
  const COLLECTION1 = process.env.PUBLIC_URL + "/images/collection1.jpeg";

  return (
    <div className="App">
      <Header />
      <div className="popular-recipe">
        <PopularRecipe />
      </div>
      <div className="super-delicious">
        <span className="title">Super Delicious</span>
        <div className="recipe-boxes">
          <RatedRecipe
            image={RECIPE}
            title={"Spinach and Cheese Salad"}
            rating={3.75}
          />
          <RatedRecipe
            image={RECIPE}
            title={"Spinach and Cheese Salad"}
            rating={4.75}
          />
          <RatedRecipe
            image={RECIPE}
            title={"Spinach and Cheese Salad"}
            rating={2.75}
          />
          <RatedRecipe
            image={RECIPE}
            title={"Spinach and Cheese Salad"}
            rating={1.75}
          />
          <RatedRecipe
            image={RECIPE}
            title={"Spinach and Cheese Salad"}
            rating={5.75}
          />
        </div>
      </div>
      <div className="popular-categories">
        <div className="popular-title">Popular Categories</div>
        <div className="popular-categories-boxes">
          <PopularCategories
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <PopularCategories
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <PopularCategories
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <PopularCategories
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <PopularCategories
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <PopularCategories
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
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
            link={"156 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION1}
            title={"Sushi Combos for your Next Party!"}
            link={"180 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION1}
            title={"Sushi Combos for your Next Party!"}
            link={"157 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION1}
            title={"Sushi Combos for your Next Party!"}
            link={"1 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION1}
            title={"Sushi Combos for your Next Party!"}
            link={"55 Recipes"}
          />
          <HandPickedCollections
            image={COLLECTION1}
            title={"Sushi Combos for your Next Party!"}
            link={"44 Recipes"}
          />
        </div>
      </div>

      <div className="latest-recipes">
        <div className="latest-recipes-title">Latest Recipes</div>
        <div className="latest-recipe-boxes">
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
          <LatestRecipes
            image={RECIPE}
            title={"Caramel Strawberry Milkshake"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
