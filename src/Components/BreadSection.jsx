import { ChevronRight } from "lucide-react";
import React from "react";

const breads = [
  {
    id: 1,
    title: "Plain Bread (per 100g)",
    image:
      "https://www.gofoods.pk/static/media/Plain-Bread.be4133cdf947a7b4b165.png",
    nutrition: [
      "296.00 kcal | Energy",
      "2.40% | Fat",
      "61.10% | Carbohydrates",
      "1.10% | Fiber",
      "7.50% | Protein",
      "3.57% | Sugar",
      "305.44mg | Sodium",
      "1.25% | Ash",
    ],
  },
  {
    id: 2,
    title: "Bran Bread (per 100g)",
    image:
      "https://www.gofoods.pk/static/media/Bran-Bread.794493780dcddf6d5f6e.png",
    nutrition: [
      "296.00 kcal | Energy",
      "2.40% | Fat",
      "61.10% | Carbohydrates",
      "1.10% | Fiber",
      "7.50% | Protein",
      "3.57% | Sugar",
      "305.44mg | Sodium",
      "1.25% | Ash",
    ],
  },
  {
    id: 3,
    title: "Milky Bread (per 100g)",
    image:
      "https://www.gofoods.pk/static/media/Milky-Bread.2f98582fbcd2e54f4773.png",
    nutrition: [
      "296.00 kcal | Energy",
      "2.40% | Fat",
      "61.10% | Carbohydrates",
      "1.10% | Fiber",
      "7.50% | Protein",
      "3.57% | Sugar",
      "305.44mg | Sodium",
      "1.25% | Ash",
    ],
  },
];

export default function BreadSection() {
  return (
    <div
      className="w-full bg-cover bg-center py-16 px-4 sm:px-6 lg:px-12"
      style={{
        backgroundImage:
          "url('https://www.gofoods.pk/static/media/Bread%20BG.2cd16d1cbcf95bdb66f1.png')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">
          BREADS
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-700 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
          Our breads are full of nutritious value and have well-blended taste.
          We produce these quality products under the supervision of highly
          qualified experts at a world-class manufacturing facility.
        </p>

        {/* List */}
        {/* <ul className="mt-6 text-left max-w-md mx-auto list-disc list-inside text-gray-800">
          <li>Plain Bread</li>
          <li>Bran Bread</li>
          <li>Milky Bread</li>
        </ul> */}

        {/* Nutrition Heading */}
        <h3 className="mt-12 text-2xl sm:text-3xl font-bold text-green-800">
          NUTRITIONAL FACTS
        </h3>

        {/* Bread Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {breads.map((bread) => (
            <div
              key={bread.id}
              className="relative group flex flex-col items-center"
            >
              {/* Title */}
              <p className="mb-4 font-semibold text-green-700">{bread.title}</p>

              {/* Image */}
              <img src={bread.image} alt={bread.title} className="w-full" />

              {/* Hover Card (only if nutrition exists) */}
              {bread.nutrition && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="bg-green-100 border border-green-400 rounded-xl shadow-lg p-4 text-left w-64">
                    <ul className="text-sm text-gray-800 space-y-1">
                      {bread.nutrition.map((item, index) => (
                        <li key={index}>
                          <ChevronRight className="inline-block mr-2" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
