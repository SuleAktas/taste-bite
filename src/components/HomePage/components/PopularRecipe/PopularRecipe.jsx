import React from "react";
import "./PopularRecipe.css";
import { Link } from "react-router-dom";

function PopularRecipe() {
  const POPULAR_RECIPE = process.env.PUBLIC_URL + "/images/recipe.jpg";
  return (
    <div className="popular-recipe-box">
      <div className="popular-recipe-image">
        <img src={POPULAR_RECIPE}></img>
      </div>
      <div className="popular-recipe-text">
        <div className="popular-recipe-make-again">
          <i className="gg-trending"></i>85% would make this again
        </div>
        <div className="popular-recipe-title">Mighty Super Cheese Burger</div>
        <div className="popular-recipe-exp">
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! no one can deny its simple decadence.
        </div>
        <div className="popular-recipe-btn">
          <div className="popular-recipe-btn2">
            <Link to="/recipe">
              <i className="gg-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularRecipe;
