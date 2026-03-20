import { motion } from "framer-motion";
import React from "react";
import sec1image from "../../assets/Dashboard/bulb.png";
import WHOWEAREIMG from "../../assets/icon/pages-img/whoweare.png";

import {
  fadeUp,
  fadeInLeft,
  fadeInRight,
} from "../../Animation/motionVariants";

export default function AboutHeading() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 md:py-48 bg-blue-800 dark:bg-blue-900 text-white overflow-hidden">
        
        {/* Background Image Overlay */}
        <img
          src={sec1image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            About Amani Technologies
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto"
          >
           Your success guides everything we build. We create reliable, scalable, and future ready technology for growing businesses.
          </motion.p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 dark:text-white">
              <span className="text-orange-500">Who We Are</span>
             
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
             Amani Technologies is a technology focused company specializing in Quality Assurance, Automation, and Digital Transformation. We help businesses deliver reliable, secure, and scalable software from the very beginning.
             Empowers businesses to move forward with confidence by delivering reliable, high performing, and secure technology solutions.
            </p>
          </motion.div>

          <motion.img
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={WHOWEAREIMG}
            alt="Amani Technologies Team"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>



      
    </>
  );
}