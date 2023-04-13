import React from "react";
import Header from "../Component/Header";
import NavBar from "../Component/Navbar2";
import Topbar from "../Component/Topbar";
import { Helmet } from "react-helmet";
import Footer from "../Component/Footer";
import QuoteRequest from "../Component/QuoteRequest";
const GetQuote = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Logistics Services About us" />
        <meta
          name="keywords"
          content="Logistic,transport,Logistics Services,
         Faster Logistic Service Provider, Best Logistic Services,
         transport,transport Services, Faster transport Service Provider, Best transport Services"
        />
        <meta name="author" content="ajay panchal" />
      </Helmet>
      <Header />
      <QuoteRequest />
    </React.Fragment>
  );
};

export default GetQuote;
