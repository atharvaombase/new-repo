import React from "react";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleEmailClick = () => {
    // Open Gmail in a new tab
    const gmailTab = window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=contact@codestorm.org&su=&body=",
      "_blank"
    );

    // After opening Gmail, navigate to the next page (this will happen in the current tab)
    window.location.href = "/next-page"; // Replace with your target URL
  };

  return (
    <footer className="bg-storm-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">CodeStorm</h3>
            <p className="text-gray-400">
              Empowering students through technology and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-neon" />
                <button
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-neon"
                >
                  contact@codestorm.org
                </button>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-neon" />
                <span>Computer Science Department</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href=""
                className="text-gray-300 hover:text-neon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://www.instagram.com/codestorm_official/"
                className="text-gray-300 hover:text-neon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/codestorm-club-mescoe/posts/?feedView=all"
                className="text-gray-300 hover:text-neon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CodeStorm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
