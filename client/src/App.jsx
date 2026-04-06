import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import GoFoodsFooter from "./Components/Gofoodsfooter";
import Products from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";
import StoreLocator from "./Pages/StoreLocator";
import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";
import Loader from "./Components/Loader";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/Ordersuccess";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // small smooth delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading && <Loader />}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/locator" element={<StoreLocator />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <GoFoodsFooter />
    </div>
  );
};

export default App;
