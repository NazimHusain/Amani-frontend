import React from "react";
import crossplateform from "../../assets/icon/pages-img/crossplat2.png";

export default function NativeAppsSection() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between gap-16">
        
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight mb-6">
            Smart Cross-Platform Development{" "}
            <span className="text-red-500">for Modern Businesses</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
           Create powerful mobile applications that work seamlessly across iOS and Android. Using modern cross platform technologies like Flutter and React Native, we deliver fast, secure, and scalable solutions that help your business grow and reach more users with confidence
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">✔</span>
             Single Codebase, Wider Reach
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">✔</span>
             Fast, Smooth & Reliable Experience
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">✔</span>
              Scalable & Future-Ready Architecture
            </li>
          </ul>

          {/* <div className="mt-8">
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </button>
          </div> */}
        </div>

        {/* Right Side - Smaller Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src={crossplateform}
            alt="Cross platform mobile app development"
            className="rounded-2xl shadow-xl w-[80%] lg:w-[75%] max-w-md"
          />
        </div>

      </div>
    </section>
  );
}