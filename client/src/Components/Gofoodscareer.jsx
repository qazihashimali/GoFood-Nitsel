import { useState, useRef } from "react";

const roles = [
  "Sales Executive",
  "Marketing Officer",
  "Supply Chain Executive",
  "Quality Assurance Officer",
  "HR Executive",
  "Finance Officer",
  "Store Manager",
  "Driver / Delivery Staff",
];

const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
];

export default function GoFoodsCareer() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
    city: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.role) newErrors.role = "Please select a role";
    if (!form.city) newErrors.city = "Please select a city";
    if (!cvFile) newErrors.cv = "Please attach your CV";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white placeholder-gray-400";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full mt-10">
        <img
          src="https://www.gofoods.pk/static/media/Career-Banner.1085b5a8755dcdb1f4c5.png"
          alt="Career Banner"
          className="w-full h-auto block"
        />
      </div>

      {/* YOUR FUTURE ON THE GO */}
      <div className="w-full bg-white py-12 px-6 text-center">
        <h2
          className="text-3xl font-black mb-5 uppercase tracking-wide"
          style={{
            color: "#1a5c2e",
          }}
        >
          YOUR FUTURE ON THE GO
        </h2>
        <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-2">
          Providing rewarding career opportunities by recognising capabilities
          of potential candidates that are to offer their skills at GO Foods.
        </p>
        <p className="font-bold text-sm" style={{ color: "#1a5c2e" }}>
          Be a part of something good!
        </p>
      </div>

      {/* Transform Your Future — leaf as CSS background on the left */}
      <div
        className="w-full bg-white pb-16"
        style={{
          backgroundImage:
            "url('https://www.gofoods.pk/static/media/Leaf.ac21243dd3d0273773a2.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
          backgroundSize: "680px auto",
        }}
      >
        <div className="relative max-w-3xl mx-auto px-6">
          {/* Transform heading */}
          <h3
            className="text-2xl font-black text-center mb-10 uppercase tracking-wide pt-10"
            style={{
              color: "#1a5c2e",
            }}
          >
            TRANSFORM YOUR FUTURE WITH US
          </h3>

          {/* Apply Here heading */}
          <h4
            className="text-2xl font-black text-center mb-8 uppercase tracking-wide"
            style={{
              color: "#1a5c2e",
            }}
          >
            APPLY HERE
          </h4>

          {/* Form */}
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h5 className="text-xl font-bold text-green-700 mb-2">
                Application Submitted!
              </h5>
              <p className="text-gray-500 text-sm">
                Thank you for applying. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
              {/* Full Name */}
              <div className="mb-5">
                <label className={labelClass}>
                  Full Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className={inputClass}
                />
                {errors.fullName && (
                  <p className={errorClass}>{errors.fullName}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className={labelClass}>
                  Phone Number: <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92"
                  className={inputClass}
                />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className={labelClass}>
                  Your e-mail Address: <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="address@mail.com"
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              {/* Role + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelClass}>
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value=""></option>
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.role && <p className={errorClass}>{errors.role}</p>}
                </div>
                <div>
                  <label className={labelClass}>
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value=""></option>
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.city && <p className={errorClass}>{errors.city}</p>}
                </div>
              </div>

              {/* Attach CV + Submit */}
              <div className="flex items-center justify-end gap-3 mt-6">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    setCvFile(e.target.files[0]);
                    setErrors({ ...errors, cv: "" });
                  }}
                />
                <div className="flex flex-col items-end">
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#1a5c2e" }}
                  >
                    {cvFile ? `✓ ${cvFile.name.slice(0, 20)}...` : "ATTACH CV"}
                  </button>
                  {errors.cv && <p className={errorClass}>{errors.cv}</p>}
                </div>
                <button
                  onClick={handleSubmit}
                  className="text-sm font-bold px-6 py-2.5 rounded-lg border transition-all"
                  style={{
                    backgroundColor: "#e5e7eb",
                    color: "#6b7280",
                    borderColor: "#d1d5db",
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          )}

          {/* Email note */}
          <p className="text-center text-sm text-gray-500 mt-6">
            You can also email at{" "}
            <a
              href="mailto:hr@gofoods.pk"
              className="font-semibold"
              style={{ color: "#1a5c2e" }}
            >
              hr@gofoods.pk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
