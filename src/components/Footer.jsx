import React from "react";
import Img from "../assets/Last.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white py-20 px-4 w-full h-auto mb-96"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className=" ml-28 p-4 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-widest">
          Let us Bring Your <br /> Vision to Life
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl  uppercase tracking-widest">
          Whether you're launching a brand, telling a powerful story, or
          building awareness — our crew is ready to make it unforgettable. From
          concept to cut, we're your creative partner every step of the way.
        </p>
        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition px-4 py-2 rounded-full text-sm w-fit cursor-pointer mt-10">
          LET'S TALK <BsArrowUpRightCircle size={18} className="ml-10" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
