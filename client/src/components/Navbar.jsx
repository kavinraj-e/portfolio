import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full">.dev</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-green-600">Home</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#portfolio" className="hover:text-green-600">Projects</a></li>
          <li><a href="#service" className="hover:text-green-600">Service</a></li>
         
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full">
          Resume
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-6 bg-white text-gray-700 font-medium">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="/portfolio" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#service" onClick={() => setMenuOpen(false)}>Service</a></li>
          
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
