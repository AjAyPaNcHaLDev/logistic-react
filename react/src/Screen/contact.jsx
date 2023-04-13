import React from "react";

import Header from "../Component/Header";
import NavBar from "../Component/Navbar2";

import Topbar from "../Component/Topbar";
import AboutStart from "../Component/AboutStart";
import { Helmet } from "react-helmet";
import Team from "../Component/Team";
import { ContactHeader } from "../Component/Header";
import VideoModal from "../Component/VideoModal";
import Footer from "../Component/Footer";
import { ContactStart } from "../Component/ContactStart";
const contact = () => {
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
      <ContactHeader />
      <ContactStart />
      <Team />
    </React.Fragment>
  );
};

export default contact;
