import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
