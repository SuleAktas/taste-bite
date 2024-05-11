import React, { startTransition } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./RatedRecipe.css";

function RatedRecipe(props) {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    setStars(String(props.rating).split(".")[0]);
  }, []);

  return (
    <div className="rated-recipe">
      <div className="rated-recipe-img">
        <img src={props.image}></img>
      </div>
      <div className="rated-recipe-stars">
        <span
          className={stars >= 1 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={stars >= 2 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={stars >= 3 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={stars >= 4 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={stars >= 5 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
      </div>
      <div className="rated-recipe-title">{props.title}</div>
    </div>
  );
}

export default RatedRecipe;
