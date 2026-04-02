export default function GoFoodsFooter() {
  return (
    <footer
      style={{ backgroundColor: "#d4edbb" }}
      className="w-full border-t border-green-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://www.gofoods.pk/static/media/logo.4831ebf2ac928e3e01ce.png"
            alt="GoFoods Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center">
          © Copyright 2026 | All Rights Reserved | gofoods
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a
            href="#"
            className="hover:text-green-800 transition-colors duration-150 whitespace-nowrap"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-green-800 transition-colors duration-150 whitespace-nowrap"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="hover:text-green-800 transition-colors duration-150 whitespace-nowrap"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
