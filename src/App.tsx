import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import {
  Home,
  About,
  Contact,
  Dish,
  SignIn,
  SignUp,
  DishDetail,
  Favourite,
} from "./components/pages";
import { Header } from "./components/common/Header";
import { Routes, Route } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="favourite" element={<Favourite />} />
      <Route path="dish" element={<Dish />} />
      <Route path="dish/:id" element={<DishDetail />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Routes>
  </ChakraProvider>
);
