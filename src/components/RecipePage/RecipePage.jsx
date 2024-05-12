import React from "react";
import "./RecipePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import Checkbox from "@mui/material/Checkbox";

function RecipePage() {
  const opts = {
    height: "250",
    width: "345",
    borderRadius: "2",
    playerVars: {
      autoplay: 0,
    },
  };
  const instructions = {
    strInstructions:
      "Preheat the oven to 200C/180C Fan/Gas6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.",
  };
  const ingredients = [
    { id: 1, strMeasure: "175g/6oz", strIngredient: "digestive biscuits" },
    { id: 2, strMeasure: "75g/3oz", strIngredient: "butter" },
    { id: 3, strMeasure: "200g/7oz", strIngredient: "Bramley apples" },
    { id: 4, strIngredient: "butter, softened", strMeasure: "75g/3oz" },
    { id: 5, strMeasure: "75g/3oz", strIngredient: "caster sugar" },
    { id: 6, strMeasure: "2", strIngredient: "free-range eggs, beaten" },
    { id: 7, strMeasure: "75g/3oz", strIngredient: "ground almonds" },
    { id: 8, strMeasure: "1 tsp", strIngredient: "almond extract" },
    { id: 9, strMeasure: "50g/1¾oz", strIngredient: "flaked almonds" },
  ];
  return (
    <div className="recipe-page">
      <div className="recipe-make-again">
        <i className="gg-trending"></i>
        <p>85% would make this again</p>
      </div>
      <div className="recipe-title">Strawberry Cream Cheesecake</div>
      <div className="recipe-exp-section">
        <div className="recipe-exp">
          <div className="recipe-exp-author">
            <FontAwesomeIcon icon={faCircleUser} size="lg" /> Tricia Albert
          </div>
          <div className="recipe-date">
            <FontAwesomeIcon icon={faCalendar} size="lg" />
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
        how to cook a good Italian meal.Here is recipe I created after having
        this dish in a restourant. Enjoy!
      </div>
      <div className="blog-vid">
        <YouTube videoId="sv3TXMSv6Lw" opts={opts} />
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
                <Checkbox key={item.id} />
                <div className="instruction-item">
                  {item.strMeasure} {item.strIngredient}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="recipe-instructions">
          <div className="recipe-title">Instructions</div>
          {instructions.strInstructions.split("\r\n").map((item, index) => (
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
