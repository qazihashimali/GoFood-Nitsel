const supplySteps = [
  "Australian cows nurtured at GO farms",
  "Automated milking process",
  "Pasteurised & homogenised milk",
  "Aseptic packs for protection against harmful bacteria",
  "Delivered to a GO store near you",
  "Full cream milk in every glass",
];

export default function GoFoodsFarms() {
  return (
    <section className="w-full bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-black mb-6 uppercase tracking-wide"
          style={{
            color: "#1a5c2e",
          }}
        >
          GO FARMS
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed mb-14 max-w-4xl mx-auto">
          Our farmers at GO farms employ advanced technology and work in a
          hygienic environment to deliver best quality livestock, poultry, milk
          and organic eggs. Our products are not just superior in taste, but
          also fulfill the cooking and nutritional needs of a household. Our
          farms are situated at Bahawalnagar, Punjab.
        </p>

        {/* Supply Chain Heading */}
        <h3
          className="text-3xl font-black mb-8 uppercase tracking-wide"
          style={{
            color: "#1a5c2e",
          }}
        >
          SUPPLY CHAIN OF FULL CREAM MILK
        </h3>

        {/* Supply Chain Image */}
        <div className="w-full mb-6">
          <img
            src="https://www.gofoods.pk/static/media/Supply-Chain-Of-Full-Cream-Milk.7502107afa3cffdcd521.png"
            alt="Supply Chain of Full Cream Milk"
            className="w-full h-auto block mx-auto"
          />
        </div>

        {/* Step Labels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2">
          {supplySteps.map((step, i) => (
            <p
              key={i}
              className="text-gray-700 text-xs sm:text-sm leading-relaxed text-center px-2"
            >
              {step}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
