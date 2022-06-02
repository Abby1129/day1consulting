import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Footer />
    </>
  );
}

export default App;
