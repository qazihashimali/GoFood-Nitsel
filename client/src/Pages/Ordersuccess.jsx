import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Check, Clock } from "lucide-react";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // const orderId = `GF-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      {/* Animated checkmark circle */}
      <div
        className={`transition-all duration-700 ease-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <div className="relative w-28 h-28 mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-green-100" />
          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full border-4 border-green-200" />
          {/* Inner filled circle */}
          <div className="absolute inset-4 rounded-full bg-green-800 flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div
        className={`text-center transition-all duration-700 delay-200 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">
          Order Confirmed
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Thank you for your order!
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-sm mx-auto leading-relaxed mb-2">
          Your order has been placed successfully. We'll have it delivered to
          you soon.
        </p>

        {/* Order ID pill */}
        {/* <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2 mt-4 mb-8">
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            Order ID
          </span>
          <span className="text-sm font-bold text-gray-800">{orderId}</span>
        </div> */}

        {/* Delivery timing card */}
        <div className="border border-gray-100 rounded-xl px-6 py-5 max-w-xs mx-auto mb-10 bg-gray-50">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-green-700" />

            <p className="text-xs font-bold uppercase tracking-widest text-gray-700">
              Delivery Timing
            </p>
          </div>
          <p className="text-sm text-gray-600 text-center">
            10AM – 01PM &nbsp;|&nbsp; 02PM – 05PM
          </p>
          <p className="text-xs text-gray-400 italic text-center mt-1">
            *Only delivering in specific areas of Lahore
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate("/shop")}
            className="bg-green-800 hover:bg-green-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded transition-colors"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/")}
            className="border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-800 text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Bottom brand mark */}
      <div
        className={`mt-16 transition-all duration-700 delay-500 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-xs text-gray-300 uppercase tracking-widest">
          GO Foods · Delivering Fresh
        </p>
      </div>
    </div>
  );
}
