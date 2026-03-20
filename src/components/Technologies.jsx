import React, { useState } from 'react';

import webapp from '../assets/icon/web-app/computer.png';
import android from '../assets/icon/web-app/android.png';
import iOS from '../assets/icon/web-app/apple.png';
import hybrid from '../assets/icon/web-app/hybrid.png';
import chatbot from '../assets/icon/web-app/chatbot.png';

// Data for each service
const heroData = [
  {
    id: 1,
    name: "Website", 
    title: "Website Development", 
    iconUrl: webapp, 
    description: `We are a trusted design company delivering powerful custom website development and mobile friendly websites tailored to your business needs. Our expert team of developers and digital strategists combines cutting edge technology with innovative thinking to create engaging, high performing websites.`,
  },
  {
    id: 2,
    name: "iOS",
    title: "iOS App Development",
    iconUrl: iOS,
    description: `We focus on building strategic mobile apps for bootstrapped startups, SMEs, and growing brands. Our team specializes in delivering unique iPhone app development solutions tailored to meet each client’s specific needs.`,
  },
  {
    id: 3,
    name: "Android",
    title: "Android App Development",
    iconUrl: android,
    description: `We develop powerful Android apps and digital strategies that help businesses grow and succeed. 
                  From intuitive UI/UX design to agile app development, we handle every stage of your Android app project design, development, testing, and launch ensuring it meets your exact requirements.`,
  },
  {
    id: 4,
    name: "Hybrid",
    title: "Cross-Platform App Development",
    iconUrl: hybrid,
    description: `We specialize in delivering high quality cross platform mobile application development services using the latest technologies, 
                  modern trends, and proven development methods. Our experienced and dedicated developers transform your custom business app ideas into powerful mobile solutions that work seamlessly across multiple platforms.`,
  },
  {
    id: 5,
    name: "Chatbot",
    title: "Chatbot Development",
    iconUrl: chatbot,
    description: `We specialize in developing custom chatbots tailored to each client’s unique business needs. Amani Technologies has established a strong reputation as a leading chatbot development company, delivering intelligent and scalable chatbot solutions.`,
  },
];


const HeroSection = () => {
  const [activeService, setActiveService] = useState(heroData[2]);

  const renderTitle = (title) => {
    const parts = title.split(" ");
    if (parts.length > 1) {
      return (
        <>
          <span className="text-orange-500  font-bold">{parts[0]}</span>{" "}
          <span className="font-bold">{parts.slice(1).join(" ")}</span>
        </>
      );
    }
    return <span className="text-orange-500 font-bold">{title}</span>;
  };

  return (
    <section className="min-h-screen bg-white py-16 flex flex-col items-center justify-center text-gray-900">
      <div className="max-w-6xl mx-auto px-4 w-full text-center">
        {/* Main Heading */}
        <h1
          key={activeService.id + "-title"}
          className="text-4xl md:text-5xl font-bold mb-12 animate-fadeIn"
        >
          {renderTitle(activeService.title)}
        </h1>

        {/* Navigation Tabs */}
        <div className="relative flex justify-center border-b border-gray-300 mb-12">
          {heroData.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`
                relative flex flex-col items-center p-4 mx-4 md:mx-6 group
                transition-colors duration-300 ease-in-out cursor-pointer
                ${activeService.id === service.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}
              `}
            >
              <img
                src={service.iconUrl}
                alt={service.name}
                className={`
                  w-8 h-8 mb-2 object-contain transition-transform duration-300 ease-in-out cursor-pointer
                  ${activeService.id === service.id ? 'scale-110' : 'group-hover:scale-105'}
                `}
              />
              <span className="text-sm font-semibold whitespace-nowrap">
                {service.name}
              </span>
              {/* Active Tab Indicator */}
              {activeService.id === service.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-105 rounded-t-sm transition-transform duration-300 ease-out" />
              )}
            </button>
          ))}
        </div>

        {/* Description */}
        <p
          key={activeService.id + "-description"}
          className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed animate-fadeIn text-black"
        >
          {activeService.description}
        </p>
      </div>  

      {/* Custom CSS for fade-in animation */}
     <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.5s ease-out forwards;
            }
`}</style>

    </section>
  );
};

export default HeroSection;
