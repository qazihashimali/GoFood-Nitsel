import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CITIES = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Sahiwal",
];

const steps = [
  {
    label: "Billing Details",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    ),
  },
  {
    label: "Order Summary",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
      </svg>
    ),
  },
  {
    label: "Payment Method",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V10h16v8zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-700 bg-white placeholder-gray-400";
const labelClass = "block text-sm text-gray-700 mb-1";
const errorClass = "text-red-500 text-xs mt-1";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(0); // 0: Billing, 1: Order Summary, 2: Payment

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    streetAddress2: "",
    city: "Lahore",
    phone: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [subscribe, setSubscribe] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validateBilling = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.streetAddress.trim()) e.streetAddress = "Required";
    if (!form.city) e.city = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    return e;
  };

  const handleNextBilling = () => {
    const e = validateBilling();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      setFormError("Enter all required details.");
      return;
    }
    setFormError("");
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Replace handlePlaceOrder in Checkout.jsx with this:

  const handlePlaceOrder = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            streetAddress: form.streetAddress,
            streetAddress2: form.streetAddress2,
            city: form.city,
          },
          items: cartItems.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            qty: item.qty,
            image: item.image,
          })),
          subtotal: totalPrice,
          delivery: 0,
          total: totalPrice,
          notes: form.notes,
          paymentMethod,
          subscribe,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Failed to place order. Please try again.");
        return;
      }

      clearCart();
      navigate("/order-success");
    } catch (err) {
      console.error("Order error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full pt-8 md:pt-0">
      {/* Banner */}
      <div className="w-full mt-10">
        <img
          src="https://www.gofoods.pk/static/media/Checkout-Banner-Final.ee52af5bcb01fb71f79a.png"
          alt="Checkout Banner"
          className="w-full h-auto block"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-32">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    i <= step
                      ? "bg-green-800 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {s.icon}
                </div>
                <span
                  className={`text-xs whitespace-nowrap ${
                    i <= step ? "text-gray-800 font-medium" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-px w-16 sm:w-24 mb-5 mx-1 transition-colors ${
                    i < step ? "bg-green-800" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── STEP 0: Billing Details ── */}
        {step === 0 && (
          <div>
            <p className="text-sm text-gray-600 mb-6">
              Returning customer?{" "}
              <span className="text-green-700 font-medium cursor-pointer hover:underline">
                Click here to login
              </span>
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-sm bg-green-800 flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800">
                Billing details
              </h2>
            </div>

            {/* First / Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className={labelClass}>
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.firstName && (
                  <p className={errorClass}>{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className={labelClass}>
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.lastName && (
                  <p className={errorClass}>{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Street Address */}
            <div className="mb-5">
              <label className={labelClass}>
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                name="streetAddress"
                value={form.streetAddress}
                onChange={handleChange}
                placeholder="House number and street name"
                className={inputClass}
              />
              {errors.streetAddress && (
                <p className={errorClass}>{errors.streetAddress}</p>
              )}
            </div>

            <div className="mb-5">
              <input
                name="streetAddress2"
                value={form.streetAddress2}
                onChange={handleChange}
                placeholder="Apartment, suite, unit, etc. (optional)"
                className={inputClass}
              />
            </div>

            {/* City */}
            <div className="mb-5">
              <label className={labelClass}>
                Town / City <span className="text-red-500">*</span>
              </label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className={inputClass}
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.city && <p className={errorClass}>{errors.city}</p>}
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className={labelClass}>
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className={labelClass}>
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            {/* Additional Info */}
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-5">
              Additional information
            </h3>

            <div className="mb-8">
              <label className={labelClass}>Order notes</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Notes about your order, eg. special notes for delivery."
                rows={6}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Footer actions */}
            <div className="flex items-center justify-between">
              <p className="text-red-500 text-sm italic">{formError}</p>
              <button
                onClick={handleNextBilling}
                className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-600 text-sm font-semibold px-6 py-3 rounded transition-colors"
              >
                Next Order Summary
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 1: Order Summary ── */}
        {step === 1 && (
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-7 h-7 rounded-sm bg-green-800 flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800">
                Order Summary
              </h2>
            </div>

            {/* Subscription */}
            <div className="border border-gray-200 rounded mb-0">
              <div className="px-5 py-4 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-3">
                  Subscription
                </p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                    className="w-4 h-4 accent-green-700"
                  />
                  <span className="text-sm text-gray-700">
                    Subscribe for regular orders
                  </span>
                </label>
              </div>

              {/* Products header */}
              <div className="px-5 py-3 border-b border-gray-200 flex justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  Product
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  Subtotal
                </span>
              </div>

              {/* Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="px-5 py-4 border-b border-gray-200 flex items-center gap-4"
                >
                  <div className="w-24 h-20 bg-green-900 rounded flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <span className="flex-1 text-sm font-semibold text-gray-800">
                    {item.name} x {item.qty}
                  </span>
                  <span className="text-sm text-gray-700">
                    Rs {item.price * item.qty}
                  </span>
                </div>
              ))}

              {/* Subtotal */}
              <div className="px-5 py-3 border-b border-gray-200 flex justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  Subtotal
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  RS {totalPrice}
                </span>
              </div>

              {/* Delivery */}
              <div className="px-5 py-3 border-b border-gray-200 flex justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  Delivery
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  RS 0
                </span>
              </div>

              {/* Total */}
              <div className="px-5 py-3 flex justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  Total
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  RS {totalPrice}
                </span>
              </div>
            </div>

            {/* Footer actions */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => {
                  setStep(0);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 border border-gray-300 text-green-800 text-sm font-semibold px-6 py-3 rounded hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back Billing Details
              </button>
              <button
                onClick={() => {
                  setStep(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white text-sm font-semibold px-6 py-3 rounded transition-colors"
              >
                Next Payment Method
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Payment Method ── */}
        {step === 2 && (
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-7 h-7 rounded-sm bg-green-800 flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V10h16v8zm0-10H4V6h16v2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-800">
                Billing Method
              </h2>
            </div>

            <div className="border border-gray-200 rounded">
              {/* Cash on Delivery */}
              <div className="px-5 py-4 border-b border-gray-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="w-4 h-4 accent-green-700"
                  />
                  <span className="text-sm font-semibold text-gray-800">
                    Cash on delivery
                  </span>
                </label>
                <p className="text-sm text-gray-600 mt-1 ml-7">
                  Pay with cash upon delivery.
                </p>
              </div>

              {/* Pay with Card */}
              <div className="px-5 py-4 border-b border-gray-200">
                <p className="text-sm text-gray-700 mb-2">
                  Login Required{" "}
                  <span className="text-green-700 font-medium cursor-pointer hover:underline">
                    (Click to Login)
                  </span>
                </p>
                <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    disabled
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-500">Pay with Card</span>
                </label>
                <p className="text-sm text-gray-600 mt-1 ml-7">
                  Pay securely with your card online. (0 Delivery Charges)
                </p>
              </div>

              {/* Privacy note */}
              <div className="px-5 py-4 border-b border-gray-200">
                <p className="text-sm text-gray-700">
                  Your personal data will be used to process your order, and
                  support your experience throughout this website.
                </p>
              </div>

              {/* Delivery timing */}
              <div className="px-5 py-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Delivery Timing:</span>{" "}
                  10AM-01PM, 02PM-05PM
                </p>
                <p className="text-sm text-gray-500 italic mt-1">
                  *Only delivering in specific areas of Lahore and Sahiwal
                </p>
              </div>
            </div>

            {/* Place Order */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-green-800 hover:bg-green-900 text-white text-sm font-bold uppercase tracking-widest py-4 rounded mt-6 transition-colors"
            >
              Place Order
            </button>

            {/* Back */}
            <div className="flex mt-6">
              <button
                onClick={() => {
                  setStep(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 border border-gray-300 text-green-800 text-sm font-semibold px-6 py-3 rounded hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back Order Summary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
