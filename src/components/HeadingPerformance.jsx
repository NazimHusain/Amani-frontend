import { motion } from "framer-motion";
import React from "react";

export default function HeaderSection() {
  return (
    <section className="py-24 bg-orange-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading Animation */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We build powerful{" "}
          <span className="text-orange-500">high performing software</span>{" "}
          with exceptional design.
        </motion.h2>

        {/* Subtext Animation */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          People trust us for our expertise, simple user-first design, and
          reliable solutions that put their goals at the center.
        </motion.p>
      </div>
    </section>
  );
} 