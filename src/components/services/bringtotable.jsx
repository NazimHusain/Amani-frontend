import { motion } from "framer-motion";
import React from "react";
import WhatWeBring from '../../assets/icon/pages-img/whatwebring2.png';



import { 
  FaDesktop, 
  FaMobileAlt, 
  FaCode, 
  FaChartLine,
  FaCogs
} from "react-icons/fa";

import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  containerVariants,
} from "../../Animation/motionVariants"; // Assuming your animation file is here

// Updated services data based on the image
const SERVICES = [
  {
    icon: <FaDesktop size={22} />,
    title: "Web Development",
    description:
      "Elevate your business with our agile web developers, using cutting-edge tools to craft innovative, robust, and powerful custom websites.",
  },
  {
    icon: <FaMobileAlt size={22} />,
    title: "Mobile App Development",
    description:
      "Fuel success with our expert mobile app developers, shaping powerful custom apps for your business. Elevate your mobile presence with our tailored solutions.",
  },
  {
    icon: <FaCode size={22} />,
    title: "Software Development",
    description:
      "Ignite progress with our skilled software developers delivering innovative and robust solutions. Transform your operations with our tailored software development services.",
  },
  {
    icon: <FaCogs size={22} />,
    title: "Website Maintenance",
    description:
      "Boost your brand visibility and drive growth with our data-driven digital marketing strategies, from SEO to social media management.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE (Matches image) */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={WhatWeBring} // Updated image path
            alt="Team collaborating on a project" // Updated alt text
            className="w-full h-full object-cover "
          />
        </motion.div>

        {/* RIGHT CONTENT (Matches image) */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What We Bring to Table
          </motion.h2>

          {/* Sub-heading */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-10"
          >
            Best In Class Services For Web, Mobility And Digital Marketing
          </motion.p>

          {/* List of Services */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {SERVICES.map((service, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-5"
              >
                {/* Icon styling updated to blue square */}
                <div className="bg-blue-500 text-white p-4 rounded-lg flex-shrink-0 mt-1">
                  {service.icon}
                </div>
                {/* Text content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        
      </div>
    </section>
  );
}