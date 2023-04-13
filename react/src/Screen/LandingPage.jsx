import React from "react";
import AboutBox from "../Component/AboutBox";
import Blog from "../Component/Blog";
import Features from "../Component/Features";
import Header from "../Component/Header";
import NavBar from "../Component/Navbar2";
import PricingPlan from "../Component/PricingPlan";
import QuoteRequest from "../Component/QuoteRequest";
import Services from "../Component/Services";
import Team from "../Component/Team";
import Testimonial from "../Component/Testimonial";
import Topbar from "../Component/Topbar";
import VideoModal from "../Component/VideoModal";
import Footer from "../Component/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const LandingPage = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Logistic</title>
        <meta name="description" content="Logistics Services Tracking Id" />
        <meta
          name="keywords"
          content="Logistic,transport,Logistics Services,
         Faster Logistic Service Provider, Best Logistic Services,
         transport,transport Services, Faster transport Service Provider, Best transport Services"
        />
        <meta name="author" content="ajay panchal" />
      </Helmet>
      <Header />
      <Features />
      <PricingPlan />
      <Blog />
    </React.Fragment>
  );
};

export default LandingPage;
