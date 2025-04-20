import React from "react";
import logo from "../assets/tnp.png";

const Navbar = () => {
  return (
    <div className="bg-[#212121] w-full text-white px-4 py-3 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="w-[120px]">
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-auto object-contain lg:ml-10 md:m-auto"
        />
      </div>

      {/* Nav Links */}
      <div className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center md:gap-8 lg:gap-18 text-center">
          <li className="hover:text-gray-300 cursor-pointer transition text-lg md:text-xl lg:text-2xl px-5 py-2 rounded-full bg-violet-500">
            HOME
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition text-lg md:text-xl lg:text-2xl">
            ABOUT US
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition text-lg md:text-xl lg:text-2xl">
            OUR WORK
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition text-lg md:text-xl lg:text-2xl lg:mr-10">
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
