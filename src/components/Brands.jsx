import React from "react";
import Img from "../assets/brands.png";

const Brands = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="flex justify-center items-center">
        <img
          src={Img}
          alt="Brands"
          className="w-full max-w-[1200px] h-auto object-contain px-4"
        />
      </div>
    </div>
  );
};

export default Brands;
