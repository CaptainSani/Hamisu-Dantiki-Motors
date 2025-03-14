import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logoHDM.png';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-10 px-2 sm:px-4 md:px-10">
      <div>
        <Link to="/">
        <img src={Logo} alt="logo" className="w-40 h-32 pl-20 pt-5" />
        </Link>
      </div>

      <div className="flex items-center space-x-20 pr-20">
        <Link to="/about-us">
          <button className="transition duration-300 hover:text-orange-500 hover:scale-105">About Us</button>
        </Link>

        <Link to="/products">
          <button className="transition duration-300 hover:text-orange-500 hover:scale-105">Products</button>
        </Link>

        <Link to="/services">
          <button className="transition duration-300 hover:text-orange-500 hover:scale-105">Services</button>
        </Link>

        <Link to="/contact">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
