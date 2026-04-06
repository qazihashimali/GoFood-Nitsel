export default function ButterSection() {
  return (
    <section className="w-full bg-[#d4e8c2] px-6 sm:px-10 lg:px-16 py-12">
      {/* ── PAGE TITLE ── */}
      <h1
        className="text-center text-green-900 font-extrabold uppercase tracking-widest mb-3"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
        }}
      >
        Butter
      </h1>

      {/* ── SUBTITLE ── */}
      <p className="text-center text-green-950 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
        Made with the absolute best quality milk, Go Foods Butter, holds the
        promise of creaminess with nutrition that is only made possible with our
        world-class facility.
      </p>

      {/* ── NUTRITIONAL FACTS HEADING ── */}
      <div className="text-center mb-8">
        <h2
          className="text-green-900 font-extrabold uppercase tracking-widest"
          style={{
            fontSize: "clamp(1.3rem, 3vw, 2rem)",
          }}
        >
          Nutritional Facts
        </h2>
        <p className="text-green-800 text-sm mt-1">(Per 1 Tbsp)</p>
      </div>

      {/* ── FULL BUTTER INFOGRAPHIC IMAGE ── */}
      <div className="flex justify-center">
        <img
          src="https://www.gofoods.pk/static/media/Butter.01ed7266e2d718bbe0f0.png"
          alt="Butter Nutritional Facts - Unsalted and Salted"
          className="w-full"
        />
      </div>
    </section>
  );
}
