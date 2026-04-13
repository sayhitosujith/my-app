// src/Layout.js
import React from "react";
import RCB from "./assets/D-logo.jpg"; // adjust path if needed

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fixed Logo at Top-Left */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
        <img
          src={RCB}
          alt="App Logo"
          className="h-10 w-10 rounded-full shadow-md"
        />
        <span className="text-orange-700 font-bold text-xl">Dental App</span>
      </div>

      {/* Main Content */}
      <div className="pt-20 px-4">{children}</div>
    </div>
  );
};

export default Layout;
