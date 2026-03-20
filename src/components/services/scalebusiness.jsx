import { motion } from "framer-motion";
import React from "react";
import { FaPlay } from "react-icons/fa"; // Import the play icon
import BusinessScale from '../../assets/icon/pages-img/businessScale.png';
// import BusinessScale from '../../assets/icon/pages-img/businessScaleII.png';
// import BusinessScale from '../../assets/icon/pages-img/techPhone.png';

import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
} from "../../Animation/motionVariants"; // Assuming your animation file is here

export default function ScaleHero() {
  return (
    // Section with white background
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT (Text) */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight"
          >
           Helping your business scale seamlessly with the power of modern technology.
          </motion.h1>

          {/* Orange Accent Line */}
          <motion.div
            variants={fadeUp}
            className="w-20 h-1.5 bg-orange-500 mb-6"
          />

          {/* Body Text */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          >
            Let’s build something that helps your business grow
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5"
          >
            {/* 'Let's Connect' Button */}
            <a
              href="/contact"
              className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-orange-700 transition duration-300"
            >
              Let's Connect
            </a>

          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT (Image) */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center items-center"
        >
          <img
            src={BusinessScale} // Change this to your image path
            alt="Scaling business collage"
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}