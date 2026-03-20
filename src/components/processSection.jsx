import React from "react";

const ProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We learn about your brand, goals & audience.",
    },
    {
      number: 2,
      title: "Strategy",
      description: "We craft a clear, data-driven plan.",
    },
    {
      number: 3,
      title: "Design",
      description: "We create user-friendly, stunning visuals.",
    },
    {
      number: 4,
      title: "Development",
      description: "We build seamless, high-performance solutions.",
    },
    {
      number: 5,
      title: "Launch",
      description: "We launch, Test, Support, optimize & scale for success.",  
    },
  ];

  return (
     <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 rounded-3xl my-8 shadow-lg overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 text-gray-900 dark:text-white">
        <div className="text-left mb-12 ml-4">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2"> Our Web App Development Process</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            How we bring your vision to life:
          </p>
          <p> We follow a proven development methodology that ensures transparency, quality, and on-time delivery of your web application.
         </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 px-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start text-left w-full md:flex-1 min-w-0"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold text-lg mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{step.title}</h3>
              <p className="text-base text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
