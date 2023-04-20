import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";




const App = () => (
  <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/services" element={<SpecialMenu />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<FindUs />} />
    </Routes>
    <Footer/>
  </div>
);
export default App;
