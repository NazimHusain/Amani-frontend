import React from "react";
import MobilePhone from "../assets/icon/pages-img/web.png";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={MobilePhone}
            alt="Track Audience App Preview"
            className="w-full max-w-sm rounded-2xl"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-orange-500 dark:text-orange-400">
            We’re here <br />to help <br />turn your innovative idea into reality.
          </h2>
          <p className="text-gray-600  mb-8">
            Get a free consultation today.
            <br />We’ll help you find the right solution to your problem.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
                >
                  <h4 className="text-xl font-semibold">Let's Talk</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
