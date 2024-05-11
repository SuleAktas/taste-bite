import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";

import "./BlogPage.css";

function BlogPage() {
  const opts = {
    height: "250",
    width: "345",
    borderRadius: "2",
    playerVars: {
      autoplay: 0,
    },
  };
  const DOUGH = process.env.PUBLIC_URL + "/images/dough.jpeg";
  const DISH = process.env.PUBLIC_URL + "/images/dish.jpeg";

  return (
    <div className="blog-page">
      <div className="blog-title">
        A full guide for a better and smarter cooking
      </div>
      <div className="blog-exp">
        <div className="blog-exp-author">
          <FontAwesomeIcon icon={faCircleUser} size="lg" /> Tricia Albert
        </div>
        <div className="blog-date">
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          Yesterday
        </div>
      </div>

      <div className="blog-pre-exp">
        One thing a learned living in the Canarsie section of Brooklyn, Ny was
        how to cook a good Italian meal.Here is recipe I created after having
        this dish in a restourant. Enjoy!
      </div>
      <div className="blog-vid">
        <YouTube videoId="sv3TXMSv6Lw" opts={opts} />
      </div>
      <div className="blog-before">
        <div className="blog-general-title">Before you begin</div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem.
        </div>
      </div>

      <div className="blog-basics">
        <div className="blog-basics-text">
          <div className="blog-general-title">Here are the basics</div>
          <div className="blog-basics-exp">
            Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum.
          </div>
          <div className="blog-basics-exp">
            Lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem.
          </div>
        </div>
        <div className="blog-basics-img">
          <img src={DOUGH}></img>
        </div>
      </div>
      <div className="blog-writer">
        <div className="blog-writer-quote">
          "One cannot think well,love well, sleep well, if one has not dined
          well."
        </div>
        <div className="blog-writer-name">
          -Virginia Woolf, A Room of One's Own
        </div>
      </div>

      <div className="blog-kitchen">
        <div className="blog-general-title">In the kitchen</div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </div>
        <div className="blog-kitchen-img">
          <img src={DISH}></img>
        </div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum
        </div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem
        </div>
        <div className="blog-basics-exp">
          Lorem ipsum lorem ipsum lorem ipsuml orem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum
        </div>
      </div>
      <div className="blog-author-info"></div>
    </div>
  );
}

export default BlogPage;
