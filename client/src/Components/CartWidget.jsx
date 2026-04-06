import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { ShoppingCart, X } from "lucide-react";

export default function CartWidget() {
  const { cartItems, totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Cart Icon Button */}
      <button onClick={() => setOpen((o) => !o)} className="relative p-2">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-12 w-[340px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-black"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Items */}
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400 py-6 text-sm">
              Your cart is empty
            </p>
          ) : (
            <div className="space-y-4 mb-4 max-h-[260px] overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="bg-green-800 rounded-lg w-20 h-20 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-[70px] object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-green-700 font-semibold text-sm leading-snug line-clamp-2">
                      {item.name}
                    </p>
                    <p className="text-black font-bold text-sm mt-1">
                      {item.qty} x{" "}
                      <span className="font-normal text-gray-500">Rs</span>{" "}
                      <span className="font-bold">{item.price * item.qty}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <>
              <hr className="border-gray-100 mb-3" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Items
              </p>

              {/* Checkout */}
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/checkout");
                }}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg text-sm transition-colors mb-2"
              >
                Checkout
              </button>

              {/* View All */}
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/cart");
                }}
                className="w-full border border-green-700 text-green-700 hover:bg-green-50 font-semibold py-3 rounded-lg text-sm transition-colors"
              >
                View All
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
