import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaLayerGroup,
  FaCogs,
  FaShoppingCart,
  FaPython,
  FaTools,
  FaCloud,
} from "react-icons/fa";

import {
  containerVariants,
  itemVariants,
  fadeUp,
} from "../Animation/motionVariants";

const services = [
  {
    title: "Website Design & Development",
    icon: FaLaptopCode,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Build Native Apps",
    icon: FaMobileAlt,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Cross Platform App Development",
    icon: FaLayerGroup,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Custom Business Applications",
    icon: FaCogs,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "eCommerce Development",
    icon: FaShoppingCart,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Backend Development With Python",
    icon: FaPython,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Website Maintenance",
    icon: FaTools,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Managed Cloud Services",
    icon: FaCloud,
    color: "bg-sky-100 text-sky-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto"
        >
          Complete Technology Solutions for Your Business

          We offer comprehensive technology services designed to support your business at every stage of growth. From design to deployment and long-term support, we deliver solutions that are reliable, scalable, and built for performance.
          {/* We deliver innovative, secure, and scalable IT solutions that support confident business growth. */}
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="
                  group
                  bg-white dark:bg-gray-800
                  rounded-2xl
                  border border-gray-100 dark:border-gray-700
                  p-6
                  flex items-center gap-5
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-xl
                  hover:-translate-y-1
                "
              >
                {/* Icon */}
                <div
                  className={`
                    w-14 h-14 rounded-xl
                    flex items-center justify-center
                    ${service.color}
                    transition-transform duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon size={26} />
                </div>

                {/* Text */}
                <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}