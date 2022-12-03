import React from "react";
import { Link } from "react-router-dom";
import trainer1 from "../images/trainer1.avif";
import trainer2 from "../images/trainer2.avif";
import trainer3 from "../images/trainer3.avif";

function PersonalWorkouts() {
  return (
    <section className="trainers">
      <div className="trainers-container">
        <h1 className="page-title">personal trainers</h1>
        <div className="trainers-content">
          <div className="trainers-image">
            <img src={trainer1} alt="trainer" />
          </div>
          <div className="trainers-info">
            <h3>MATTHEW HERON</h3>
            <p>
              Mathew is the expert to talk to if your fitness goal is to lose
              weight or tone up. Working clients through high-intensity workouts
              and tailored fitness plans, Mat doesn`t take no for an answer when
              it comes to your goals.
            </p>
            <p>
              With a background in sports psychology and physical therapy, Matt
              understands how the mind and body need to work together for you to
              achieve success.
            </p>
            <Link to="/signup">
              <button>schedule workout</button>
            </Link>
          </div>
        </div>
        <div className="trainers-reverse">
          <div className="trainers-image">
            <img src={trainer2} alt="trainer" />
          </div>
          <div className="trainers-info">
            <h3>JOHN HEERON</h3>
            <p>
              Whether you’re new to boxing or a seasoned fighter, John can teach
              you a thing or two about keeping fit for the ring and
              understanding your opponent.
            </p>
            <p>
              While he comes from the world of professional boxing, John takes a
              holistic approach to fitness, and is just as likely to throw you
              into a yoga class as he is to throw you around the boxing ring.
            </p>
            <Link to="/signup">
              <button>schedule workout</button>
            </Link>
          </div>
        </div>
        <div className="trainers-content">
          <div className="trainers-image">
            <img src={trainer3} alt="trainer" />
          </div>
          <div className="trainers-info">
            <h3>INNA GEBROW</h3>
            <p>
              Are you looking to improve your and joint strength? Then you
              should get in touch within Inna for a consultation.
            </p>
            <p>
              A highly trained instructor for both yoga and pilates, Inna can
              help you better understand your own body, and will help guide you
              towards your goals in a way that works with your body instead of
              against it.
            </p>
            <Link to="/signup">
              <button>schedule workout</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalWorkouts;
