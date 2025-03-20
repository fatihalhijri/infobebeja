"use client";
import React from "react";

interface Props {
  img: string;
  judul: string;
  subJudul?: string;
  posisi?: string;
  tinggi?:string
}
const Hero: React.FC<Props> = ({ img, judul, subJudul, posisi ,tinggi}: Props) => {
  return (
    <div
      className={`relative ${tinggi ?? 'lg:h-[40vh] md:h-[30vh] h-[20vh]'}  bg-cover flex md:justify-start justify-center items-center  px-6 md:px-20 lg:px-36`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: `50% ${posisi ?? "35%"}`, // Atur posisi secara manual
        backgroundSize: "cover", // Pastikan gambar tetap penuh
        backgroundRepeat: "no-repeat", // Jangan ulang gambar
      }}
    >
      <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

      <div className="  w-full">
        <div className="flex flex-col  relative lg:text-left text-center  items-center justify-center text-white lg:w-full">
          <h1 className="md:text-2xl text-center lg:text-4xl text-lg font-medium leading-tight ">
            {judul}
          </h1>
          {subJudul && (
          <div className="flex flex-row gap-3 justify-center items-center mt-2">
            <p className="md:text-lg text-center lg:text-2xl  text-base font-medium">
              Home
            </p>
            <p className="md:text--lg text-center lg:text-3xl  text-base font-medium text-blue-400">{`>`}</p>
            <p className="md:text-lg text-center lg:text-2xl  text-base font-medium">
              {subJudul}
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
