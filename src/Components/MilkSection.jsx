import React from "react";

const MilkSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Image (not overpowering) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-80"
        style={{
          backgroundImage:
            "url('https://www.gofoods.pk/static/media/Milk%20BG.4adf8a03ec382d7f6b9b.png')",
        }}
      />

      {/* Container (IMPORTANT for spacing) */}
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-green-800">MILK</h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Our pasteurised and homogenised milk comes from one the finest breeds
          of Australian cows. This full cream milk is complete with nutrients
          and is proceed in a world-class manufacturing facility.
        </p>

        {/* Nutrition Heading */}
        <h3 className="mt-10 text-2xl md:text-4xl font-bold text-green-800">
          NUTRITIONAL FACTS
        </h3>
        <p className="text-green-700 text-sm mt-1">(Per 200ml)</p>

        {/* Image */}
        <div className="mt-12 flex justify-center">
          <img
            src="https://www.gofoods.pk/static/media/milk_des.85ef25d52f92d587a29c.png"
            alt="kulfi"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MilkSection;
