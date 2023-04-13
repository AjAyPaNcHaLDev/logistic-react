import React, { useEffect } from "react";
import Header from "../Component/Header";
import NavBar from "../Component/Navbar2";

import Topbar from "../Component/Topbar";
import AboutStart from "../Component/AboutStart";
import { Helmet } from "react-helmet";
import Team from "../Component/Team";
import { AboutHeader } from "../Component/Header";
import VideoModal from "../Component/VideoModal";
import Footer from "../Component/Footer";
import Test from "../Component/Test";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About-{}</title>
        <meta name="description" content="Logistics Services About us" />
        <meta
          name="keywords"
          content="Logistic,transport,Logistics Services,
         Faster Logistic Service Provider, Best Logistic Services,
         transport,transport Services, Faster transport Service Provider, Best transport Services"
        />
        <meta name="author" content="ajay panchal" />
      </Helmet>
      <AboutHeader />
      <AboutStart />
      <VideoModal />
      <Team />
    </React.Fragment>
  );
};

export default AboutPage;
