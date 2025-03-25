import React from "react";
import Logo from "../assets/images/logoHDM.png";
import Facebook from "../assets/images/facebook.png";
import Insta from "../assets/images/instagram.png";

const Footer = () => {

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className="m-20">
      <div className="flex flex-row gap-x-100">
        <div>
          <img src={Logo} alt="Logo" className="w-32 h-30" />
          <h4 className="text-2xl font-medium pt-3 pb-3">Head office</h4>
          <p>No. 275 Naibawa Central Park, Zaria Road Kano State Nigeria</p>
          <h4 className="text-2xl font-medium pt-3 pb-3">Other branches</h4>
          <li>No. 20 U/Uku Motor Park Zaria Road Kano State</li>
          <li>
            Mariri Motor Park Maiduguri Road, Opposite Yan itace Kano State
          </li>
          <li>No. 1C kofar Ruwa Market, Kano State</li>
          <li>Kofar Wambai Motor Park, Kano State</li>
          <li>Kabuga, By Muhammadu Buhari Way Kano State</li>
          
          {/* <li>Gwammaja, Aminu Kano Way Maryam Way, Kano State</li>
          <li>
            No. 8 Sabon Titi Yanrake Opposite China GSM Village, Kano State
          </li>
          <li>Kubwa Expressway, Abuja FCT</li>
          <li>No. G5 AY Ahmed Building, Ahmadu Bello Way, Kaduna State</li>
          <li>Funtua BCG Katsina Road, Katsina</li>
          <li>Jimeta/Airport Road, Adamawa State</li>
          <li>PZ Commercial Area, Gombe State</li>
          <li>Water Board Quarters Murtala MUhammad Way, Bauchi State</li> */}
          <p className="pl-5 pt-3">And many more accross Nigeria</p>
        </div>

        <div className="flex flex-row pt-5 gap-x-20">
          <div>
            <h3 className="text-2xl font-medium">Quick Links</h3>
            <div className="pt-5 space-y-5">
              <ul>Home</ul>
              <ul>About Us</ul>
              <ul>Contact Us</ul>
              <ul>Products</ul>
              <ul>Services</ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium">Connect With Us</h3>
            <div className="flex flex-col gap-y-5">
              <a
                href="https://www.facebook.com/share/16MTPwjxtB/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="facebook-logo" className="w-10 h-10" />
              </a>
              <a href="https://www.instagram.com/hamisudantinki?igsh=MThhcmNuZ3Z1eXdneQ==" target="-blank" rel="noopener npreferrer">
              <img src={Insta} alt="instagram-logo" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-black-200 pt-10 pb-10"></div>
      <div>
      <div className="text-left text-black-600 pt-5">
        © {getCurrentYear()} Hamisu Dantinki Motors LTD. All rights reserved.
      </div>
      </div>
    </div>
  );
};

export default Footer;
