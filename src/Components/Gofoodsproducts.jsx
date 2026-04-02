import { useState } from "react";

const products = [
  {
    id: 1,
    name: "GO FOODS MILK 500 ML",
    price: 150,
    image: "https://api.gofoods.pk/uploads/products/1cyozyn5ln8pzves",
  },
  {
    id: 2,
    name: "MILKWISE RAW MILK 1 LITRE",
    price: 230,
    image: "https://api.gofoods.pk/uploads/products/1cyo151nclnimtmqp",
  },
  {
    id: 3,
    name: "GO FOODS MILK 1 LITRE",
    price: 295,
    image: "https://api.gofoods.pk/uploads/products/1cyozyn5ln8pzves",
  },
  {
    id: 4,
    name: "GO FOODS BREAD CLASSIC STANDARD",
    price: 110,
    image: "https://api.gofoods.pk/uploads/products/1cyo1tu0jlrhpinq9",
  },
  {
    id: 5,
    name: "GO FOODS MILKY BREAD",
    price: 130,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Milky+Bread",
  },
  {
    id: 6,
    name: "GO FOODS BROWN BREAD",
    price: 145,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Brown+Bread",
  },
  {
    id: 7,
    name: "GO FOODS YOGURT 500G",
    price: 180,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Yogurt+500g",
  },
  {
    id: 8,
    name: "GO FOODS YOGURT 1KG",
    price: 320,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Yogurt+1kg",
  },
  {
    id: 9,
    name: "GO FOODS EGGS TRAY 30",
    price: 750,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Eggs+Tray",
  },
  {
    id: 10,
    name: "GO FOODS EGGS HALF TRAY",
    price: 390,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Eggs+Half",
  },
  {
    id: 11,
    name: "GO FOODS BUTTER 200G",
    price: 260,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Butter+200g",
  },
  {
    id: 12,
    name: "GO FOODS CREAM 200ML",
    price: 210,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Cream+200ml",
  },
  {
    id: 13,
    name: "GO FOODS KULFI MIX",
    price: 95,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Kulfi+Mix",
  },
  {
    id: 14,
    name: "MILKWISE FULL CREAM 2L",
    price: 430,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Milkwise+2L",
  },
  {
    id: 15,
    name: "GO FOODS CHEESE SLICE 200G",
    price: 380,
    image: "https://api.gofoods.pk/uploads/products/1cyof2bjlksa5shn",
  },
  {
    id: 16,
    name: "GO FOODS LASSI 250ML",
    price: 80,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Lassi+250ml",
  },
  {
    id: 17,
    name: "GO FOODS DAHI 1KG",
    price: 290,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Dahi+1kg",
  },
  {
    id: 18,
    name: "GO FOODS BREAD SANDWICH",
    price: 125,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Sandwich+Bread",
  },
  {
    id: 19,
    name: "GO FOODS FLAVOURED MILK",
    price: 120,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Flavoured+Milk",
  },
  {
    id: 20,
    name: "GO FOODS MILK POWDER 400G",
    price: 850,
    image: "https://placehold.co/200x120/ffffff/2d6a4f?text=Milk+Powder",
  },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  const cardBg = hovered ? "#1a4d2e" : "#e8ebe6";
  const nameColor = hovered ? "#ffffff" : "#1a4d2e";
  const priceColor = hovered ? "#ffffff" : "#1a4d2e";
  const rsColor = hovered ? "#a3d9a5" : "#444444";

  // Cut goes from 50% across the top edge to 50% down the right edge = half the box cut
  const clipPath = `polygon(
    0% 0%,
    50% 0%,
    100% 50%,
    100% 100%,
    0% 100%
  )`;

  return (
    <div className="relative" style={{ paddingTop: "140px" }}>
      {/* Floating product image — above the card */}
      <div
        className="absolute left-0 right-0 flex justify-center items-end z-10 pointer-events-none"
        style={{ top: -25, height: "210px" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-contain rounded-3xl"
          style={{
            maxHeight: "200px",
            width: "auto",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
          draggable={false}
        />
      </div>

      {/* The card with half-cut top-right corner */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full cursor-pointer"
        style={{
          backgroundColor: cardBg,
          clipPath,
          borderRadius: "14px",
          padding: "60px 20px 24px 20px",
          transition: "background-color 0.3s ease",
        }}
      >
        <h3
          className="font-extrabold text-sm uppercase leading-snug mb-2 tracking-wide"
          style={{
            color: nameColor,
            fontFamily: "'Arial Black', 'Arial', sans-serif",
            transition: "color 0.3s ease",
          }}
        >
          {product.name}
        </h3>
        <p style={{ transition: "color 0.3s ease" }}>
          <span
            className="text-sm font-normal mr-0.5"
            style={{ color: rsColor, transition: "color 0.3s ease" }}
          >
            Rs
          </span>
          <span
            className="text-xl font-black"
            style={{ color: priceColor, transition: "color 0.3s ease" }}
          >
            {product.price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function GoFoodsProducts() {
  return (
    <section
      className="w-full py-10 px-6 sm:px-10 lg:px-16"
      style={{ backgroundColor: "#c8e6b0" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-14">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
