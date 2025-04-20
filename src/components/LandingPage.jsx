import React from "react";
import Img from "../assets/Bike.png";
import { BsArrowUpRightCircle } from "react-icons/bs";

const LandingPage = () => {
  return (
    <div className="text-white px-4 py-6 mb-20">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={Img}
          alt="Bike"
          className="rounded-3xl w-full md:w-[90vw] lg:w-[200vh] h-[90vh] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 mt-6 px-4 lg:pr-10">
        {/* Left Side */}
        <div className="flex flex-col gap-4 w-full ">
          <p className="text-4xl md:text-6xl lg:text-7xl font-semibold">
            ABOUT &nbsp; US
          </p>
          <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition px-4 py-2 rounded-full text-sm w-fit cursor-pointer">
            READ MORE <BsArrowUpRightCircle size={18} className="ml-10" />
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 text-sm md:text-base leading-relaxed">
          <p className="text-lg uppercase">
            We are a team of passionate storytellers and skilled creators
            dedicated to producing exceptional commercial content. With a shared
            commitment to quality and innovation, we specialize in crafting
            compelling visuals that connect brands with their audiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
