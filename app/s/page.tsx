// src/VerticalNavbar.js
'use client'
import React, { useState } from 'react';

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`bg-gray-800 p-4 ${isOpen ? 'w-20' : 'w-0'} fixed h-full transition-all duration-300 ease-in-out`}
      >
        <ul>
          <li className="mb-4">
            <a href="#" className="block p-2 text-center text-white">
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-2 text-center text-white">
              About
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-2 text-center text-white">
              Services
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="block p-2 text-center text-white">
              Contact
            </a>
          </li>
        </ul>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden transition-all duration-300 ease-in-out">
        <header className="bg-gray-200 p-4">
          <button onClick={toggleNavbar} className="text-gray-800">
            Toggle Navigation
          </button>
        </header>
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-300 p-4">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default VerticalNavbar;
