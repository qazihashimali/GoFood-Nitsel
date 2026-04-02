export default function EggsSection() {
  return (
    <section className="w-full bg-[#d4e8c2] min-h-screen px-6 sm:px-10 lg:px-16 py-12">
      {/* ── PAGE TITLE ── */}
      <h1
        className="text-center text-green-900 font-extrabold uppercase tracking-widest mb-10"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontFamily: "Georgia, serif",
        }}
      >
        Eggs
      </h1>

      {/* ── DESI EGGS SECTION ── */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
        {/* Text */}
        <div className="flex-1 max-w-2xl">
          <h2
            className="text-green-900 font-extrabold uppercase mb-3"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontFamily: "Georgia, serif",
            }}
          >
            Desi Eggs (Free-Range)
          </h2>
          <p className="text-green-950 text-sm sm:text-base leading-relaxed">
            For our desi eggs, which are free-range eggs, we only select chicks
            with healthy characteristics from domestic hens. These chicks are
            then raised to pullet age and provided an open &amp; green
            environment to lay free-range eggs. Nutritional value of these
            free-range eggs far exceeds from desi eggs that are commonly
            available in the market.
          </p>
        </div>

        {/* Egg image — top right */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
          <img
            src="https://www.gofoods.pk/static/media/Desi%20Eggs2.a607c531644c1bdb30b2.png"
            alt="Desi Free-Range Eggs"
            className="w-64 sm:w-72 lg:w-80 xl:w-96 object-contain drop-shadow-lg"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        </div>
      </div>

      {/* ── NUTRITIONAL FACTS ── */}
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
        <p className="text-green-800 text-sm mt-1">(Desi Eggs)</p>
      </div>

      {/* Nutritional infographic image */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl">
          <img
            src="https://www.gofoods.pk/static/media/egg_des.cb242945a2c8dbc4c9ef.png"
            alt="Nutritional Facts Infographic"
            className="w-full"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        </div>
      </div>
    </section>
  );
}
