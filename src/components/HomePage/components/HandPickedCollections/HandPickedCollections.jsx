import React from "react";
import "./HandPickedCollections.css";

function HandPickedCollections(props) {
  return (
    <div className="hand-picked-collections">
      <div className="collection-image">
        <img src={props.image}></img>
      </div>
      <div className="collection-title">{props.title}</div>
      <div className="collection-link">
        <button>{props.link}</button>
      </div>
    </div>
  );
}

export default HandPickedCollections;
