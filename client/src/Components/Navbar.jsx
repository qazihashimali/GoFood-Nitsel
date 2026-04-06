import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CartWidget from "./CartWidget";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Store Locator", href: "/locator" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const GoFoodsLogo = () => (
  <Link to="/" className="flex items-center select-none">
    <img
      src="https://www.gofoods.pk/static/media/logo.4831ebf2ac928e3e01ce.png"
      alt="Go Foods Logo"
      width={150}
      height={60}
      className="object-contain"
    />
  </Link>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="shrink-0">
              <GoFoodsLogo />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  className={`px-3 py-2 text-xs font-medium transition-colors duration-150 rounded-sm
                  ${
                    location.pathname === link.href
                      ? "text-gray-900 underline underline-offset-4 decoration-2 decoration-gray-800"
                      : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Shop Button */}
              <Link
                to="/shop"
                className="flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold text-sm px-4 py-1.5 rounded-full transition-all duration-200"
              >
                <ShoppingCart size={16} strokeWidth={2.5} />
                Shop
              </Link>

              {/* User Icon */}
              <button className="p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-colors duration-150">
                <User size={20} strokeWidth={1.75} />
              </button>

              {/* Cart Icon with badge */}
              <button className="relative p-2 text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full transition-colors duration-150">
                <CartWidget />
              </button>
            </div>

            {/* Mobile: cart + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button className="relative p-2 text-gray-600 hover:text-green-700 rounded-full transition-colors">
                <CartWidget />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                  ${
                    link.active
                      ? "bg-green-50 text-green-800 font-semibold"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Shop + Account */}
            <div className="pt-2 border-t border-gray-100 flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 font-semibold text-sm px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200"
              >
                <ShoppingCart size={15} strokeWidth={2.5} />
                Shop
              </a>
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-medium text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200">
                <User size={15} strokeWidth={1.75} />
                Account
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
