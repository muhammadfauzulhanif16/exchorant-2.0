import React from "react";
import { Helmet } from "react-helmet";
import { NavBar } from "../common/NavBar";
import { Hero } from "../common/Hero";

export const Home = () => {
  return (
    <div className="bg-light text-black">
      <Helmet>
        <title>Exchorant | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <NavBar />
      <Hero />
    </div>
  );
};
