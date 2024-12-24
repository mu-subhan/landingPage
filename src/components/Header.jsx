import React, { useState } from "react";
import laptop from "../images/lp.png";
import person from "../images/abudullah.jpeg";

const navList = ["Home", "About", "Work", "Services", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the sidebar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full bg-gradient-to-b from-white to-blue-50 h-screen flex items-center justify-evenly">
      <div className="container flex sm:flex-row flex-col items-center gap-x-80">
        {/* Left Column: Text */}
        <div className="text-center sm:text-left sm:w-2/6 sm:border-r sm:border-gray-300 pr-6 sm:pr-16 mb-6 sm:mb-0">
          <span className="inline-block bg-white rounded-3xl text-gray-700 px-4 py-2 w-56 h-11 items-center text-sm mb-4">
            Attractive UI/UX Designs 🎨
          </span>
          <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold leading-snug text-[#078EF7]">
            Solving <span className="text-[#078EF7] underline">problem</span>{" "}
            first, then thoughtfully designing solutions.
          </h1>
          <button className="mt-6 px-6 py-3 bg-[#0e8ff1] text-white rounded-lg">
            Contact me
          </button>
        </div>

        {/* Right Column: Laptop Mockup */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={laptop}
              alt="Laptop design"
              className="w-[90%] sm:w-[80%] lg:w-[100%] max-w-[600px] drop-shadow-2xl"
            />
            {/* Designer Badge */}
            <div className="absolute top-28 left-[-110px] w-56 bg-white p-4 rounded-lg shadow-md flex items-center justify-center gap-4">
              <img
                src={person}
                alt="Designer"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Abdullah</p>
                <p className="text-xs text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 sm:px-16 py-4">
        <div className="text-3xl font-bold px-32">
          <span className="text-[#078EF7]">A</span>BDULLAH
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-24 text-gray-500">
          {navList.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[#078EF7] transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Menu */}
        <ul className="mt-16 space-y-4 px-8 text-gray-500">
          {navList.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[#078EF7] transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
