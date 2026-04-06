import { useParams } from "react-router-dom";
// import products from "../assets/products";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function RelatedProducts({ currentId }) {
  const { id } = useParams();

  // const currentProduct = products.find((p) => p.id === Number(id));

  // let related = products.filter(
  //   (p) =>
  //     p.id !== currentProduct?.id && p.category === currentProduct?.category
  // );

  // if (currentId) {
  //   related = related.slice(0, 4);
  // }

  // if (!related.length) return null;
  const [products, setProducts] = useState([]);

  // fetch all products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`
      );
      const data = await response.json();
      setProducts(data.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // find current product
  const currentProduct = products.find((p) => p._id === id);

  // filter related products
  let related = products.filter(
    (p) =>
      p._id !== currentProduct?._id &&
      p.category.categoryName === currentProduct?.category.categoryName
  );

  if (currentId) {
    related = related.slice(0, 4);
  }

  if (!related.length) return null;

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold uppercase text-center text-black mb-10 tracking-tight">
        Related Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {related.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
