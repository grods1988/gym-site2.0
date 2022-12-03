import React from "react";

function PricesandPlans() {
  return (
    <section>
      <div className="prices-container">
        <h1 className="page-title">prices & plans</h1>
        <div className="prices-content">
          <div className="prices-content-item">
            <div className="prices-content-item-price">
              <h2>Basic $30</h2>
            </div>
            <div className="prices-content-item-description">
              <h3>included:</h3>
              <ul>
                <li>Unlimited group workouts of your choice</li>
                <li>Unlimited gym access</li>
                <li>3x personal workouts</li>
                <li>Personal nutrition plan</li>
              </ul>
            </div>
          </div>
          <div className="prices-content-item">
            <div className="prices-content-item-price">
              <h2>unlimited $50</h2>
            </div>
            <div className="prices-content-item-description">
              <h3>included:</h3>
              <ul>
                <li>Unlimited gym access</li>
                <li>3x personal workouts</li>
                <li>Personal nutrition plan</li>
                <li>Personal training</li>
                <li>Cardio</li>
                <li>Weight training</li>
                <li>and more...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricesandPlans;
