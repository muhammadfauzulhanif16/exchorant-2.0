import { Home } from "./components/pages/Home";
import { NavBar } from "./components/NavBar";
import React from "react";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-white user-select-none">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
