import React from "react";
import Nativeimage from "../../assets/icon/pages-img/nativeapps.png";

export default function NativeAppsSection() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Nativeimage}
            alt="Native mobile app development"
            className="rounded-2xl shadow-xl w-[80%] lg:w-[75%] max-w-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight mb-6">
            Scalable Native Apps for Modern{" "}
            <span className="text-red-500">Businesses</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
           Build mobile apps that users love. Leveraging Swift and Kotlin, we create fast, secure, and seamless native experiences for iOS and Android, helping businesses transform ideas into high-performance, growth-ready applications.
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">✔</span>
             Smooth, responsive apps built for iOS and Android.
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">✔</span>
             Apps designed to grow with your business
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 text-xl">✔</span>
             Leveraging Swift and Kotlin for native excellence
            </li>
          </ul>
{/* 
          <div className="mt-8">
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </button>
          </div> */}
        </div>

      </div>
    </section>
  );
}