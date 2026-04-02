export default function GoFoodsObjectivePromise() {
  return (
    <section className="w-full" style={{ backgroundColor: "#d4edbb" }}>
      {/* OUR OBJECTIVE — left text, right arrow image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "320px" }}
      >
        {/* Background arrow image — right side */}
        <div className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center opacity-60 pointer-events-none">
          <img
            src="http://gofoods.pk/static/media/Objective_Icon.8e8e7a34d43fb06e24b3.png"
            alt=""
            className="w-full h-full object-contain object-right"
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-16">
          <div className="max-w-xl">
            <h2
              className="text-3xl sm:text-4xl font-black mb-6 uppercase tracking-wide"
              style={{
                color: "#1a5c2e",
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              Our Objective
            </h2>
            <p className="text-gray-800 text-base leading-relaxed">
              We have entered the business with the aim to create a niche in the
              market by enhancing our range of high quality and wholesome food
              products and establishing a sturdy supply chain from farm to
              market; thereby making our products accessible to our customers
              across Pakistan.
            </p>
          </div>
        </div>
      </div>

      {/* OUR PROMISE — right text, left handshake image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "320px" }}
      >
        {/* Background handshake image — left side */}
        <div className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center opacity-60 pointer-events-none">
          <img
            src="https://www.gofoods.pk/static/media/OurPromise_Icon.ec21d355341e67d1e698.png"
            alt=""
            className="w-full h-full object-contain object-left"
          />
        </div>

        {/* Text content — pushed to right */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 lg:px-20 py-16 flex justify-end">
          <div className="max-w-xl">
            <h2
              className="text-3xl sm:text-4xl font-black mb-6 uppercase tracking-wide"
              style={{
                color: "#1a5c2e",
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              Our Promise
            </h2>
            <p className="text-gray-800 text-base leading-relaxed">
              To make GO Foods a household staple by continuously anticipating
              and fulfilling customer's nutritional needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
