import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../Animation/motionVariants";
import {
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaCheck,
  FaSmile
} from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-white dark:bg-gray-950">

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-4">
              Our Core <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The principles that shape our decisions and define the way we deliver solutions.The foundation behind every choice we make and every solution we create
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Quality First",
                desc: "We achieve excellence through accuracy, consistency, and dependable delivery.",
                icon: FaStar,
              },
              {
                title: "Integrity",
                desc: "We operate with honesty, transparency, and accountability in everything we do.",
                icon: FaShieldAlt,
              },
              {
                title: "Innovation",
                desc: "We continuously explore new technologies to create better outcomes.",
                icon: FaRocket,
              },
              {
                title: "Client Success",
                desc: "We are committed to helping our clients achieve meaningful and measurable results.",
                icon: FaCheck,
              },
            ].map((value, i) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-teal-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">

                    {/* ICON – SAME AS AwsFeatureSection */}
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md
                                    text-teal-600 dark:text-teal-400
                                    group-hover:text-orange-500 transition-colors">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}