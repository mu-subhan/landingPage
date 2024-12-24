import React from 'react';
import picture from '../images/abudullah.jpeg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t mt-16 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        {/* Profile Section */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={picture}
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg md:text-xl font-semibold">Let’s Chat_</h3>
          <p className="text-sm text-gray-600 mt-2">
            Feel free to contact us if you’d like to chat. Drop us a message anytime!
          </p>
        </div>

        {/* Pages Section */}
        <div>
          <h4 className="text-lg font-medium mb-4">Pages</h4>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Inner Pages Section */}
        <div>
          <h4 className="text-lg font-medium mb-4">Inner Pages</h4>
          <ul className="space-y-2 text-sm md:text-base">
            <li>About Single</li>
            <li>Project Single</li>
            <li>Service Single</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h4 className="text-lg font-medium mb-4">Socials</h4>
          <ul className="space-y-2 text-sm md:text-base">
            <li>LinkedIn</li>
            <li>Behance</li>
            <li>Dribbble</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
          <p className="mt-4 text-blue-500 font-medium text-sm md:text-base">
            abdullahtariq4902@gmail.com
          </p>
          <p className="text-sm text-gray-600 mt-2">
            +92-3095370965 - +92-248579971
            <br />
            Pakistan, Lahore, Sabzazar
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center text-sm">
        <p className="text-gray-500">© 2024. All Rights Reserved</p>
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white mt-4 lg:mt-0 p-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
