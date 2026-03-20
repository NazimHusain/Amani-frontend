import { motion } from "framer-motion";
import React from "react";
import {
  FaAward,
  FaBolt,
  FaUsers,
  FaClock,
  FaDollarSign,
  FaLightbulb,
} from "react-icons/fa";

import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  containerVariants,
} from "../../Animation/motionVariants"

const FEATURES = [
  {
    icon: <FaAward size={24} />,
    title: "AWS Certified Architects & Engineers with proven experience",
  },
  {
    icon: <FaBolt size={24} />,
    title: "Seamless, non-disruptive migration approach",
  },
  {
    icon: <FaUsers size={24} />,
    title: "Deep domain knowledge across multiple industries",
  },
  {
    icon: <FaClock size={24} />,
    title: "24×7 monitoring and proactive support",
  },
  {
    icon: <FaDollarSign size={24} />,
    title: "Transparent cost models with measurable ROI",
  },
  {
    icon: <FaLightbulb size={24} />,
    title: "Commitment to innovation and ongoing optimization",
  },
];

export default function AwsFeatureSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/aws-team.jpg" // change to your image path
            alt="Team collaborating"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            We’re not just AWS implementers – we’re long-term partners committed
            to your cloud success.
          </motion.h2>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {FEATURES.map((feature, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4"
              >
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.title}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.blockquote
            variants={fadeUp}
            className="border-l-4 border-orange-500 italic text-gray-700 dark:text-gray-300 mt-8 pl-4"
          >
            "Our success is measured by your ability to innovate faster, operate
            smarter, and spend better on the cloud."
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
