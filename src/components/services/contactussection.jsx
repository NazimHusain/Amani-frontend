import { motion } from "framer-motion";
import React from "react";
import { FaAsterisk, FaTools  } from "react-icons/fa";
import { fadeUp } from "../../Animation/motionVariants";

export default function StartupRescueSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="bg-[#ffe1c6] rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="flex items-start gap-4 md:w-3/4">
            <div className="text-orange-600 mt-1">
              <FaAsterisk size={40} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Ready to Build Better?
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6 max-w-2xl">


                If you need a reliable technology partner to rescue, rebuild, or create a powerful software solution from scratch, we’re here to help.

                Contact us today to discuss your project and discover how we can turn setbacks into success.
              </p>

              <motion.button
                variants={fadeUp}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
              >
                Contact for Help
              </motion.button>
            </div>
          </div>

       {/* RIGHT DECORATIVE ICON */}
          <div className="absolute right-10 bottom-6 hidden md:block opacity-20 text-orange-600">
            <FaTools size={140} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
