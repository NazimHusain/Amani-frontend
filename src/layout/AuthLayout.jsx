import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-[url('/bg-login.jpg')]">
      <div className="bg-black bg-opacity-60 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
