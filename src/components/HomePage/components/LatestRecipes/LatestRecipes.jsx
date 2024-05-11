import React from "react";
import "./LatestRecipes.css";

function LatestRecipes(props) {
  return (
    <div className="latest-recipe-box">
      <div className="latest-recipe-image">
        <img src={props.image}></img>
      </div>
      <div className="latest-recipe-title">{props.title}</div>
    </div>
  );
}

export default LatestRecipes;
