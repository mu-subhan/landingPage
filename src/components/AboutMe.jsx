import React from "react";
import resume from "../images/resume.png";
import global from "../images/public.png";
import profile from "../images/abudullah.jpeg";
import star from "../images/starr.png"

const AboutMe = () => {
  return (
    <div className="bg-[#F3F3F3] py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="flex flex-col">
          <h4 className="text-3xl font-bold mb-6 text-gray-700">ABOUT ME</h4>
          <p className="text-gray-500 leading-relaxed mb-8">
            As a passionate UI designer, I bring creativity and precision to
            every pixel. With a deep understanding of user experience, I craft
            assets that not only look stunning but also function seamlessly
            across all platforms. My portfolio showcases my best work, available
            for you to purchase and implement into your projects.
          </p>
          <button className="px-6 py-3 bg-[#078EF7] text-white font-medium rounded-lg w-48">
            View My Work
          </button>
        </div>

        
        <div className="flex flex-col">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[350px] h-[600px] mb-6">
            <div className="mb-8">
              <img src={global} alt="Global Icon" className="w-6 h-6 mb-7 mr-3" />
              <h3 className="text-4xl font-bold text-gray-800">120%</h3>
            </div>
            <p className="text-gray-400 mb-5 text-2xl leading-8">
              Average increase in client <br /> engagement in the first 6 <br />months
            </p>
          <img
            src={profile}
            alt="Abdullah Tariq"
            className="w-full h-60 rounded-lg mt-28"
          />
          </div>
        </div>

              <div className="flex flex-col">
        
          <div className="bg-white  rounded-lg p-6 ">
            <img
              src={resume}
              alt="Resume"
              className="w-full h-auto rounded-md "
            />
          </div>
            <a
              href="../images/Muhammad_Subhan.pdf"
              download
              className="flex items-center mb-8 bg-gray-200 justify-center text-blue-500 font-medium hover:underline"
            >
              Download Resume
            </a>
        
          <div className=" py-6 mb-4 flex items-start gap-x-5 leading-8">
  <img src={star} alt="Star Icon" className="w-6 h-6 mt-1" />
  <p className="text-gray-500">
    With 2 years of experience, I specialize in creating intuitive,
    user-focused designs that solve real-world problems and deliver
    seamless digital experiences.
  </p>
</div>
<div className=" py-6 flex items-start gap-x-5 leading-8">
  <img src={star} alt="Star Icon" className="w-6 h-6 mt-1" />
  <p className="text-gray-500">
    I thrive on working closely with clients, blending creativity with
    strategy to bring their vision to life through thoughtful, impactful
    design solutions.
  </p>
</div>

        </div>
      </div>
      <div className="py-16">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-lg flex flex-col items-center gap-y-4" >
  <h3 className="text-gray-500 bg-slate-300 w-full h-12 text-lg mb-2 flex items-center justify-center">
    Years of Experience
  </h3>
  <p className="text-4xl font-bold text-gray-800">02+</p>
</div>


    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-lg flex flex-col gap-y-4 items-center">
      <p className="text-4xl font-bold text-gray-800 mt-4 mb-10">120+</p>
      <h3 className="text-gray-500 bg-slate-300 w-full h-12 text-lg flex items-center justify-center">Successful Projects</h3>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded-lg flex flex-col items-center gap-y-5">
      <h3 className="text-gray-500 bg-slate-300 w-full h-12 text-lg  flex items-center justify-center">Total Clients</h3>
      <p className="text-4xl font-bold text-gray-800">250+</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-md rounded-lg flex flex-col items-center gap-y-4">
      <p className="text-4xl font-bold text-gray-800 mt-4 mb-10">+80%</p>
      <h3 className="text-gray-500 bg-slate-300 w-full h-12 text-lg flex items-center justify-center">Client Revenue</h3>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutMe;
