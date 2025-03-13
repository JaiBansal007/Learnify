"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-white">
                <span className="font-bold text-xl">Learnify</span>
              </a>
            </div>
            
            {/* Primary Nav (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 text-white hover:text-gray-300">Home</a>
              <a href="/flashcard" className="py-5 px-3 text-white hover:text-gray-300">FlashCard</a>
            </div>
          </div>
          
          {/* Secondary Nav (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="/auth/login" className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300">Login</a>
            <a href="/auth/signin" className="py-2 px-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition duration-300">Signup</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Home</a>
        <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Features</a>
        <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">About</a>
        <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Contact</a>
        <div className="py-2 px-4 flex flex-col space-y-2">
          <a href="#" className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded transition duration-300">Login</a>
          <a href="#" className="py-2 px-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-center rounded transition duration-300">Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;