import React from "react";
import { Menu, X, Code2, Github, Instagram, Linkedin } from "lucide-react";
// import { DynamicIcon } from "lucide-react/dynamic";
// import { GitHubAlt } from 'lucide-react';

const Navbar = ({ events, setEvent }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-storm-dark border-b border-neon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <Code2 className="h-8 w-8 text-neon" />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-neon hover:bg-storm-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#events"
                  className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium"
                >
                  Events
                </a>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
                <a
                  href="#connect"
                  className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
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
              {/* <DynamicIcon name="Instagram" color="red" size={48} />{" "} */}
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-storm-light focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-neon block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#events"
              className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            >
              Events
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>
            <a
              href="#join"
              className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            >
              Join Us
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
