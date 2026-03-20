import { motion } from "framer-motion";
import React from "react";
import { 
  fadeInLeft, 
  fadeInRight, 
  fadeUp 
} from "../../Animation/motionVariants"; // Assuming your animation file is here


import LightBulb from '../../assets/Dashboard/custom_apps.png'


export default function MobileAppHero() {
  return (
    // Section with light blue background
    <section className="py-20 bg-blue-50 dark:bg-gray-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* === Left Text Content === */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Sub-heading */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3"
          >
            <span className="font-bold">Build Software That Fits Your Business </span> 
            
        
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
           Want to develop custom <span className="text-blue-600"> web and mobile apps </span> For
            Your Business?
          </motion.h1>


          {/* Body Text */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
          Get in touch with us to transform your app idea into a powerful, user focused solution built with modern technology.
          </motion.p>
        </motion.div>

        {/* === Right Image === */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <motion.img
            src={LightBulb}
            alt="Mobile App Development Illustration"
            className="w-full max-w-lg object-contain"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
        
      </div>
    </section>
  );
}