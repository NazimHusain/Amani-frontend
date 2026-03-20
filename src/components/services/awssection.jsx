import React from "react";
import AWSImage from "../../assets/icon/pages-img/aws1.png";

export default function AWSSection() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight mb-6">
            Migrate to AWS for{" "}
            <span className="text-orange-500">Scalable Growth</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Accelerate your digital transformation with secure, scalable, and
            high-performance AWS cloud solutions. We help businesses migrate,
            optimize, and manage their infrastructure for maximum efficiency
            and reliability.
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✔</span>
              Seamless cloud migration with minimal downtime
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✔</span>
              Secure, scalable & cost-optimized infrastructure
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✔</span>
              Ongoing monitoring, support & performance tuning
            </li>
          </ul>

          {/* <div className="mt-8">
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              Start Your Cloud Journey
            </button>
          </div> */}
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={AWSImage}
            alt="AWS Cloud Migration"
            className="rounded-2xl shadow-xl w-[80%] lg:w-[75%] max-w-md"
          />
        </div>

      </div>
    </section>
  );
}