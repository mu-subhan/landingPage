import React from 'react';
import Header from './components/Header';

const LandingPage = () => {
  const handleScroll = () => {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center bg-[#FAFAFA] text-center relative"
      >
       <p className="text-black rounded-3xl bg-white w-44 h-10 flex items-center justify-center mb-4">
  Welcome here 👋
</p>

        <h1 className="text-2xl sm:text-4xl font-bold text-[#068EF7]
">
          Let’s turn your ideas into a <span className=" underline decoration">professional designs</span>
        </h1>
        <button
          onClick={handleScroll}
          className="mt-10 text-[#848484] flex items-center gap-2 text-xl font-medium hover:text-[#848484"
        >
          Scroll Down ↓
        </button>

        {/* Left Text */}
        <div className="absolute top-1/2 left-0 -rotate-90 text-gray-400 text-sm">
          Product Designs
        </div>
        

        {/* Bottom Year */}
        <div className="absolute bottom-4 left-4 text-gray-300 -rotate-90 text-sm">2025</div>
      </section>

      {/* Next Section */}
      <section
        id="next-section"
        className="h-screen flex justify-center items-center bg-gray-100 text-gray-700 text-2xl"
      >
       
        <Header/>
      </section>
    </div>
  );
};

export default LandingPage;
