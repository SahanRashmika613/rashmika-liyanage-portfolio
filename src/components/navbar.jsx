import { useState } from "react";
import { Menu, X } from "lucide-react";
import useScrollSpy from "../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(
    ["home", "about", "skills", "services", "projects", "contact"],
    100
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    setIsMenuOpen(false); // Close menu when clicking a nav item
    // Smooth scroll to section
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#0a0a0a] text-white fixed w-full top-0 z-50 shadow border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Sahan Rashmika Liyanage
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-lg font-medium">
          {["home", "about", "skills", "services", "projects", "contact"].map(
            (id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative ${
                    activeId === id ? "text-red-500" : ""
                  } after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-red-500 ${
                    activeId === id ? "after:w-full" : "after:w-0"
                  } hover:after:w-full after:transition-all after:duration-300`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-gray-700 shadow-lg">
          <ul className="flex flex-col py-2">
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`w-full text-left px-4 py-3 text-lg font-medium hover:bg-gray-800 transition-colors ${
                      activeId === id ? "text-red-500 bg-gray-800" : ""
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;