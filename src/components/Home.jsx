import React from "react";
import bgImg from "../assets/bg.jpeg";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Brands from "./Brands";
import Images from "./Images";
import Ourvisison from "./Ourvisison";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Background Image Wrapper */}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col items-center justify-center w-full"
      >
        <LandingPage />
        <Brands />
        <Images />
        <Ourvisison />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
