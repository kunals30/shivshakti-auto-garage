import React from "react";
import heroImg from "./assets/ManInGarage.jpg"; // Replace with your image path
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */} 
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          शिवशक्ती ऑटो गॅरेज
        </h1>

        <p className="text-lg md:text-2xl font-light mb-10 leading-relaxed text-gray-200 drop-shadow-md">
          A garage delivering trusted automotive repair & maintenance 
          with expertise and care.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="flex items-center text-center gap-3 bg-white font-semibold text-yellow-700 px-8 py-4 rounded-lg hover:bg-yellow-700 hover:text-white transition text-lg shadow-lg">
            <a href="#bookService">BOOK A SERVICE</a>
            <FaRegArrowAltCircleRight className="text-2xl" />
          </button>

          <button className="flex items-center gap-3 border border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-yellow-700 transition text-lg shadow-lg">
            <a href="#about">ABOUT US</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
