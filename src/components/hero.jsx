// src/components/Hero.jsx
import { useState, useEffect } from 'react';
import profileImage from "../assets/p.jpg";

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const professions = [
    'Software Engineer',
    'UI/UX Designer',
    'Quality Assurance Engineer'
  ];

  useEffect(() => {
    const currentProfession = professions[currentIndex];
    
    const typeSpeed = isDeleting ? 60 : 120; // Slower for more professional feel
    const pauseTime = isDeleting ? 500 : 2500; // Longer pause to read

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentProfession.length) {
          setDisplayText(currentProfession.substring(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(currentProfession.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next profession
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, professions]);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-12 md:py-12 min-h-screen"
    >
      {/* Left side: text */}
      <div className="flex flex-col gap-3 max-w-xl items-start">
        <p className="text-pink-500 text-xs md:text-sm font-bold tracking-widest">
          HELLO!
        </p>
        <h1 className="text-2xl md:text-5xl font-extrabold leading-tight relative w-fit whitespace-nowrap">
          I Am{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent relative">
            Rashmika Liyanage
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded opacity-70"></span>
          </span>
        </h1>
        
        {/* Professional Typing Effect */}
        <h2 className="text-base md:text-xl font-semibold mt-2 min-h-[1.5rem] md:min-h-[2rem]">
          I'm a{" "}
          <span className="text-purple-400">
            {displayText}
            <span className="animate-pulse text-pink-500">|</span>
          </span>
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          BEng (Hons) Software Engineering undergraduate at the Informatics
          Institute of Technology (IIT), affiliated with the University of Westminster.
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Passionate about designing and building scalable, user-friendly software
          solutions. Eager to apply my skills through an internship and contribute to
          a high-performing team, leveraging my foundation in full-stack development
          and problem-solving.
        </p>
        <div className="flex gap-4 mt-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-2 md:py-3 bg-gradient-to-r from-rose-700 to-red-700 rounded-full font-bold hover:opacity-90 transition"
          >
            View My Work
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 md:py-3 border border-purple-500 rounded-full font-bold hover:bg-stone-50 hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right side: profile photo */}
      <div className="relative mt-6 md:mt-0 md:ml-6 flex-shrink-0 flex items-center justify-center">
        <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_30px_#ff005533]">
          <img
            src={profileImage}
            alt="Sahan Rashmika"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}