import { useState, useMemo, useEffect } from "react";
// import products from "../assets/products";
import ProductCard from "../Components/ProductCard";

export default function Shop() {
  const [sortBy, setSortBy] = useState("default");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
        const data = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = useMemo(() => {
    const list = products ? [...products] : [];
    if (sortBy === "price-asc") return list.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") return list.sort((a, b) => b.price - a.price);
    if (sortBy === "name-asc")
      return list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name-desc")
      return list.sort((a, b) => b.name.localeCompare(a.name));
    return list; // default
  }, [sortBy, products]);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="w-full mt-15">
        <img
          src="https://www.gofoods.pk/static/media/SHOP%20BANNER.3fa9b42213910607b1c1.jpg"
          alt="Shop Banner"
          className="w-full h-auto block"
        />
      </div>

      {/* Sort Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-end items-center gap-3">
        <label className="text-black font-semibold text-sm">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 bg-white min-w-[200px] focus:outline-none focus:ring-1 focus:ring-green-700 cursor-pointer"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
