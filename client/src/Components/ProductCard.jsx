import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const cardBg = hovered ? "#1a4d2e" : "#e8ebe6";
  const nameColor = hovered ? "#ffffff" : "#1a4d2e";
  const priceColor = hovered ? "#ffffff" : "#1a4d2e";
  const rsColor = hovered ? "#a3d9a5" : "#444444";

  const clipPath = `polygon(
    0% 0%,
    50% 0%,
    100% 50%,
    100% 100%,
    0% 100%
  )`;

  const handleClick = () => {
    // navigate(`/product/${product.id}`);
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      className="relative flex pt-24 sm:pt-32 md:pt-36"
      onClick={handleClick}
    >
      {/* Floating Image */}
      <div className="absolute left-0 right-0 flex justify-center items-end z-10 pointer-events-none top-[-10px] sm:top-[-20px] h-[140px] sm:h-[180px] md:h-[210px]">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain rounded-3xl transition-transform duration-300"
          style={{
            maxHeight: "100%",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
          draggable={false}
        />
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full cursor-pointer"
        style={{
          backgroundColor: cardBg,
          clipPath,
          borderRadius: "14px",
          padding: "70px 12px 18px 12px",
          transition: "background-color 0.3s ease",
        }}
      >
        <h3
          className="font-bold text-xs sm:text-sm md:text-lg uppercase leading-snug mb-2 tracking-wide"
          style={{ color: nameColor }}
        >
          {product.name}
        </h3>

        <p>
          <span
            className="text-xs sm:text-sm mr-0.5"
            style={{ color: rsColor }}
          >
            Rs
          </span>
          <span
            className="text-sm sm:text-base md:text-lg font-semibold"
            style={{ color: priceColor }}
          >
            {product.price}
          </span>
        </p>
      </div>
    </div>
  );
}
