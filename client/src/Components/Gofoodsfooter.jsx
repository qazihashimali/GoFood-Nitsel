export default function GoFoodsFooter() {
  return (
    <footer
      style={{ backgroundColor: "#d4edbb" }}
      className="w-full border-t border-green-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://www.gofoods.pk/static/media/logo.4831ebf2ac928e3e01ce.png"
            alt="GoFoods Logo"
            className="h-14 sm:h-16 md:h-20 w-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-600 text-center">
          © Copyright 2026 | All Rights Reserved | gofoods
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <a
            href="#"
            className="hover:text-green-800 transition-colors duration-150"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-green-800 transition-colors duration-150"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="hover:text-green-800 transition-colors duration-150"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
