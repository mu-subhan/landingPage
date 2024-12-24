import React from "react";
import user from "../images/profile.png";
import brush from "../images/brush-2.png";
import bubble from "../images/bubble.png";
import emoji from "../images/emoji-normal.png";
import mouse from "../images/mouse-square.png";
import pen from "../images/pen-tool.png";

const Skill = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-20 bg-[#F3F3F3] py-12 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold">SKILLS & EXPERIENCE</h2>
        <p className="mt-5 leading-7 text-gray-700">
          I'm a skilled UI/UX designer proficient in Figma, Adobe XD, Photoshop, and Illustrator. With
          expertise in prototyping and graphic design, I bring creativity and functionality to every
          project. Let's collaborate to create engaging user experiences.
        </p>

        {/* Skill Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-12">
          {[
            { img: user, title: "User Research" },
            { img: emoji, title: "Wireframe" },
            { img: bubble, title: "Style Guide" },
            { img: pen, title: "User Experience Design" },
            { img: brush, title: "Visual Design" },
            { img: mouse, title: "Prototype" },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={skill.img}
                alt={skill.title}
                className="w-10 h-10 bg-gray-200 rounded-full p-2"
              />
              <h2 className="mt-2 text-gray-600 text-sm font-medium">{skill.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 space-y-8">
        {[
          { title: "WEB UI/UX DESIGN", percentage: 85 },
          { title: "MOBILE APP UI/UX DESIGN", percentage: 78 },
          { title: "DASHBOARD & SAAS UI/UX DESIGN", percentage: 92 },
        ].map((skill, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold mb-2">{skill.title}</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <div className="text-right mt-1 text-gray-600 text-sm">
              {skill.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
