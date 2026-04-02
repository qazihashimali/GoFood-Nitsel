import React from "react";
import ContactSection from "../Components/ContactSection";
import EggsSection from "../Components/EggsSection";
import ButterSection from "../Components/ButterSection";
import YogurtSection from "../Components/YougurtSection";
import KulfiSection from "../Components/KulfiSection";
import MilkSection from "../Components/MilkSection";
import ProductSection from "../Components/ProductSection";
import BreadSection from "../Components/BreadSection";

const Products = () => {
  return (
    <>
      <ProductSection />
      <BreadSection />
      <EggsSection />
      <MilkSection />
      <YogurtSection />
      <ButterSection />
      <KulfiSection />
      <ContactSection />
    </>
  );
};

export default Products;
