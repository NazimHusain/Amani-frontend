import { motion } from "framer-motion";
import React from "react";
import { fadeUp } from "../../Animation/motionVariants";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Customized Solutions",
      description:
        "We customize our development services to match your unique business goals and technical needs.",
    },
    {
      title: "Expert Team",
      description:
        "Our developers bring expertise across a wide range of technologies, delivering reliable and high quality solutions.",
    },
    {
      title: "End to End Services",
      description:
        "From planning and design to development and ongoing support, we provide end to end website development service",
    },
    {
      title: "Focus on Performance",
      description:
        "We focus on performance, security, and scalability so your website runs smoothly and grows with your business.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* === Heading === */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Choose <span className="text-sky-600">Amani Technologies</span> for Website Development?
        </motion.h2>

        {/* === Cards Grid === */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
