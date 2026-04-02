import React from "react";
import GoFoodsHero from "../Components/Gofoodshero";
import GoFoodsProducts from "../Components/Gofoodsproducts";
import ContactSection from "../Components/ContactSection";
import OrderBanner from "../Components/OrderBanner";

const Home = () => {
  return (
    <>
      <GoFoodsHero />
      <GoFoodsProducts />
      <OrderBanner />
      <ContactSection />
    </>
  );
};

export default Home;
