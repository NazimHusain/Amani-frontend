import React from 'react';
import ecommerce from '../../assets/icon/pages-img/ecommerce.png'
import Business from '../../assets/icon/pages-img/business.jpg'
import MobileApp from '../../assets/icon/pages-img/mobileApp2.png'
import Website from '../../assets/icon/pages-img/website2.png'

const cards = [
  {
    image: Business, // Swap with your actual image paths
    title: 'Business',
    description: 'Share your story with your business website',
    cta: 'Enquire Now →',
    ctaLink: '/about'
  },
  {
    image: ecommerce,
    title: 'eCommerce',
    description: 'Elevate your online store with expert-driven eCommerce solutions',
    cta: 'Enquire Now →',
    ctaLink: '/about'
  },
  {
    image: MobileApp,
    title: 'Mobile App',
    description: 'Connect with your customers through fast, high-performing mobile applications',
    cta: 'Enquire Now →',
    ctaLink: '/about'
  },
  {
    image: Website,
    title: 'Web Apps',
    description: 'We build custom web applications tailored to your business requirements.',
    cta: 'Enquire Now →',
    ctaLink: '/about'
  },
];

export default function WhatWeDevelopSection() {
  return (
    <section className="w-full dark:bg-gray-950 py-10 px-3">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">What We Develop?</h2>
        <p className="text-base md:text-lg mb-10 text-white font-medium max-w-3xl mx-auto">
          Technology should empower your ambitions, not limit them. Our experts handle the technical side so you can focus on growing your business.

        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={card.title} className="bg-white rounded-lg shadow-md flex flex-col h-full transition hover:shadow-lg">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-5 flex flex-col grow text-left">
                <h3 className="font-bold text-xl mb-2 text-gray-900">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>
                {card.cta && (
                  <a
                    href={card.ctaLink}
                    className="text-[#e99446] font-semibold mt-auto inline-block"
                  >
                    {card.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
