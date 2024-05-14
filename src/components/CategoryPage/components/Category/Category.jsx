import React from "react";
import "./Category.css";

function Category(props) {
  return (
    <div className="category-box">
      <div className="ctg-image">
        <img src={props.image}></img>
      </div>
      <div className="ctg-title">{props.title}</div>
    </div>
  );
}

export default Category;
