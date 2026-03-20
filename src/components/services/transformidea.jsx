import { motion } from "framer-motion";
import React from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
} from "../../Animation/motionVariants"; // Assuming your animation file is here

export default function ContactBanner() {
  return (
    // Section with light blue background to match the image
     <section className="py-20 bg-blue-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT (Text) */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Orange accent line */}
          <div className="pl-6 border-l-4 border-orange-500">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Ready to Transform Your Ideas? Let's Discuss the Project!
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
             We carefully review your data and provide customized digital solutions designed specifically for you. Your project discussions are always safe, secure, and completely confidential.
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (Contact Info) */}
        {/* This column has a subtle dot pattern in your image, which would be added via CSS background image */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="text-blue-600 dark:text-blue-400 mb-4">
            <FaPhoneAlt size={32} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Reach Out Now
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="tel:+919711440630"
            className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 my-2 hover:underline"
          >
            +91-9012826369
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="/contact" // Link to your contact page
            className="mt-6 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
          >
            Contact Us
            <FaArrowRight size={16} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}