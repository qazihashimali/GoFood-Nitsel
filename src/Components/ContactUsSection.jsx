import { useState } from "react";

export default function ContactUsSection() {
  const [anytime, setAnytime] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [callbackForm, setCallbackForm] = useState({
    name: "",
    phone: "",
    date: "04/02/2026",
    time: "05:34 PM",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const inputBase =
    "w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-600 bg-white placeholder-gray-400 text-sm";

  const labelBase = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="w-full mt-10">
        <img
          src="https://www.gofoods.pk/static/media/Contact%20Us%20Banner.9bf99444e80607be5189.jpg"
          alt="Contact Banner"
          className="w-full h-auto block"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* 🔥 Separator Line */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-px bg-gray-300"></div>

          {/* LEFT - CONTACT FORM */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h2
              className="text-2xl font-black uppercase tracking-wide mb-6"
              style={{
                color: "#1a5c2e",
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              CONTACT US
            </h2>

            <div className="space-y-5">
              <div>
                <label className={labelBase}>
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className={inputBase}
                />
              </div>

              <div>
                <label className={labelBase}>
                  Your Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+92"
                  value={contactForm.phone}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, phone: e.target.value })
                  }
                  className={inputBase}
                />
              </div>

              <div>
                <label className={labelBase}>
                  Your e-mail Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="address@mail.com"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  className={inputBase}
                />
              </div>

              <div>
                <label className={labelBase}>
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Message"
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      message: e.target.value,
                    })
                  }
                  className={`${inputBase} resize-none`}
                />
              </div>

              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-200">
                CONTACT
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* CALLBACK */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <h2
                className="text-2xl font-black uppercase tracking-wide mb-6"
                style={{
                  color: "#1a5c2e",
                  fontFamily: "'Arial Black', Arial, sans-serif",
                }}
              >
                CALLBACK
              </h2>

              <div className="space-y-5">
                <div>
                  <label className={labelBase}>
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={callbackForm.name}
                    onChange={(e) =>
                      setCallbackForm({
                        ...callbackForm,
                        name: e.target.value,
                      })
                    }
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className={labelBase}>
                    Your Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+92"
                    value={callbackForm.phone}
                    onChange={(e) =>
                      setCallbackForm({
                        ...callbackForm,
                        phone: e.target.value,
                      })
                    }
                    className={inputBase}
                  />
                </div>

                {/* Anytime */}
                <label className="flex items-center gap-2 text-sm font-medium text-green-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={anytime}
                    onChange={() => setAnytime(!anytime)}
                    className="accent-green-700"
                  />
                  Anytime
                </label>

                {!anytime && (
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={callbackForm.date}
                      onChange={(e) =>
                        setCallbackForm({
                          ...callbackForm,
                          date: e.target.value,
                        })
                      }
                      className={inputBase}
                    />
                    <input
                      type="text"
                      value={callbackForm.time}
                      onChange={(e) =>
                        setCallbackForm({
                          ...callbackForm,
                          time: e.target.value,
                        })
                      }
                      className={inputBase}
                    />
                  </div>
                )}

                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-200">
                  CALL ME
                </button>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              <h2
                className="text-lg font-black uppercase tracking-wide mb-5"
                style={{
                  color: "#1a5c2e",
                  fontFamily: "'Arial Black', Arial, sans-serif",
                }}
              >
                SUBSCRIBE TO OUR NEWS LETTER
              </h2>

              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="address@mail.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={inputBase}
                />
                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-200 whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
