import React from "react";
import "./PopularRecipe.css";
import { Link } from "react-router-dom";

function PopularRecipe(props) {
  return (
    <div className="popular-recipe-box">
      <div className="popular-recipe-image">
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className="popular-recipe-text">
        <div className="popular-recipe-make-again">
          <i className="gg-trending"></i>85% would make this again
        </div>
        <div className="popular-recipe-title">{props.title}</div>
        <div className="popular-recipe-exp">
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! no one can deny its simple decadence.
        </div>
      </div>
      <div className="popular-recipe-btn">
        <div className="popular-recipe-btn2">
          <Link
            to={{
              pathname: "/recipe",
              state: { recipeId: props.id },
              search: `?id=${props.id}`,
            }}
          >
            <i className="gg-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopularRecipe;
