import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import IdeaTranformation from '../../assets/icon/pages-img/IdeaTransformation1.png'

import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  containerVariants,
} from "../../Animation/motionVariants"; // Assuming your animation file is here

// Bullet points data
const culturePoints = [
  "We foster teamwork and encourage open, transparent communication.",
  "We support a healthy balance between work and personal life.",
  "We empower employees to take initiative and turn their ideas into reality.",
  "We organize team building activities, social gatherings, and creative challenges to strengthen collaboration",
];

export default function CultureSection() {
  return (
    // Section with white background
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT (Text) */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Sub-heading with blue line */}
          <motion.p
            variants={fadeUp}
            className="text-lg font-semibold text-gray-600 dark:text-gray-300 border-t-4 border-blue-600 inline-block pt-2 mb-4"
          >
            Where Experience Meets Creativity
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
          >
            Transforming Ideas in Our Collaborative{" "}
            <span className="text-blue-600">Work Culture.</span>
          </motion.h2>

          {/* Bullet Points */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            {culturePoints.map((point, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <span className="text-green-500 mt-1">
                  <FaArrowRight size={16} />
                </span>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {point}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Know More Link */}
          <motion.a
            variants={fadeUp}
            href="/about" // Link to your about page
            className="text-blue-600 dark:text-blue-400 font-semibold text-lg hover:underline flex items-center gap-2"
          >
            Know More
            <FaArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* RIGHT CONTENT (Image Collage) */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center items-center"
        >
          <img
            src={IdeaTranformation} 
            alt="Company culture collage"
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}