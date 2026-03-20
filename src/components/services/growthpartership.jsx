import { motion } from "framer-motion";
import React from "react";
import { FaLayerGroup, FaAward, FaHandshake } from "react-icons/fa";

import {
  fadeInLeft,
  fadeUp,
  containerVariants,
} from "../../Animation/motionVariants"; // Assuming your animation file is here

// Data for the three features
const features = [
  {
    icon: <FaLayerGroup size={40} />,
    title: "SCALABLE SOLUTIONS",
  },
  {
    icon: <FaAward size={40} />,
    title: "PROVEN EXPERTISE",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "LONG-TERM COLLABORATION",
  },
];

export default function ValuePropositionBanner() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 border-b border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT (Text) */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
         Why Choose Our Web
Development Services?
          </h2>
        </motion.div>

        {/* RIGHT CONTENT (Icons) */}
        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              {/* Icon (using a color to approximate the image) */}
              <div className="text-amber-800 dark:text-amber-600 mb-5">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}