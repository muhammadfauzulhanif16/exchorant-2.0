import React from "react";
import { Helmet } from "react-helmet";
import { NavBar } from "../common";
import { Hero } from "../common/Hero";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Exchorant | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <NavBar />
      <Hero />
    </div>
  );
};
