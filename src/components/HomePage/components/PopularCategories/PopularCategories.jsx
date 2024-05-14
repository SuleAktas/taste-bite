import React from "react";
import "./PopularCategories.css";

function PopularCategories(props) {
  return (
    <div className="category">
      <div className="category-image">
        <img src={props.image}></img>
      </div>
      <div className="category-title">{props.title}</div>
    </div>
  );
}

export default PopularCategories;
