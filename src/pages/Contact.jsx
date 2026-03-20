
import React from "react";
import AuthLayout from '../layout/AuthLayout';
import ContactForm from  "../components/forms/ContactForm"


export default function contact() {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white text-center mb-6"> CONTACT US</h2>
      <ContactForm />
    </AuthLayout>
  );
}








// const About = () => {
//   return (
//     <div className="w-full">

//       {/* Hero Section */}
//       <section className="w-full h-screen bg-cover bg-center relative" 
//         style={{backgroundImage: `url(${sec1Image})`}} >

//         <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//           <div className="text-center text-white px-6">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Web & Mobile App Development Company</h1>
//             <p className="text-lg md:text-xl">
//                     Engineering web and mobile user experience, we have been catalyzing and transforming production,
//                     sales, marketing, customer service, engagement and brand awareness endeavors of businesses,
//                      startups and NGOs since 2004.</p>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 bg-gray-100 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4"> Who We Are</h2>
//           <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//            We are a web and mobile app development company comprising technology-enabled business consultants,
//             UI-UX designers, web and mobile app developers and software quality analysts collectively striving to
//             bridge artificial and natural intelligence to favor:
//           </p>
//             <ul className="list-disc list-inside text-lg text-left mt-4 space-y-2 dark:text-gray-300">
//             <li>BYOD at workplaces</li>
//             <li>Collaboration, productivity and performance</li>
//             <li>Customer acquisition and sales</li>
//             <li>Brand awareness and ROI growth</li>
//             </ul>
//         </div>
//       </section>

//       {/* Product Section */}
//       {/* <section className="py-20 bg-white dark:bg-black">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {imageUrls.map((url, index) => (
//               <div
//                 key={index}
//                 className="rounded-xl shadow-md border dark:border-gray-700 p-6 text-center dark:bg-gray-800 transition hover:shadow-lg"
//               >
//                 <img
//                   src={url}
//                   alt={`Product ${index + 1}`}
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Milk Product {index}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Fresh and natural dairy product directly from farms.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* CTA Section */}
//       <section className="py-16 bg-blue-300 text-white text-center">
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-4">Want to become a Dairify member?</h2>
//           <p className="mb-6">Join now to receive updates, discounts, and fresh dairy deliveries.</p>
//           <a href="/register">
//             <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
//               Register Now
//             </button>
//           </a>
//         </div>
//       </section>


//         {/* CTA Section */}
//       <section className="py-16 pt-52 mt-3 bg-amber-800 text-white text-center">
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-4">What We Do?</h2>
//           <p className="mb-6">We design, prototype, develop, integrate, modernize and support web and mobile applications
//              that can serve intended purposes effortlessly. Here is a brief list of technologies we work with.</p>
//             <ul className="list-disc list-inside text-lg text-left mt-4 space-y-2 dark:text-gray-300">
//             <li>iOS</li>
//             <li>Android</li>
//             <li>React</li>
//             <li>Python Dajngo</li>
//             <li>AngularJS</li>
//             <li>MySQL</li>
//             <li>Postgres</li>
//             </ul>
           
//           <a href="/register">
//             <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
//               Register Now
//             </button>
//           </a>
//         </div>
//       </section>

//         {/* How we Do Section */}

//       <section className="py-16 bg-blue-300 text-white dark:text-gray-300 text-left text-lg">
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-4">How We Do?</h2>
//           <h5>One-Time One Cost Engagement</h5>
//           <p>Also referred to as a budget model, this is suitable for a project with basic features. We work for you remotely. </p>
//           <h5>Time and Materials (T&M) Engagement</h5>
//           <p>The model is apt for a complex project. Our team works remotely or by staying at your own premise. </p>
//           <h5>Full-Time Equivalents (FTE) Engagement</h5>
//           <p>This is ideal for a complex project involving multiple departments. Our people work remotely under the supervision of your project manager</p>
//           <p className="mb-6">Join now to receive updates, discounts, and fresh dairy deliveries.</p>
//           <a href="/register">
//             <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
//               CONTACT US
//             </button>
//           </a>
//         </div>
//       </section>


//     </div>
//   );
// };

// export default About;
