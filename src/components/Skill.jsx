import React from "react";
import user from "../images/profile.png";
import brush from "../images/brush-2.png";
import bubble from "../images/bubble.png";
import emoji from "../images/emoji-normal.png";
import mouse from "../images/mouse-square.png";
import pen from "../images/pen-tool.png";

const Skill = () => {
  return (
    // <div className="bg-white p-8 md:p-16">
    //   <h2 className="text-2xl md:text-4xl font-bold mb-4">SKILLS & EXPERIENCE</h2>
    //   <p className="text-gray-600 mb-8">
    //     I'm a skilled UI/UX designer proficient in Figma, Adobe XD, Photoshop, and Illustrator. 
    //     With expertise in prototyping and graphic design, I bring creativity and functionality to 
    //     every project. Let's collaborate to create engaging user experiences.
    //   </p>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //     {/* Skills Section */}
    //     <div className="space-y-6">
    //       <div className="flex items-center gap-4">
    //         <img src={brush} alt="User Research" className="w-10 h-10" />
    //         <span>User Research</span>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <img src={mouse} alt="Wireframe" className="w-10 h-10" />
    //         <span>Wireframe</span>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <img src={emoji} alt="Style Guide" className="w-10 h-10" />
    //         <span>Style Guide</span>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <img src={bubble} alt="Prototype" className="w-10 h-10" />
    //         <span>Prototype</span>
    //       </div>
    //     </div>

    //     {/* Progress Bars Section */}
    //     <div>
    //       {[
    //         { title: "Web UI/UX Design", percentage: 85 },
    //         { title: "Mobile App UI/UX Design", percentage: 78 },
    //         { title: "Dashboard & SaaS UI/UX Design", percentage: 92 },
    //       ].map((skill, index) => (
    //         <div key={index} className="mb-6">
    //           <div className="flex justify-between">
    //             <span>{skill.title}</span>
    //             <span>{skill.percentage}%</span>
    //           </div>
    //           <div className="w-full bg-gray-200 rounded-full h-4">
    //             <div
    //               className="bg-blue-500 h-4 rounded-full"
    //               style={{ width: `${skill.percentage}%` }}
    //             ></div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-row px-80 bg-[#F3F3F3] py-12 justify-between">
      <div className="grid grid-cols-1 w-[450px]">
        <h2 className="text-3xl font-bold">SKILLS & EXPERIENCE</h2>
        <p className="mt-5 leading-7">I'm a skilled UI/UX designer proficient in Figma, Adobe XD, Photoshop, and Illustrator. 
         With expertise in prototyping and graphic design, I bring creativity and functionality to 
        every project. Let's collaborate to create engaging user experiences.</p>

        <div className="grid grid-cols-3 py-24 gap-10">
          <div className="flex flex-col">
            <img src={user} className="w-8 h-8 bg-gray-200 rounded-full"/>
            <h2 className="mt-2 text-gray-600">User Research</h2>
          </div>

          <div className="flex flex-col">
            <img src={emoji} className="w-8 h-8"/>
            <h2 className="mt-2 text-gray-600">Wireframe</h2>
          </div>

          <div className="flex flex-col">
            <img src={bubble} className="w-8 h-8"/>
            <h2 className="mt-2 text-gray-600">Style Guide</h2>

          </div>

          <div className="flex flex-col">
            <img src={pen} className="w-8 h-8"/>
            <h2 className="mt-2 text-gray-600">User Experiene Design</h2>

          </div>

          <div className="flex flex-col">
            <img src={brush} className="w-8 h-8"/>
            <h2 className="mt-2 text-gray-600">Visual Design</h2>

          </div>

          <div className="flex flex-col">
            <img src={mouse} className="w-8 h-8"/>
            <h2 className="mt-2 text-gray-600">Prototype</h2>
            
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  space-y-4">
  {[
    { title: "WEB UI/UX DESIGN", percentage: 85 },
    { title: "MOBILE APP UI/UX DESIGN", percentage: 78 },
    { title: "DASHBOARD & SAAS UI/UX DESIGN", percentage: 92 },
  ].map((skill, index) => (
    <div key={index}>
      
      <h2 className="text-2xl font-bold mb-2">{skill.title}</h2>

      
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
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
