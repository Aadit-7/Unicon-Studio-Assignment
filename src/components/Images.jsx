import React from "react";
import Img from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import Img4 from "../assets/4.png";
import Img5 from "../assets/5.png";
import Img6 from "../assets/6.png";

const Images = () => {
  return (
    <div className="mt-20 w-full">
      <div className="grid grid-cols-2">
        <img src={Img} alt="Image 1" className="w-full h-auto object-cover" />
        <img src={Img2} alt="Image 2" className="w-full h-auto object-cover" />
        <img src={Img3} alt="Image 3" className="w-full h-auto object-cover" />
        <img src={Img4} alt="Image 4" className="w-full h-auto object-cover" />
        <img src={Img5} alt="Image 5" className="w-full h-auto object-cover" />
        <img src={Img6} alt="Image 6" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Images;
