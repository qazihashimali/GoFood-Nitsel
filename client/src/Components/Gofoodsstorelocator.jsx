import { useState } from "react";

const cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi"];

const outlets = {
  Lahore: [
    {
      id: 1,
      name: "CHAUBURJI",
      address:
        "GO PETROL PUMP COCO 16, OPPOSITE CHAUBURJI QUARTERS OLD VENUS CINEMA HALL MULTAN ROAD CHAUBURJI LAHORE.",
      lat: 31.5433,
      lng: 74.3146,
    },
    {
      id: 2,
      name: "ADA PLOT",
      address: "GO PETROL PUMP, ADA PLOT MAIN RAIWIND ROAD, LAHORE.",
      lat: 31.4697,
      lng: 74.3436,
    },
    {
      id: 3,
      name: "PINE AVENUE",
      address: "Pine Ave, Wocland Villas, Lahore, Punjab.",
      lat: 31.5204,
      lng: 74.3587,
    },
    {
      id: 4,
      name: "DHA PHASE 5",
      address: "Main Boulevard DHA Phase 5, Lahore, Punjab.",
      lat: 31.4826,
      lng: 74.3976,
    },
  ],
  Karachi: [],
  Islamabad: [],
  Rawalpindi: [],
};

function OutletCard({ outlet }) {
  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps?q=${outlet.lat},${outlet.lng}`,
      "_blank"
    );
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between p-6"
      style={{ minHeight: "200px" }}
    >
      <div>
        <h3
          className="text-base font-black mb-3 uppercase tracking-wide"
          style={{
            color: "#1a5c2e",
          }}
        >
          {outlet.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {outlet.address}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="flex items-center gap-1.5 text-sm text-gray-600">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
          Active
        </span>
        <button
          onClick={handleDirections}
          className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: "#1a5c2e" }}
        >
          Get Directions
        </button>
      </div>
    </div>
  );
}

export default function GoFoodsStoreLocator() {
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const currentOutlets = outlets[selectedCity] || [];

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full mt-10">
        <img
          src="https://www.gofoods.pk/static/media/Store-Locator-Banner.211c015ab49d786f9e0b.jpg"
          alt="Store Locator Banner"
          className="w-full h-auto block"
        />
      </div>

      {/* Content */}
      <div className="w-full bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2
            className="text-3xl font-black text-center mb-8 uppercase tracking-wide"
            style={{
              color: "#1a5c2e",
            }}
          >
            OUR OUTLETS
          </h2>

          {/* Dropdown */}
          <div className="flex justify-end mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Outlets at:
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
                style={{ minWidth: "200px" }}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Outlet Cards */}
          {currentOutlets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentOutlets.map((outlet) => (
                <OutletCard key={outlet.id} outlet={outlet} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 text-sm py-16">
              No outlets available in {selectedCity} yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
