import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import GoFoodsFooter from "./Components/Gofoodsfooter";
import Products from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";
import StoreLocator from "./Pages/StoreLocator";
import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/locator" element={<StoreLocator />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <GoFoodsFooter />
    </div>
  );
};

export default App;
