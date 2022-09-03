import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Galerie from "./pages/Galerie";
import Home from "./pages/Home";
import Tarifs from "./pages/Tarifs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/tarif" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
