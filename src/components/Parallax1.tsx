"use client";
import React from "react";
import { motion } from "framer-motion";

const sections = [
  { id: 1, title: "Welcome to Our Website", text: "Discover amazing features." },
  { id: 2, title: "About Us", text: "We are a team of innovators." },
  { id: 3, title: "Our Services", text: "Providing top-notch solutions." },
  { id: 4, title: "Contact Us", text: "Let's collaborate for success." },
];

const ParallaxScroll = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          className="w-3/4 md:w-1/2 my-32 p-10 bg-white shadow-lg rounded-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-blue-600">{section.title}</h2>
          <p className="text-gray-600 mt-2">{section.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ParallaxScroll;
