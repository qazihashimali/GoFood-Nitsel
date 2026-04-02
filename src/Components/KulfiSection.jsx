export default function KulfiSection() {
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
        <h2 className="text-3xl md:text-5xl font-bold text-green-800">KULFI</h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Encapsulating the age-old taste and traditions, Go Foods Kulfi is made
          in a controlled environment with pure ingredients so you can enjoy,
          guilt free.
        </p>

        {/* Nutrition Heading */}
        <h3 className="mt-10 text-2xl md:text-4xl font-bold text-green-800">
          NUTRITIONAL FACTS
        </h3>
        <p className="text-green-700 text-sm mt-1">(Per 1 Tbsp)</p>

        {/* Image */}
        <div className="mt-12 flex justify-center">
          <img
            src="https://www.gofoods.pk/static/media/Kulfi.e4420007d32a522703b8.png"
            alt="kulfi"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
