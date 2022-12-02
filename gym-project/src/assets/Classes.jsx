import React from "react";
import card1 from "../images/zumba.avif";
import card2 from "../images/pilates.avif";
import card3 from "../images/bodybuilding.avif";
import card4 from "../images/crossfit.avif";

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
            <img src={card2} alt="card2" className="classes-img" />
            <h2 className="classes-name">Yoga</h2>
            <p className="classes-desc">
              Yoga is a group of physical, mental, and spiritual practices or
              disciplines which originated in ancient India.
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
        <button className="check-classes btn">check all classes</button>
      </div>
    </section>
  );
}

export default Classes;
