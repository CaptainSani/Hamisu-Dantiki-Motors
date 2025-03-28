import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/logoHDM.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Close menu when user scrolls
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]); // Dependency ensures it updates when menu is open

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50"
          : "relative"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4 md:px-10">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-32 h-24 pl-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10 pr-10">
          <Link to="/about-us" className="hover:text-orange-500 transition">
            About Us
          </Link>
          <Link to="/products" className="hover:text-orange-500 transition">
            Products
          </Link>
          <Link to="/services" className="hover:text-orange-500 transition">
            Services
          </Link>
          <Link to="/contact-us">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger & Close Icon) */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close Button (Inside Menu) */}
        <div className="flex justify-end p-4">
          <button
            className="text-gray-700 hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-6 text-center mt-4">
          <Link to="/about-us" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/products" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/services" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/contact-us" onClick={() => setIsOpen(false)}>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
