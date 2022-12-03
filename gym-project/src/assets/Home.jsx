import React from "react";
import Classes from "./Classes";
import About from "./About";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="home-content">
          <h1 className="home-content-title">
            It's all about what you can achieve
          </h1>
          <p className="home-content-subtitle">
            empower yourself with the best fitness classes in town.
          </p>
          <Link to="/classes" className="">
            <button className="">Lets Get started</button>
          </Link>
        </div>
      </section>
      <Classes />
      <About />
    </div>
  );
}

export default Home;
