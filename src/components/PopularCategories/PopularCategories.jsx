import React from "react";
import "./PopularCategories.css";

function PopularCategories() {
  const CATEGORY = process.env.PUBLIC_URL + "/images/pasta.jpeg";

  return (
    <div className="category">
      <div className="category-image">
        <img src={CATEGORY}></img>
      </div>
      <div className="category-title">Pasta</div>
    </div>
  );
}

export default PopularCategories;
