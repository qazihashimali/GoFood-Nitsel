import { XIcon } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateQty, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="w-full pt-8 md:pt-0">
      {/* Banner */}
      <div className="w-full mt-10">
        <img
          src="https://www.gofoods.pk/static/media/Cart%20Banner.4811420da78f8723ecad.jpg"
          alt="Cart Banner"
          className="w-full h-auto block"
        />
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 text-gray-400 py-[30vh]">
          <p className="text-xl font-semibold">Your cart is empty</p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-green-700 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-green-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-32">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* LEFT — Shopping Bag */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-normal text-gray-900 mb-5">
                Shopping bag
              </h2>

              <div className="border border-gray-200 rounded overflow-hidden">
                {/* Sticky header */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 bg-white">
                      <th className="w-8"></th>
                      <th className="py-3 px-4 text-left text-xs font-bold uppercase tracking-widest text-gray-900">
                        Product
                      </th>
                      <th className="py-3 px-4 text-center text-xs font-bold uppercase tracking-widest text-gray-900">
                        Price
                      </th>
                      <th className="py-3 px-4 text-center text-xs font-bold uppercase tracking-widest text-gray-900">
                        Quantity
                      </th>
                      <th className="py-3 px-4 text-center text-xs font-bold uppercase tracking-widest text-gray-900">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                </table>

                {/* Scrollable body */}
                <div className="overflow-y-auto max-h-[420px]">
                  <table className="w-full border-collapse">
                    <tbody>
                      {cartItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-200 last:border-b-0"
                        >
                          {/* Remove */}
                          <td className="pl-3 pr-0 py-5 w-8">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-gray-600 cursor-pointer text-xl leading-none transition-colors"
                              aria-label="Remove item"
                            >
                              <XIcon size={16} />
                            </button>
                          </td>

                          {/* Product */}
                          <td className="px-4 py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-28 h-24 bg-green-900 rounded flex items-center justify-center shrink-0 overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="max-h-20 max-w-full object-contain"
                                />
                              </div>
                              <span className="text-sm font-semibold text-green-700 leading-snug">
                                {item.name}
                              </span>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="px-4 py-5 text-center text-sm text-gray-600">
                            {item.price}
                          </td>

                          {/* Quantity */}
                          <td className="px-4 py-5 text-center">
                            <div className="inline-flex items-center gap-3 border border-gray-300 rounded px-3 py-1.5">
                              <button
                                onClick={() => updateQty(item.id, item.qty - 1)}
                                className="text-gray-600 hover:text-black text-lg leading-none transition-colors"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="text-sm font-bold w-4 text-center text-gray-900">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => updateQty(item.id, item.qty + 1)}
                                className="text-gray-600 hover:text-black text-lg leading-none transition-colors"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          {/* Subtotal */}
                          <td className="px-4 py-5 text-center text-sm font-semibold text-gray-900">
                            Rs {item.price * item.qty}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RIGHT — Cart Totals (sticky) */}
            <div className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
              <h2 className="text-2xl font-normal text-gray-900 mb-5">
                Cart Totals
              </h2>

              <div className="border border-gray-200 rounded p-5">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                    Subtotal
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    Rs {totalPrice}
                  </span>
                </div>

                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                    Delivery
                  </span>
                  <span className="text-sm text-gray-500 italic">
                    (On Checkout)
                  </span>
                </div>

                <hr className="border-gray-200 mb-4" />

                <div className="flex justify-between items-baseline mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                    Total
                  </span>
                  <span className="text-sm font-bold uppercase text-gray-900">
                    (On Checkout)
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-green-700 hover:bg-green-800 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded transition-colors"
                >
                  Proceed to Checkout
                </button>

                <div className="mt-5 text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold">Delivery Timing:</span>{" "}
                  10AM-01PM, 02PM-05PM
                  <br />
                  <span className="italic text-gray-500">
                    *Only delivering in specific areas of Lahore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
