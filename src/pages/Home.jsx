import React from 'react';
import sec1Image1 from '../assets/Dashboard/Hero_Dashboard.png';
import ExpertiseSection from '../components/ExpertiseSection.jsx'
import TechScroll from '../components/technologySection.jsx'
import Technologies from '../components/Technologies.jsx'
import HeadingPerformance from '../components/HeadingPerformance.jsx'
import ScaleBusiness from '../components/services/scalebusiness.jsx'
import BringtoTable from '../components/services/bringtotable.jsx'



const Home = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
     <section className="relative w-full min-h-screen flex items-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${sec1Image1})` }}
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-3xl text-white">

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Empowering Your Business with
        <span className="text-orange-500"> Scalable Technology</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
        We design, develop, and optimize high-performance digital solutions
        that drive innovation, improve efficiency, and accelerate business growth.
      </p>

    

    </div>
  </div>
</section>

      {/* Header Section */}
      <HeadingPerformance />


      {/* platform software development */}
      <Technologies />


      {/* Expertise Section  */}
      <TechScroll />


      {/* Expertise Section */}
      <ExpertiseSection />

      {/* What we bring to the table Section */}
      <BringtoTable />


      {/* Scale Your Business Section */}
      <ScaleBusiness />

    </div>
  );
};

export default Home;
