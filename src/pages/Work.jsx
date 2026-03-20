import React from 'react';
import WorkCulture from '../components/services/workculture.jsx'
import ServiceSection from '../components/Services.jsx'
import OurFeatures from '../components/services/ourFeatures.jsx'
import WebDevelopmentService from '../components/services/webDevelopmentService.jsx'
const Services = () => {
  return (
    <div className="w-full">

      {/* WorkCulture Section */}
      <WorkCulture />

      {/* WebDevelopmentService Section */}
      <WebDevelopmentService />

      {/* Services Section */}
      <ServiceSection />


      {/* Features Section */}
      <OurFeatures />


    </div>
  );
};

export default Services;
