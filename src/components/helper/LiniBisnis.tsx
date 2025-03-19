"use client";
import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  costum?:string
}

const ProductCard: React.FC<propsType> = ({ img, title ,costum}) => {
  return (
    <div className="border border-gray-200 rounded-xl w-full max-w-[440px] h-[280px] md:h-[350px] shadow-md overflow-hidden bg-white  hover:shadow-lg ">
        
      <div className="relative w-full h-52 md:h-60 lg:h-64 bg-gray-100">
        <Image
          className={`${costum ?? 'object-contain'} w-full h-full`}
          src={img}
          width={500}
          height={500}
          alt={title}
        />
      </div>

      <div className="p-4 flex flex-col justify-start items-center gap-2 w-full">
        <h2 className="text-gray-900 md:text-lg text-base  font-semibold uppercase">{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
