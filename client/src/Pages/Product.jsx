import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import products from "../assets/products";
import RelatedProducts from "../Components/RelatedProducts";
import { useCart } from "../Context/CartContext";

export default function Product() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const [product, setProduct] = useState(null);
  const fetchProduct = async () => {
    if (!id) return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`
      );

      const data = await response.json();

      setProduct(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // const product = products.find((p) => p._id === id);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <>
      {/* Product Detail Section */}
      <div className="max-w-5xl mx-auto px-6 py-10 mt-30">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="bg-[#f0f0f0] rounded-xl flex items-center justify-center p-12 min-h-[480px]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[400px] object-contain w-full"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-0">
            <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-black mb-4 leading-snug">
              {product.name}
            </h1>

            <p className="text-2xl font-bold text-black mb-7">
              <span className="text-xl font-semibold">Rs </span>
              {product.price}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-7">
              <div className="flex items-center gap-5 border border-gray-300 rounded-md px-4 py-2.5">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="text-xl text-gray-500 hover:text-black leading-none"
                >
                  −
                </button>
                <span className="text-base font-semibold text-black min-w-4  text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="text-xl text-gray-500 hover:text-black leading-none"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, qty)}
                className="bg-[#1a5e35] hover:bg-[#154d2b] text-white font-semibold px-7 py-3 rounded-md text-sm tracking-wide transition-colors"
              >
                Add To Cart
              </button>
            </div>

            <hr className="border-gray-200 mb-5" />

            {/* Category */}
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold uppercase tracking-widest text-black text-xs">
                Category
              </span>
              <span className="text-gray-500">
                {product.category?.categoryName || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products — full width below */}
      <RelatedProducts currentId={product._id} category={product.category} />
    </>
  );
}
