import React from "react";
import "./LatestRecipes.css";
import { Link } from "react-router-dom";

function LatestRecipes(props) {
  return (
    <Link
      to={{
        pathname: "/recipe",
        state: { recipeId: props.id },
        search: `?id=${props.id}`,
      }}
      className="link-without-decoration"
    >
      <div className="latest-recipe-box">
        <div className="latest-recipe-image">
          <img src={props.image}></img>
        </div>

        <div className="latest-recipe-title">{props.title}</div>
      </div>
    </Link>
  );
}

export default LatestRecipes;
