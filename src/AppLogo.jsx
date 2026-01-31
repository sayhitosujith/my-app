import React from "react";
import logo from "../assets/DutyDentist.png";

const AppLogo = ({ className = "" }) => {
  return (
    <img
      src={logo}
      alt="App Logo"
      className={`absolute top-4 left-4 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain z-20 ${className}`}
    />
  );
};

export default AppLogo;
