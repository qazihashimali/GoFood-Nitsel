import React from "react";

const products = [
  {
    id: 1,
    title: "BAKERY",
    image:
      "https://www.gofoods.pk/static/media/Breads.fadc52ef068f70c29baf.png",
  },
  {
    id: 2,
    title: "DAIRY",
    image:
      "https://www.gofoods.pk/static/media/Dairy2.9e6f9dfd431a2bf1b691.png",
  },
  {
    id: 3,
    title: "EGGS",
    image: "https://www.gofoods.pk/static/media/Eggs.b7b642ce4f811d14affc.png",
  },
];

export default function ProductSection() {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full mt-10">
        <img
          src="https://www.gofoods.pk/static/media/Product-Banner.e96f2950518466360482.png" // replace with your banner
          alt="Products Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Products */}
      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center text-center">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {/* Product Image */}
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-green-700 font-semibold text-lg sm:text-xl tracking-wide">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
