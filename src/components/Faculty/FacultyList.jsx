import React from "react";
import Faculty from "./Faculty";

const FacultyList = () => {
  const FacultyInfo = [
    {
      name: "Aditya Konde",
      role: "President",
      imageUrl: "assets/Faculty images/1.jpg",
    },
    {
      name: "Nikita Choudhary",
      role: "Vice President",
      imageUrl: "assets/Faculty images/2.jpg",
    },
    {
      name: "Aditya Raje",
      role: "Technical Team",
      imageUrl: "assets/Faculty images/3.jpg",
    },
    {
      name: "Atharva Ombase",
      role: "Technical Team",
      imageUrl: "assets/Faculty images/4.jpg",
    },
    //
  ];

  return (
    <section id="team" className="py-12 bg-storm-dark teamcontainer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
            Faculty
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FacultyInfo.map((FacultyObj, index) => (
            <Faculty key={index} {...FacultyObj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyList;
