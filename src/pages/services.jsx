import React from 'react';
import WebApplication from '../components/services/webapplication.jsx'
import NativeApplication from '../components/services/nativeapplication.jsx'
import AWSSection from '../components/services/awssection.jsx'
import CrossApplication from '../components/services/crossplatform.jsx'
import PythonDes from '../components/services/pythondes.jsx'
import ProcessSection from '../components/processSection'
import ServiceSector from '../components/services/serviceSector.jsx'
import WhatWeDevelop from '../components/services/whatwedevelop.jsx'
import TransformIdea from '../components/services/transformidea.jsx'
import WebApp from '../components/services/webApp.jsx'

const Services = () => {
  return (
    // <div className="w-full">
    <div className="w-full overflow-x-hidden">

      {/* WebApp Application Section */}
      <WebApp />


      {/* Web Development Services Section */}
      <WhatWeDevelop />


      {/* Website Development Section */}
      <WebApplication />

      {/* crossplateform Section */}
      <CrossApplication />

      {/* NativeApplication Section */}
      <NativeApplication />
      {/* AWSSection Section */}
      <AWSSection />

      {/* AWSSection Section */}
      <PythonDes />

      {/* ProcessSection Section */}
      <ProcessSection />

      {/* Service Sector  Section  */}
      <ServiceSector />

      {/* TransformIdea Section */}
      <TransformIdea />

    </div>
  );
};

export default Services;
