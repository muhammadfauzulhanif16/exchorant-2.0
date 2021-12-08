import { Hero } from "../Section/Home/Hero";
import { Dish } from "../Section/Home/Dish";
import { About } from "../Section/Home/About";
import { Team } from "../Section/Home/Team";
import { Feature } from "../Section/Home/Feature";
import { CTA } from "../Section/Home/CTA";

export const Home = () => {
  return (
    <>
      <Hero />
      <Dish />
      <About />
      <Team />
      <Feature />
      <CTA />
    </>
  );
};
