import React from "react";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/css/style.css";
import LandingPage from "./Screen/LandingPage";
import ServicePage from "./Screen/ServicePage";
import Price from "./Screen/price";
import Contact from "./Screen/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Screen/AboutPage";
import GetQuote from "./Screen/GetQuote";
import Test from "./Component/Test";
import Navbar2 from "./Component/Navbar2";
import Topbar from "./Component/Topbar";
import Footer from "./Component/Footer";
import Eror404 from "./Screen/Eror404";
const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="price" element={<Price />} />
          <Route path="blog" element={<LandingPage />} />
          <Route path="quote" element={<GetQuote />} />
          <Route path="/*" element={<Eror404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
