import { motion } from "framer-motion";
import React from "react";
import vission5 from "../../assets/icon/pages-img/vission5.png";
import mission3 from "../../assets/icon/pages-img/mission3.png";

import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
} from "../../Animation/motionVariants";

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* ================= MISSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Mission Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-900 dark:text-white"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">
              Our Mission
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
             Our mission is to create reliable and scalable QA solutions that drive efficiency and business growth. Through deep technical knowledge and a commitment to excellence, 
             we help organizations perform at their best.
             We help organizations work smarter by delivering reliable QA solutions backed by expertise and a results driven mindset.
            </motion.p>
          </motion.div>

          {/* Mission Logo */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <img
                src={mission3}
                alt="Our Mission"
                className="w-full max-w-[220px] h-[120px] md:h-[180px] object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= VISION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Vision Logo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center lg:justify-start lg:order-1 order-2"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
              <img
                src={vission5}
                alt="Our Vision"
                className="w-full max-w-[220px] h-[120px] md:h-[180px] object-contain"
              />
            </div>
          </motion.div>

          {/* Vision Text */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-900 dark:text-white lg:order-2 order-1"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">
              Our Vision
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
             To become a globally trusted technology partner known for excellence, 
             integrity, and innovation where quality is always guaranteed. We strive to empower businesses to grow confidently in an ever changing digital landscape.
             We aim to build a reputation as a trusted global partner, committed to integrity, innovation, and uncompromising quality.
            </motion.p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}