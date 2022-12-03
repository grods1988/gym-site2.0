import React from "react";
import { Link } from "react-router-dom";
import about from "../images/about.avif";

function About() {
  return (
    <section className="about-info">
      <div className="about-content">
        <h1 className="about-heading">ABOUT FLOREASCA FITNESS</h1>
        <p>
          We are not here to carry you to fitness, we are here to motivate you
          to carry yourself to your goals.
        </p>
        <p>
          If you are not sure what your goals are, or don`t know where to start
          on your fitness journey, come in and speak to one of our qualified
          trainers who can help you develop a plan.
        </p>
        <Link to="/schedule">
          <button className="about-btn">Schedule</button>
        </Link>
      </div>
      <img src={about} alt="about" className="about-img" />
    </section>
  );
}

export default About;
