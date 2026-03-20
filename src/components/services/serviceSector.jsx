import { motion } from "framer-motion";
import React from "react";
import {
  FaHeartbeat,
  FaSatelliteDish,
  FaNewspaper,
  FaIndustry,
  FaGraduationCap,
  FaUserTie,
  FaShoppingCart,
  FaFilm,
  FaUniversity,
  FaMoneyBillWave,
  FaCar,
  FaTruck,
  FaFutbol,
  FaHotel,
  FaHome,
} from "react-icons/fa";

import {
  fadeInRight,
  fadeUp,
  containerVariants,
  zoomIn, // ✅ Import the new variant
} from "../../Animation/motionVariants";

const SECTORS = [
  { icon: <FaHeartbeat size={30} />, title: "Healthcare" },
  { icon: <FaSatelliteDish size={30} />, title: "Telecom" },
  { icon: <FaNewspaper size={30} />, title: "News" },
  { icon: <FaIndustry size={30} />, title: "Manufacturing" },
  { icon: <FaGraduationCap size={30} />, title: "Education" },
  { icon: <FaUserTie size={30} />, title: "Consultancy" },
  { icon: <FaShoppingCart size={30} />, title: "E-commerce" },
  { icon: <FaFilm size={30} />, title: "Entertainment" },
  { icon: <FaUniversity size={30} />, title: "Government" },
  { icon: <FaMoneyBillWave size={30} />, title: "Finance" },
  { icon: <FaCar size={30} />, title: "Automobile" },
  { icon: <FaTruck size={30} />, title: "Logistics" },
  { icon: <FaFutbol size={30} />, title: "Sports" },
  { icon: <FaHotel size={30} />, title: "Hospitality" },
  { icon: <FaHome size={30} />, title: "Real Estate" },
];

export default function AwsFeatureSection() {
  return (
    <section className="py-20 bg-[#e9f0ef] dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT with ZOOM-IN */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="origin-center"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
            {/* Driving Success in <br /> Every Sector We Touch */}
            <span className="text-orange-500">We excel in </span><br />industry-driven solutions
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            We help businesses grow with smart and reliable IT solutions. 
            From modern website development and digital marketing to branding, SEO, and lead generation, our services are designed to support your business at every stage and help you 
            {" "}
            <span className="bg-[#d9c3b4] px-1 font-semibold text-gray-900">
              stay ahead in a competitive market..
            </span>
          </p>

          <motion.button
            variants={fadeUp}
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all"
          >
            Start a Project <span className="text-xl">→</span>
          </motion.button>
        </motion.div>

        {/* RIGHT GRID (unchanged) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 min-w-0"
        >
          {SECTORS.map((sector, i) => (
            <motion.div
              key={i}
              variants={fadeInRight}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1"
            >
              <div className="text-3xl text-red-500 mb-3">{sector.icon}</div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                {sector.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
