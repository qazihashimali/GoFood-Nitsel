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
    image:
      "https://res.cloudinary.com/drkicrttn/image/upload/v1775191793/bread_gys9bm.png",
  },
  {
    id: 5,
    name: "GO FOODS BREAD BRAIN STANDARD",
    price: 130,
    image:
      "https://res.cloudinary.com/drkicrttn/image/upload/v1775192922/bread_brain_eohg1i.png",
  },
  {
    id: 6,
    name: "GO FOODS  BREAD MILKY STANDARD",
    price: 110,
    image:
      "https://res.cloudinary.com/drkicrttn/image/upload/v1775193272/bread_milky_rdyuy4.png",
  },
  {
    id: 7,
    name: "GO FOODS BREAD CLASSIC LARGE",
    price: 200,
    image: "https://api.gofoods.pk/uploads/products/1w6d3igl74jqrka",
  },
  {
    id: 8,
    name: "GO FOODS BREAD MILKY LARGE",
    price: 200,
    image: "https://api.gofoods.pk/uploads/products/1w6d3igl74jsep2",
  },
  {
    id: 9,
    name: "GO FOODS BUTTER WHITE 500 GRAMS",
    price: 1400,
    image: "https://api.gofoods.pk/uploads/products/1cyof2bjlksa5shn",
  },
  {
    id: 10,
    name: "GO FOODS KULFI",
    price: 70,
    image: "https://api.gofoods.pk/uploads/products/1cyo1hhablecto9o7",
  },
  {
    id: 11,
    name: "GO FOODS DESI GHEE 450 GRAMS",
    price: 1500,
    image: "https://api.gofoods.pk/uploads/products/1cyo1tu0jlrhkj26i",
  },
  {
    id: 12,
    name: "GO FOODS DESI GHEE 900 GRAMS",
    price: 3000,
    image: "https://api.gofoods.pk/uploads/products/1cyo1tu0jlrhkkhq6",
  },
  {
    id: 13,
    name: "GO FOODS YOGURT 450 GRAMS",
    price: 195,
    image:
      "https://res.cloudinary.com/drkicrttn/image/upload/v1775194501/yogurt_fmaolb.png",
  },
  {
    id: 14,
    name: "GO FOODS BUTTER SALTED 100 GRAMS",
    price: 320,
    image:
      "https://res.cloudinary.com/drkicrttn/image/upload/v1775194711/butter_salted_l7taf1.png",
  },
  {
    id: 15,
    name: "GO FOODS BUTTER SALTED 200 GRAMS",
    price: 580,
    image:
      "https://res.cloudinary.com/drkicrttn/image/upload/v1775194711/butter_salted_l7taf1.png",
  },
  {
    id: 16,
    name: "GO FOODS EGGS CLASSIC 6 PCS",
    price: 185,
    image: "https://api.gofoods.pk/uploads/products/1cyojkhllamisb87",
  },
  {
    id: 17,
    name: "GO FOODS EGGS CLASSIC 12 PCS",
    price: 360,
    image: "https://api.gofoods.pk/uploads/products/1cyojkhllamisb87",
  },
  {
    id: 18,
    name: "GO FOODS EGGS DESI 6 PCS",
    price: 250,
    image: "https://api.gofoods.pk/uploads/products/1cyo1tu0jlrhknthj",
  },
  {
    id: 19,
    name: "GO FOODS EGGS DESi 12 PCS",
    price: 490,
    image: "https://api.gofoods.pk/uploads/products/1w6d3igl74j7wv7",
  },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

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

  return (
    <div className="relative flex pt-24 sm:pt-32 md:pt-36">
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
          padding: "70px 12px 18px 12px", // smaller mobile padding
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

export default function GoFoodsProducts() {
  return (
    <section className="w-full bg-[#daefcf] py-10 px-6 sm:px-10 lg:px-16">
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
