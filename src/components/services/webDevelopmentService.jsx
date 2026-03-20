import { motion } from "framer-motion";
import React from "react";
import {
  FaCode, // Represents Full-Stack Web Development
  FaMobileAlt, // Represents Progressive Web Apps (PWAs)
  FaCloud, // Represents SaaS & Product Platforms
  FaCog, // Represents API Development & Integrations
  FaChartBar, // Represents Admin Dashboards & Portals
  FaSyncAlt, // Represents Migration & Reengineering
  FaWrench, // Represents Maintenance & Feature Enhancements
  FaBuilding, // Represents Custom Business Applications
} from "react-icons/fa";

import {
  fadeInLeft, // Not used in the final version as the layout is different
  fadeInRight, // Not used in the final version as the layout is different
  fadeUp,
  containerVariants,
} from "../../Animation/motionVariants" // Assuming these are still relevant for card animations

const FEATURES = [
  {
    icon: <FaCode size={24} />,
    title: "Full Stack Web Development",
    description: "End to end web development using modern technologies to build secure, scalable, and high-performing applications.",
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "Progressive Web Apps (PWAs)",
    description: "App like experiences that run seamlessly across devices and platforms, combining performance with accessibility.",
  },
  {
    icon: <FaCloud size={24} />,
    title: "SaaS & Product Platforms",
    description: "Scalable software as a service platforms designed to grow with your business and support long term success.",
  },
  {
    icon: <FaCog size={24} />,
    title: "API Development & Integrations",
    description: "Secure and reliable APIs with smooth third party integrations to ensure your systems work together effortlessly.",
  },
  {
    icon: <FaChartBar size={24} />,
    title: "Admin Dashboards & Portals",
    description: "User friendly management dashboards and portals that provide clear insights, control, and data visualization.",
  },
  {
    icon: <FaSyncAlt size={24} />,
    title: "Migration & Reengineering",
    description: "Upgrade and modernize legacy systems with minimal disruption, improved performance, and reduced risk.",
  },
  {
    icon: <FaWrench size={24} />,
    title: "Maintenance & Feature Enhancements",
    description: "Continuous support, performance optimization, and feature updates to keep your applications running at their best.",
  },
  {
    icon: <FaBuilding size={24} />,
    title: "Custom Business Applications",
    description: "Tailored software solutions built around your unique business processes and operational needs.",
  },
];

export default function WebServiceGrid() { // Renamed for clarity, though you can keep AwsFeatureSection
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Our Web Development Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp} // Using fadeUp for each card
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}