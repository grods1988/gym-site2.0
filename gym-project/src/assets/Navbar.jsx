import { useState } from "react";
import logo from "../images/logo.png";

function App() {
  //   // create navbar
  //   const [navbar, setNavbar] = useState(false);

  //   const changeBackground = () => {
  //     if (window.scrollY >= 80) {
  //       setNavbar(true);
  //     } else {
  //       setNavbar(false);
  //     }
  //   };

  //   window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className="navbar navbar-active">
        <img src={logo} alt="logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li>
            <a className="navbar-link" href="#home">
              classes
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#about">
              personal workouts
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#services">
              prices & plans
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#contact">
              Schedule
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#contact">
              Sign up
            </a>
          </li>
        </ul>
        <div>
          <i className="fa-solid fa-bars navbar-toggle navbar-toggle-icon"></i>
        </div>
      </nav>
    </>
  );
}

export default App;
