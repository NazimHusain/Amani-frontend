import React from "react";

import {
  FaFacebookF,
  // FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/fevicone.jpeg" alt="Amani Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold">Amani Technologies</span>
          </div>
          <p className="text-gray-400 text-sm">
           Amani Technologies is a technology company that develops innovative software solutions focused on digital identity verification, artificial intelligence, and secure onboarding platforms.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-transparent p-2 border border-gray-600 rounded hover:bg-green-600 transition">
                <FaFacebookF />
              </a>
              {/* <a href="#" className="bg-transparent p-2 border border-gray-600 rounded hover:bg-green-600 transition">
                <FaXTwitter />
              </a> */}
              <a href="#" className="bg-transparent p-2 border border-gray-600 rounded hover:bg-green-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-transparent p-2 border border-gray-600 rounded hover:bg-green-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-green-600 w-fit">Useful Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/about" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/contact" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-green-600 w-fit">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Our Contact</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-green-600 w-fit">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-white" />
              <span><strong>Call Center</strong><br />+919012826369</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-white" />
              <span><strong>Email Support</strong><br />husain0001@outlook.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCommentDots className="text-white" />
              <span><strong>Chat Us</strong><br />+919012826369 </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 mt-12 py-4 px-4 flex flex-col md:flex-row items-center justify-between text-white text-sm">
        <p>&copy; {new Date().getFullYear()} Amani Technologies. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// const Footer = () => {
//   return (
//     <footer className="bg-white dark:bg-black text-black dark:text-white shadow-inner dark:shadow-[0_-2px_6px_rgba(255,255,255,0.1)] mt-auto">
//       <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Amani Technologies. All rights reserved.</p>
//         <div className="flex space-x-4 mt-4 md:mt-0">
//           <a href="#" className="hover:text-red-500 dark:hover:text-red-400">Privacy</a>
//           <a href="#" className="hover:text-red-500 dark:hover:text-red-400">Career</a>
//           <a href="#" className="hover:text-red-500 dark:hover:text-red-400">Contact</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
