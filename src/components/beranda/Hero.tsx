"use client";
import React from "react";
import TypeWrite from "../helper/TypeWrite";
import { ArrowRight  } from "lucide-react";

const Hero = () => {
  const handleClick = () => {
    window.open("https://wa.me/6285222173322", "_blank");
  };
  

  return (
    <div
      className="relative h-[80vh] flex justify-start items-center px-6 md:px-20 lg:px-36 bg-cover bg-center"
      style={{ backgroundImage: `url(/kimia-1.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-white lg:w-2/3">
        <h3 className="text-sm lg:text-base xl:text-lg font-medium">
          PT. BERLIAN BENZENA JAYA
        </h3>
        <h1 className="text-xl md:text-2xl xl:text-4xl font-semibold leading-tight pt-4">
          Membantu Anda Mencapai Kesuksesan dengan Produk Kimia Terbaik
        </h1>

        {/* Animasi teks */}
        <TypeWrite />

        <p className="mt-4 text-sm lg:text-base xl:text-lg font-medium text-white">
          Kami menghadirkan solusi terbaik untuk kebutuhan kimia Anda. Temukan inovasi dan teknologi terbaru bersama kami.
        </p>

        <button
          onClick={handleClick}
          className="mt-6 px-4 lg:px-6   py-2  rounded-md  bg-blue-500 hover:bg-blue-700 transition-all duration-300 flex justify-center items-center w-full sm:w-auto"
        >
          <p className="text-white text-sm sm:text-lg flex items-center gap-3">
            Hubungi Sekarang
            <ArrowRight className="h-6 w-6 " />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
