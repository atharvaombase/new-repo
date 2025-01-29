import React from "react";

const Faculty = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-storm-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-neon mb-4">{role}</p>
        <div className="flex space-x-4"></div>
      </div>
    </div>
  );
};

export default Faculty;
