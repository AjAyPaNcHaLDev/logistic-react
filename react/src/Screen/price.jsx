import React from "react";

import { PriceHeader } from "../Component/Header";
import NavBar from "../Component/Navbar2";

import Topbar from "../Component/Topbar";
import AboutStart from "../Component/AboutStart";
import { Helmet } from "react-helmet";
import Team from "../Component/Team";
import PricingPlan from "../Component/PricingPlan";
import VideoModal from "../Component/VideoModal";

import Footer from "../Component/Footer";
const price = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Price</title>
        <meta name="description" content="Logistics Services About us" />
        <meta
          name="keywords"
          content="Logistic,transport,Logistics Services,
       Faster Logistic Service Provider, Best Logistic Services,
       transport,transport Services, Faster transport Service Provider, Best transport Services"
        />
        <meta name="author" content="ajay panchal" />
      </Helmet>
      <PriceHeader />
      <PricingPlan />
    </React.Fragment>
  );
};

export default price;
