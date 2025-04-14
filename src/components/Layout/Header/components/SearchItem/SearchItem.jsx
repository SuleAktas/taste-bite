import React from "react";
import { Link } from "react-router-dom";
import "./SearchItem.css";

function SearchItem(props) {
  return (
    <Link
      to={{
        pathname: "/recipe",
        state: { recipeId: props.id },
        search: `?id=${props.id}`,
      }}
      className="custom-link"
    >
      <div className="search-item">
        <div className="item-image">
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className="item-txt">
          <div className="item-title">{props.title}</div>
          <div className="item-category">{props.category}</div>
        </div>
      </div>
    </Link>
  );
}

export default SearchItem;
