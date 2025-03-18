import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logoHDM.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50'
          : 'relative'
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4 md:px-10">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="w-32 h-24 pl-10" />
          </Link>
        </div>

        <div className="flex items-center space-x-10 pr-10">
          <Link to="/about-us">
            <button className="transition duration-300 hover:text-orange-500 hover:scale-105">
              About Us
            </button>
          </Link>

          <Link to="/products">
            <button className="transition duration-300 hover:text-orange-500 hover:scale-105">
              Products
            </button>
          </Link>

          <Link to="/services">
            <button className="transition duration-300 hover:text-orange-500 hover:scale-105">
              Services
            </button>
          </Link>

          <Link to="/contact">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 hover:scale-105 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
