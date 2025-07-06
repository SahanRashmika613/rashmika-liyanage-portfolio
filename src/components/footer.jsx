// src/components/footer.jsx
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zinc-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Social Icons - Left side */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-110 p-3 rounded-full transition-all duration-300 transform"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110 p-3 rounded-full transition-all duration-300 transform"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110 p-3 rounded-full transition-all duration-300 transform"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://facebook.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110 p-3 rounded-full transition-all duration-300 transform"
            >
              <FaFacebook size={20} />
            </a>
          </div>

          {/* Copyright - Center */}
          <div className="text-center text-gray-400 text-sm">
            © 2025 Sahan Rashmika Liyanage. All Rights Reserved.
          </div>

          {/* Back to Top Button - Right side */}
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 hover:shadow-lg hover:shadow-red-500/50 hover:scale-110 p-3 rounded-full transition-all duration-300 transform"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="hover:animate-pulse" />
          </button>
        </div>
      </div>
    </footer>
  );
}