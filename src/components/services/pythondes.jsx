import React from "react";
import pythondes from "../../assets/icon/pages-img/pythondes.png";

export default function PythonSection() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={pythondes}
            alt="Python Development"
            className="rounded-2xl shadow-xl w-[80%] lg:w-[75%] max-w-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight mb-6">
            Scalable Solutions with{" "}
            <span className="text-yellow-500">Python</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Build smarter, faster, and high-performance applications using Python.
            From backend systems to automation and data-driven platforms, we
            deliver secure and scalable solutions tailored to your business.
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 text-xl">✔</span>
              Powerful backend development (Django, FastAPI)
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 text-xl">✔</span>
              API development & system integrations
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 text-xl">✔</span>
              Secure, scalable & maintainable architecture
            </li>
          </ul>

          {/* <div className="mt-8">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              Build with Python
            </button>
          </div> */}
        </div>

      </div>
    </section>
  );
}