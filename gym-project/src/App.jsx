import { useState } from "react";
import "./App.css";
import Classes from "./assets/Classes";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import About from "./assets/About";
import Footer from "./assets/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Classes />
      <About />
      <Footer />
    </div>
  );
}

export default App;
