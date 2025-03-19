import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWrite = () => {
  return (
    <TypeAnimation
      sequence={[
        "Oil And Gas",
        1400,
        "Waste & Water Treatment",
        1400,
        "Food And Beverage",
        1400,
        "Laboratory Chemical",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-[18px] md:text-[20px] lg:text-[25px] text-blue-400 font-medium block mt-2"
    />
  );
};

export default TypeWrite;
