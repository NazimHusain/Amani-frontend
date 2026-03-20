import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      {/* <main className="flex-grow pt-24 pb-10 px-4 sm:px-6 md:px-8 w-full max-w-screen-xl mx-auto"> */}
        <main className="flex-grow pt-10 pb-2 w-full">
        {children}
      </main>
      <Footer />
      
      {/* ✅ Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Layout;


