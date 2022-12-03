import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar navbar-active">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link className="navbar-link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/classes">
              classes
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/personalworkouts">
              personal workouts
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/pricesandplans">
              prices & plans
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/schedule">
              Schedule
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/signup">
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
