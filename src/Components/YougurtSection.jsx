export default function YogurtSection() {
  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 py-12">
      <div className="relative max-w-6xl mx-auto">
        {/* Spoon — enlarged */}
        <div className="hidden lg:block absolute top-30 right-0 w-96 xl:w-96 pointer-events-none z-10">
          <img
            src="https://www.gofoods.pk/static/media/YogurtSpoon.76e951055d94455c6e42.png"
            alt="Yogurt on a Spoon"
            className="w-full object-contain"
          />
        </div>

        {/* Title */}
        <h1
          className="text-center text-green-900 font-extrabold uppercase tracking-widest mb-5"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontFamily: "Georgia, serif",
          }}
        >
          Yogurt
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Made from our farm fresh milk, Go Foods Yogurt, gives the authentic
          and refreshing taste and texture of farm fresh yogurt.
          <br />
          Filled with nutrients and prepared in a state-of-the-art facility.
        </p>

        {/* Nutritional heading */}
        <div className="text-center mb-8">
          <h2
            className="text-green-900 font-extrabold uppercase tracking-widest"
            style={{
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontFamily: "Georgia, serif",
            }}
          >
            Nutritional Facts
          </h2>
          <p className="text-green-700 text-sm font-semibold mt-1">
            (Per 100g serving)
          </p>
        </div>

        {/* Spoon — mobile */}
        <div className="block lg:hidden w-72 mx-auto mb-6">
          <img
            src="https://www.gofoods.pk/static/media/YogurtSpoon.76e951055d94455c6e42.png"
            alt="Yogurt on a Spoon"
            className="w-full object-contain"
          />
        </div>

        {/* Infographic — slightly reduced */}
        <div className="w-full max-w-3xl mx-auto">
          <img
            src="https://www.gofoods.pk/static/media/YogurtDescription.5fb81470233321ff7c1d.png"
            alt="Yogurt Nutritional Facts Infographic"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
