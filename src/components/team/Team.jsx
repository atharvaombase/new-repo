import React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const teamMembers = [
    {
      name: "Aditya Konde",
      role: "President",
      imageUrl: "/assets/images/Aditya_Konde.jpg", // Updated path

      linkedin:
        "https://www.linkedin.com/in/adityakonde?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/_aditya.konde/profilecard/?igsh=MWV5Z3Z2amEwdDZ1Nw==",
    },
    {
      name: "Nikita Choudhary",
      role: "Vice President",
      imageUrl: "/assets/images/Nikita.jpg", // Updated path

      linkedin: "https://www.linkedin.com/in/nikita-choudhary2005",
      instagram: "",
    },
    {
      name: "Aditya Raje",
      role: "Technical Team",
      imageUrl: "/assets/images/Aditya_Raje.jpg", // Updated path

      linkedin: "https://linkedin.com",
      instagram: "https://www.instagram.com/a_y_r_0906/",
    },
    {
      name: "Atharva Ombase",
      role: "Technical Team",
      imageUrl: "/assets/images/Atharva.jpg", // Updated path

      linkedin:
        "https://www.linkedin.com/in/atharva-ombase-203a53239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "",
    },
    {
      name: "Kalhan Koul",
      role: "Social Media Head",
      imageUrl: "/assets/images/Kalhan.jpg", // Updated path

      linkedin:
        "https://www.linkedin.com/in/kalhan-koul-b85251298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/kalhan_koul23/profilecard/?igsh=aDZtcm93YWVib2I4",
    },
    {
      name: "Vinay Kotwal",
      role: "Event Management Head",
      imageUrl: "/assets/images/Vinay.jpg", // Updated path

      linkedin:
        "https://www.linkedin.com/in/vinay-kotwal718?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/_vinaykotwal/",
    },
    {
      name: "Nida Pathan",
      role: "Event Management Team",
      imageUrl: "/assets/images/Nida.jpg", // Updated path

      linkedin: "https://www.linkedin.com/in/nida-pathan-98b315289/",
      instagram: "https://www.instagram.com/nida_pathan10/",
    },
    {
      name: "Virendra Patil",
      role: "Event Management Team",
      imageUrl: "/assets/images/Virendra.jpg", // Updated path

      linkedin: "https://www.linkedin.com/in/virendra-patil-069399299",
      instagram: "https://www.instagram.com/virendra_100_/",
    },
    {
      name: "Pranav Khatade",
      role: "Design Head",
      imageUrl: "/assets/images/Pranav.jpg", // Updated path

      linkedin:
        "https://www.linkedin.com/in/pranav-khatade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/khatade_pranav/",
    },
    {
      name: "Anvesha Goyadani",
      role: "Design Team",
      imageUrl: "/assets/images/Anvesha.jpg", // Updated path

      linkedin:
        "https://www.linkedin.com/in/anvesha-goydani-b7b774293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:
        "https://www.instagram.com/who.anvesha?igsh=MTJ1dXpwdGEzNGFieA==",
    },

    // Add more team members here
  ];

  return (
    <section id="team" className="py-12 bg-storm-dark teamcontainer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          <span className="border-b-4 border-neon pb-2 uppercase tracking-wide">
            Our Team
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
