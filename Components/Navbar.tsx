"use client";

import React, { use, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import {useRouter} from 'next/navigation';
import { toast } from 'react-hot-toast';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const router=useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const logout=()=>{
    setShow(true);
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
    router.push("/auth/login");
  };
  useEffect(() => {
    if(localStorage.getItem("token")){
      setShow(false);
    }else{
      setShow(true);
    }
  }, [logout,router]);
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
              <a href="/Doubt" className="py-5 px-3 text-white hover:text-gray-300">Doubt</a>
              <a href="/roadmap" className="py-5 px-3 text-white hover:text-gray-300">RoadMap</a>
            </div>
          </div>
          
          {show?(<>
            <div className="hidden md:flex items-center space-x-1">
            <a href="/auth/login" className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300">Login</a>
            <a href="/auth/signin" className="py-2 px-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition duration-300">Signup</a>
          </div></>):(<div className="hidden md:flex items-center space-x-1">
          <button className="py-2 px-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition duration-300" onClick={logout}>Logout</button>
          </div>)}
          
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
        <a href="/" className="block py-2 px-4 text-white hover:bg-gray-700">Home</a>
        <a href="/flashcard" className="block py-2 px-4 text-white hover:bg-gray-700">FlashCard</a>
        <a href="/Doubt" className="block py-2 px-4 text-white hover:bg-gray-700">Doubt</a>
        <a href="/Roadmap" className="block py-2 px-4 text-white hover:bg-gray-700">RoadMap</a>

        <div className="py-2 px-4 flex flex-col space-y-2">
          <a href="#" className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded transition duration-300">Login</a>
          <a href="#" className="py-2 px-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-center rounded transition duration-300">Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;