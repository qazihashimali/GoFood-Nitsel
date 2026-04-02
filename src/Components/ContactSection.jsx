import React from "react";

export default function ContactSection() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 mb-10 tracking-wide">
        CONTACT US
      </h2>

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Phone Number: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="+92"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your e-mail Address: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="address@mail.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message: <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded-md shadow-md transition-all duration-200"
            >
              CONTACT
            </button>
          </div>
        </form>
      </div>

      {/* Footer Text */}
      <p className="text-center mt-6 text-sm text-gray-700">
        Contact us at{" "}
        <span className="text-green-700 font-medium">info@gofoods.pk</span>
      </p>
    </div>
  );
}
