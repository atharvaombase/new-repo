import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Code2, Github, Instagram, Linkedin } from "lucide-react";

const Navbar = ({ events, setEvents }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleNavigation = (path, hash) => {
    navigate(path + hash);
    setIsOpen(false);
  };

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
                <Link
                  to="/"
                  className="text-neon hover:bg-storm-light px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <a
                  href="#events"
                  onClick={() => handleNavigation("/", "#events")}
                  className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium"
                >
                  Events
                </a>
                <a
                  href="#team"
                  onClick={() => handleNavigation("/", "#team")}
                  className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
                <Link
                  to="/forms"
                  className="text-gray-300 hover:text-neon px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact us
                </Link>
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
            <Link
              to="/"
              className="text-neon block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#events"
              onClick={() => handleNavigation("/", "#events")}
              className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            >
              Events
            </a>
            <a
              href="#team"
              onClick={() => handleNavigation("/", "#team")}
              className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>
            <Link
              to="/forms"
              className="text-gray-300 hover:text-neon block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
