import React from "react";
import Img from "../assets/ourVision.png";

const OurVision = () => {
  return (
    <div className="mt-20 text-white px-4 max-w-7xl mx-auto mb-20">
      <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 lg:h-[500px]">
        {/* Left - Text */}
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Our Vision
          </h1>
          <p className="uppercase lg:text-2xl sm:text-base leading-tight">
            Partner with brands seeking to transform ideas into powerful visual
            stories. We strive to push the boundaries of creativity, blending
            artistry with innovation to craft videos that captivate, connect,
            and inspire action. By delivering exceptional quality and measurable
            impact, we aim to elevate our clients' brands, fostering meaningful
            connections with their audiences and setting new standards in
            commercial video production.
          </p>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2">
          <img
            src={Img}
            alt="Our Vision Image"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
