import React from "react";
import classes1 from "../images/classes1.avif";
import classes2 from "../images/classes2.avif";
import classes3 from "../images/classes3.avif";
import classes4 from "../images/classes4.avif";
import classes5 from "../images/classes5.avif";
import classes6 from "../images/classes6.avif";
import classes7 from "../images/classes7.avif";
import classes8 from "../images/classes8.avif";

function AllClasses() {
  return (
    <section>
      <h1 className="page-title">All Classes</h1>
      <div className="image-container">
        <div className="image">
          <img src={classes1} alt="yoga" />
          <h2 className="singleClass">yoga</h2>
        </div>
        <div className="image">
          <img src={classes2} alt="yoga" />
          <h2 className="singleClass">air Yoga</h2>
        </div>
        <div className="image">
          <img src={classes3} alt="yoga" />
          <h2 className="singleClass">Sport Dances</h2>
        </div>
        <div className="image">
          <img src={classes4} alt="yoga" />
          <h2 className="singleClass">Lifting</h2>
        </div>
        <div className="image">
          <img src={classes5} alt="yoga" />
          <h2 className="singleClass">Cardio Boxing</h2>
        </div>
        <div className="image">
          <img src={classes6} alt="yoga" />
          <h2 className="singleClass">Cardio</h2>
        </div>
        <div className="image">
          <img src={classes7} alt="yoga" />
          <h2 className="singleClass">Press & Back</h2>
        </div>
        <div className="image">
          <img src={classes8} alt="yoga" />
          <h2 className="singleClass">Body Building</h2>
        </div>
      </div>
    </section>
  );
}

export default AllClasses;
