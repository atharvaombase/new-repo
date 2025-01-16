import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const TeamMember = ({ name, role, imageUrl, github, linkedin, instagram }) => {
  return (
    <div className="bg-storm-dark rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-neon mb-4">{role}</p>
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon"
            >
              <Github className="w-5 h-5" />  
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
