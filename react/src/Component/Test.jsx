import React from "react";
import { Link } from "react-router-dom";
const Test = () => {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="about"> about </Link>
        <Link to="contact"> contact </Link>
        <Link to="service"> Service </Link>
        <Link to="price"> Price </Link>
        <Link to="blog"> Blog </Link>
        <Link to="quote"> GET A Quote </Link>
      </nav>
    </>
  );
};

export default Test;
