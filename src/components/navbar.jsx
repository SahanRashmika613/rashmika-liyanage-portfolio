import { useState, useEffect } from "react";

// useScrollSpy hook implementation
function useScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 100;
      
      // Find the current section based on scroll position
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveId(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [manualActiveId, setManualActiveId] = useState(null);
  const scrollActiveId = useScrollSpy(
    ["home", "about", "skills", "services", "projects", "contact"],
    100
  );
  
  // Use manual active ID if set, otherwise use scroll spy
  const activeId = manualActiveId || scrollActiveId;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setManualActiveId(id); // Set active immediately
    
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Clear manual active ID after scrolling completes
      setTimeout(() => {
        setManualActiveId(null);
      }, 1000);
    }
  };

  const handleMobileMenuClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setManualActiveId(id); // Set active immediately
    
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Clear manual active ID after scrolling completes
      setTimeout(() => {
        setManualActiveId(null);
      }, 1000);
    }
  };

  return (
    <>
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
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-50 relative"
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
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] border-l border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <ul className="space-y-3">
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleMobileMenuClick(e, id)}
                    className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeId === id 
                        ? "text-red-500 bg-gray-800" 
                        : "text-white hover:text-red-500 hover:bg-gray-800"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                    {activeId === id && (
                      <span className="ml-2 text-xs text-red-400">● Current</span>
                    )}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;