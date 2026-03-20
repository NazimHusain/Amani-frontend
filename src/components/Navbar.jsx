import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Navbar() {

  const navLinkClass =
  "relative hover:text-blue-600 transition-colors duration-300 " +
  "after:content-[''] after:absolute after:w-0 after:h-[2px] " +
  "after:left-0 after:-bottom-1 after:bg-blue-600 " +
  "hover:after:w-full after:transition-all after:duration-300";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white shadow-md dark:shadow-[0_2px_10px_rgba(255,255,255,0.1)] z-50">
      <nav className="w-full px-4 py-4 flex justify-between items-center max-w-7xl mx-auto  bg-gradient-to-r from-black via-gray-900 to-transparent text-white shadow-md">
      {/* <nav className="w-full px-4 py-4 flex justify-between items-center max-w-7xl mx-auto"> */}
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition">Amani Technologies</Link>

        {/* Desktop Menu */}
       

        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li><Link to="/services" className={navLinkClass}>Services</Link></li>
          <li><Link to="/work" className={navLinkClass}>Work</Link></li>
          <li><Link to="/about" className={navLinkClass}>About</Link></li>
           <li><Link to="/news" className={navLinkClass}>News</Link></li>
          <li><Link to="/contact" className={navLinkClass}>Contact</Link></li>
        </ul>
       
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400">Amani Technologies</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        {/* Mobile Links */}
        <ul className="flex flex-col gap-4 p-6 text-lg">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Overlay (to close menu when clicked outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

    </header>
  );
}







