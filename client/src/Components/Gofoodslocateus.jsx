import { useEffect, useRef } from "react";

// Lahore outlet locations
const locations = [
  {
    name: "CHAUBURJI",
    address:
      "GO Petrol Pump COCO 16, Opposite Chauburji Quarters, Multan Road, Lahore",
    lat: 31.5433,
    lng: 74.3146,
  },
  {
    name: "ADA PLOT",
    address: "GO Petrol Pump, Ada Plot, Main Raiwind Road, Lahore",
    lat: 31.4697,
    lng: 74.3436,
  },
  {
    name: "PINE AVENUE",
    address: "Pine Ave, Wocland Villas, Lahore, Punjab",
    lat: 31.5204,
    lng: 74.3587,
  },
  {
    name: "DHA PHASE 5",
    address: "Main Boulevard DHA Phase 5, Lahore, Punjab",
    lat: 31.4826,
    lng: 74.3976,
  },
];

export default function GoFoodsLocateUs() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Dynamically load Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Dynamically load Leaflet JS
    const loadLeaflet = () => {
      return new Promise((resolve) => {
        if (window.L) return resolve(window.L);
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => resolve(window.L);
        document.head.appendChild(script);
      });
    };

    loadLeaflet().then((L) => {
      if (mapInstanceRef.current) return; // already initialized

      const map = L.map(mapRef.current, {
        center: [31.5, 74.35],
        zoom: 11,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // Free OpenStreetMap tiles — no API key needed
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Custom green marker icon
      const greenIcon = L.divIcon({
        className: "",
        html: `<div style="
          width: 32px; height: 32px;
          background: #1a5c2e;
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -36],
      });

      // Add markers with popups
      locations.forEach((loc) => {
        const popup = `
          <div style="min-width: 180px;">
            <strong style="color: #1a5c2e; font-size: 14px;">${loc.name}</strong>
            <p style="color: #555; font-size: 12px; margin: 6px 0 8px;">${loc.address}</p>
            <a
              href="https://www.google.com/maps?q=${loc.lat},${loc.lng}"
              target="_blank"
              style="
                display: inline-block;
                background: #1a5c2e;
                color: white;
                font-size: 12px;
                font-weight: 600;
                padding: 5px 12px;
                border-radius: 6px;
                text-decoration: none;
              "
            >Get Directions</a>
          </div>
        `;
        L.marker([loc.lat, loc.lng], { icon: greenIcon })
          .addTo(map)
          .bindPopup(popup);
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-3xl font-black text-center mb-8 uppercase tracking-wide"
          style={{
            color: "#1a5c2e",
          }}
        >
          LOCATE US
        </h2>

        {/* Map Container */}
        <div
          ref={mapRef}
          className="w-full rounded-xl overflow-hidden border border-gray-200"
          style={{ height: "500px" }}
        />
      </div>
    </section>
  );
}
