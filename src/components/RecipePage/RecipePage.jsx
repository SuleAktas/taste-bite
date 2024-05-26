import React from "react";
import "./RecipePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import Checkbox from "@mui/material/Checkbox";
import { useLocation } from "react-router-dom";
import { useGetMealByIdQuery } from "../../features/apiSlice";

function RecipePage() {
  const opts = {
    height: "250",
    width: "345",
    borderRadius: "2",
    playerVars: {
      autoplay: 0,
    },
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { data, isLoading: isRecipeLoading } = useGetMealByIdQuery(
    params.get("id")
  );
  if (isRecipeLoading) {
    return <div>Loading...</div>;
  }
  const ingredients = [];
  for (const key in data.meals[0]) {
    if (key.startsWith("strIngredient")) {
      const index = key.replace("strIngredient", "");
      const ingredient = data.meals[0][key];
      const measure = data.meals[0][`strMeasure${index}`];

      if (ingredient && measure) {
        ingredients.push({ index, ingredient, measure });
      } else {
        break;
      }
    }
  }
  return (
    <div className="recipe-page">
      <div className="recipe-make-again">
        <i className="gg-trending"></i>
        <p>85% would make this again</p>
      </div>
      <div className="recipe-title">{data.meals[0].strMeal}</div>
      <div className="recipe-exp-section">
        <div className="recipe-exp">
          <div className="recipe-exp-author">
            <FontAwesomeIcon icon={faCircleUser} size="lg" /> Tricia Albert
          </div>
          <div className="recipe-date">
            <FontAwesomeIcon
              icon={faCalendar}
              size="lg"
              className="icon-margin"
            />
            Yesterday
          </div>
        </div>
        <div className="recipe-stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>

      <div className="recipe-pre-exp">
        One thing a learned living in the Canarsie section of Brooklyn, Ny was
        how to be a good cook .Here is recipe I created after having this dish
        in a restourant. Enjoy!
      </div>
      <div className="blog-vid">
        <YouTube videoId={data.meals[0].strYoutube.split("=")[1]} opts={opts} />
      </div>
      <div className="recipe-prep">
        <div className="recipe-time">
          <div className="recipe-prep-title">PREP TIME</div>
          <div className="recipe-prep-exp">15 MIN</div>
        </div>
        <div className="recipe-servings">
          <div className="recipe-prep-title">SERVINGS</div>
          <div className="recipe-prep-exp">4 PEOPLE</div>
        </div>
      </div>
      <div className="recipe-how-to-make">
        <div className="recipe-ingredients">
          <div className="recipe-title">Ingredients</div>
          <div className="recipe-ingredients-box">
            {ingredients.map((item) => (
              <div className="recipe-ingredient">
                <Checkbox key={item.index} />
                <div className="instruction-item">
                  {item.measure} {item.ingredient}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="recipe-instructions">
          <div className="recipe-title">Instructions</div>
          {data.meals[0].strInstructions.split("\r\n").map((item, index) => (
            <div className="recipe-ingredient">
              <div>
                <div className="recipe-circle">{index + 1}</div>
              </div>
              <div className="instruction-item">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
