import { useState, useEffect } from "react";

// useScrollSpy hook implementation
function useScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useScrollSpy(
    ["home", "about", "skills", "services", "projects", "contact"],
    100
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu when a link is clicked
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileMenuClick = (e, id) => {
    e.preventDefault();
    // Close the menu immediately when clicking on mobile
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
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
                  onClick={(e) => handleLinkClick(e, id)}
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
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none z-50 relative bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-[#0a0a0a] bg-opacity-95 backdrop-blur-sm border-l border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-red-500 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pt-4">
          <h2 className="text-xl font-bold text-white mb-8 text-center">Navigation</h2>
          <ul className="space-y-2">
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleMobileMenuClick(e, id)}
                    className={`flex items-center justify-between text-lg font-medium py-4 px-4 rounded-lg transition-all duration-300 ${
                      activeId === id 
                        ? "text-red-500 bg-red-500 bg-opacity-15 border border-red-500 border-opacity-30" 
                        : "text-white hover:text-red-500 hover:bg-gray-800 hover:bg-opacity-50"
                    }`}
                  >
                    <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                    {/* Current section indicator */}
                    {activeId === id && (
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-red-400">Current</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                    )}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;