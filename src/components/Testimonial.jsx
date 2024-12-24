import React from 'react';
import user from '../images/Ellipse.png';

const Testimonial = () => {
  return (
    <div className="bg-[#F3F3F3] px-6 md:px-20 lg:px-40 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Testimonials</h2>
      <div className="mb-5 w-full h-auto bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            src={user}
            alt="User"
          />
          <p className="text-gray-900 text-sm md:text-lg leading-6 md:leading-8 mt-4 text-center px-4 md:px-12 lg:px-32">
            Working with Abdullah was an excellent experience. He truly understands user needs and
            translates them into beautiful, functional designs. His creativity and attention to
            detail exceeded my expectations. Highly recommended!
          </p>
          <h2 className="font-bold text-lg md:text-2xl mt-6">Tim Beer</h2>
          <h2 className="text-zinc-400 text-sm md:text-base mt-2">Golf Course Manager</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
