import { Hero } from "./Hero";
import { Dish } from "./Dish";
import { Service } from "./Service";
import { Testimonial } from "./Testimonial";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box bg="gray.50">
      <Hero />
      <Dish />
      <Service />
      <Testimonial />
    </Box>
  );
};
