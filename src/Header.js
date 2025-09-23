import React from 'react';
import emblem from '../assets/emblem.png'; // Adjust path if needed

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      <a href="/HomePage">
        <img src={emblem} alt="App Logo" style={{ height: '40px', width: 'auto' }} />
      </a>
    </div>
  );
};

export default Header;
