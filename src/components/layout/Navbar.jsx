import React from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "react-scroll";
import useNavbar from "../../hooks/useNavbar";

const navLinks = [
  { name: "Beranda", to: "home" },
  { name: "Mempelai", to: "couple" },
  { name: "Acara", to: "event" },
  { name: "Galeri", to: "gallery" },
  { name: "Konfirmasi", to: "rsvp" },
];

const Navbar = () => {
  const { isOpen, scrolled, toggleMenu, closeMenu } = useNavbar();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer font-serif text-2xl font-bold text-sage-900"
        >
          <Heart
            className={`w-6 h-6 ${scrolled ? "text-gold-500" : "text-white"}`}
            fill={scrolled ? "currentColor" : "none"}
          />
          <span className={scrolled ? "text-sage-900" : "text-white"}>
            R<span className="text-gold-500">&</span>J
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-gold-500 font-medium"
              className={`cursor-pointer hover:text-gold-500 transition-colors ${
                scrolled ? "text-sage-700" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Tombol Menu Mobile */}
        <button className="md:hidden text-sage-900" onClick={toggleMenu}>
          {isOpen ? (
            <X className={scrolled ? "text-sage-900" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-sage-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 md:hidden">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="text-sage-700 text-lg hover:text-gold-500 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
