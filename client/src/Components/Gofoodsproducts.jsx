// import axios from "axios";
// import products from "../assets/products";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function GoFoodsProducts() {
  const [products, setProducts] = useState([]);
  const fetchAllProduct = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`
      );

      const data = await response.json();

      console.log("Products:", data);

      setProducts(data.data); // ✅ FIXED
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <section className="w-full bg-[#daefcf] py-10 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-14">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
