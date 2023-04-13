import React, { useState } from "react";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/css/style.css";
import LandingPage from "./Screen/LandingPage";
import ServicePage from "./Screen/ServicePage";
import Price from "./Screen/price";
import Contact from "./Screen/contact";
import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Screen/AboutPage";
import GetQuote from "./Screen/GetQuote";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <LandingPage />,
    },

    {
      path: "service",
      element: <ServicePage />,
    },
    {
      path: "price",
      element: <Price />,
    },
    {
      path: "blog",
      element: <LandingPage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "quote",
      element: <GetQuote />,
    },
  ]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Helmet</title>
        <meta name="description" content="Logistics Services Tracking Id" />
        <meta
          name="keywords"
          content="Logistic,transport,Logistics Services,
         Faster Logistic Service Provider, Best Logistic Services,
         transport,transport Services, Faster transport Service Provider, Best transport Services"
        />
        <meta name="author" content="ajay panchal" />
      </Helmet>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;

{
  /* <Router>
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="service" element={<ServicePage />} />
  <Route path="price" element={<Price />} />
  <Route path="blog" element={<AboutPage />} />
  <Route path="about" element={<AboutPage />} />
  <Route path="contact" element={<Contact />} />
  <Route path="quote" element={<QuoteRequest />} />
</Routes>
</Router> */
}

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <ServicePage />,
    children: [
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "blog",
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "quote",
        element: <GetQuote />,
      },
    ],
  },
]);
