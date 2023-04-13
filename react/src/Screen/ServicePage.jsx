import React from "react";
import AboutBox from "../Component/AboutBox";
import Blog from "../Component/Blog";
import Features from "../Component/Features";
import { ServicesHeader } from "../Component/Header";
import Services from "../Component/Services";
import Footer from "../Component/Footer";
import { Helmet } from "react-helmet";
const ServicePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Service</title>
        <meta name="description" content="Logistics Services Tracking Id" />
        <meta
          name="keywords"
          content="Logistic,transport,Logistics Services,
     Faster Logistic Service Provider, Best Logistic Services,
     transport,transport Services, Faster transport Service Provider, Best transport Services"
        />
        <meta name="author" content="John Doe" />
      </Helmet>
      <ServicesHeader />
      <Services />
    </React.Fragment>
  );
};

export default ServicePage;
