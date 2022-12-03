import React from "react";
import { Link } from "react-router-dom";
import card1 from "../images/zumba.avif";
import card2 from "../images/pilates.avif";
import card3 from "../images/bodybuilding.avif";
import card4 from "../images/crossfit.avif";
import classes5 from "../images/classes5.avif";

function Classes() {
  return (
    <section>
      <div className="classes">
        <h1 className="classes-heading">Popular Classes</h1>
        <div className="classes-container">
          <div className="classes-card">
            <img src={card1} alt="card1" className="classes-img" />
            <h2 className="classes-name">Zumba</h2>
            <p className="classes-desc">
              Zumba is a dance fitness program created by Colombian dancer and
              choreographer Alberto "Beto" Perez.
            </p>
          </div>
          <div className="classes-card">
            <img src={classes5} alt="card2" className="classes-img" />
            <h2 className="classes-name">Cardio Boxing</h2>
            <p className="classes-desc">
              Cardio boxing uses a combination of shadowboxing and/or hitting
              the bag with continuous cardio movements to burn calories.
            </p>
          </div>
          <div className="classes-card">
            <img src={card3} alt="card3" className="classes-img" />
            <h2 className="classes-name">Body Building</h2>
            <p className="classes-desc">
              Bodybuilding is the use of progressive resistance exercise to
              control and develop one's musculature.
            </p>
          </div>
          <div className="classes-card">
            <img src={card4} alt="card4" className="classes-img" />
            <h2 className="classes-name">Crossfit</h2>
            <p className="classes-desc">
              CrossFit is a strength and conditioning program that uses
              constantly varied, high-intensity functional movements.
            </p>
          </div>
        </div>
        <Link to="/classes">
          <button className="check-classes ">check all classes</button>
        </Link>
      </div>
    </section>
  );
}

export default Classes;
