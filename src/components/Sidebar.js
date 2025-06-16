import React from 'react';
import { FaHome, FaMountain, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-forest-light p-4 rounded-r-lg shadow-lg z-50">
      <div className="flex flex-col space-y-6">
        <button 
          onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
          className="text-nature hover:text-white transition-colors flex items-center space-x-2"
        >
          <FaHome className="text-xl" />
          <span>Home</span>
        </button>
        
        <button 
          onClick={() => document.getElementById('mountains').scrollIntoView({ behavior: 'smooth' })}
          className="text-nature hover:text-white transition-colors flex items-center space-x-2"
        >
          <FaMountain className="text-xl" />
          <span>Mountains</span>
        </button>
        
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="text-nature hover:text-white transition-colors flex items-center space-x-2"
        >
          <FaEnvelope className="text-xl" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 