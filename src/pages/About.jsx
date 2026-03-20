import React from 'react';
import sec1Image from '../assets/Dashboard/bulb.png';
import { List } from 'lucide-react';


import ContactUs from '../components/services/contactussection.jsx'
import GrowthPartnership from '../components/services/growthpartership.jsx'
import BuiltTogether from '../components/services/builtContact.jsx'
import MisionVision from '../components/services/vision.jsx'
import AboutHeading from '../components/services/AboutHeading.jsx'
import WhyChoose from '../components/services/whychoose.jsx'
import CoreValues from '../components/services/CoreValues.jsx'

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* TestService Section */}
      <AboutHeading />

      {/* Why Choose Brand Section */}
      <WhyChoose />

      {/* TestService Section */}
      <GrowthPartnership />

      {/* CoreValues Section */}
      <CoreValues />

      {/* BuiltTogether Section */}
      <BuiltTogether />

      {/* MissionVission Section */}
      <MisionVision />

      {/* ContactUs Section */}
      <ContactUs />


    </div>
  );
};

export default About;
