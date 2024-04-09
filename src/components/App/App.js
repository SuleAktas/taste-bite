import RatedRecipe from "../RatedRecipe/RatedRecipe";
import "./App.css";

function App() {
  const RECIPE = process.env.PUBLIC_URL + "/images/recipe.jpg";

  return (
    <div className="App">
      <span className="title">Super Delicious</span>
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
  );
}

export default App;
