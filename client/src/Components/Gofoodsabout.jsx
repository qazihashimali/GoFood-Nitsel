export default function GoFoodsAbout() {
  return (
    <div className="w-full mt-10">
      {/* Banner Image */}
      <div className="w-full">
        <img
          src="https://www.gofoods.pk/static/media/About-Us-Banner.44840500ce6932a69ad3.jpg"
          alt="About Us Banner"
          className="w-full h-auto block"
        />
      </div>

      {/* About Content */}
      <div className="w-full bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2
            className="text-3xl font-black mb-8 tracking-wide"
            style={{
              color: "#1a5c2e",
            }}
          >
            ABOUT
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <p>
              <span className="font-bold" style={{ color: "#1a5c2e" }}>
                GO Foods
              </span>{" "}
              is an enterprising and rapidly growing food company that was
              established in 2021 with the primary aim to enhance customers'
              experience and contribute towards their healthy lifestyle by
              offering them premium quality, best in taste and wholesome grocery
              products.
            </p>

            <p>
              In a short span of time, GO Foods has developed a sound reputation
              of meeting the trust and expectations of our customers by
              fulfilling their nutritional and dietary needs.
            </p>

            <p>
              We, at GO Foods, are committed to ensure the satisfaction of our
              valued customers through maintaining the highest standards in
              production, processing and packaging of our products.
            </p>

            <p>
              GO Foods commenced its business operations with the introduction
              of free-range eggs in the market. Currently our product range
              includes free-range eggs, bread and milk; food products that are
              hugely beneficial for our diet because of their high nutritional
              value and freshness.
            </p>

            <p>
              We maintain our quality through strict adherence to clearly
              defined standards and regular inspection of our farms and
              manufacturing facility. We remain steadfast to maintain the same
              principles for our upcoming products, including grocery products
              that we plan to introduce soon with the aim to be ranked among the
              leading companies in Pakistan's food sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
