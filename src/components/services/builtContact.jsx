import React from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeInLeft,
  fadeInRight,
} from "../../Animation/motionVariants";
import {
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-white dark:bg-gray-950">
    
    
      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 text-center">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6 dark:text-white">
          Let’s Build Quality Together
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Partner with Amani Technologies and experience confidence in every release.
        </motion.p>
        <motion.a
          variants={fadeUp}
          href="/contact"
          className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold"
        >
          Contact Us
        </motion.a>
      </section>

    </main>




  );
}