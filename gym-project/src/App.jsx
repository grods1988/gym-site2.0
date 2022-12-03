import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import Footer from "./assets/Footer";
import AllClasses from "./pages/AllClasses";
import PersonalWorkouts from "./pages/PersonalWorkouts";
import PricesandPlans from "./pages/PricesandPlans";
import Schedule from "./pages/Schedule";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<AllClasses />} />
        <Route path="/personalworkouts" element={<PersonalWorkouts />} />
        <Route path="/pricesandplans" element={<PricesandPlans />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
