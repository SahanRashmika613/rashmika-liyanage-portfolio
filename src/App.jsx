// src/App.jsx
import Navbar from "./components/navbar";
import Particle from "./components/Particle";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

// 👉 Add this import:
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="relative text-white">
      <Toaster position="top-right" /> {/* 🔥 Toasts appear here */}

      <Particle />
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex justify-center items-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="relative min-h-screen pt-24 pb-12 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-7xl px-6"><About /></div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative min-h-screen pt-24 pb-12 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-7xl px-6"><Skills /></div>
      </section>

      {/* Services */}
      <section id="services" className="relative min-h-screen pt-24 pb-12 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-7xl px-6"><Services /></div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative min-h-screen pt-24 pb-12 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-7xl px-6"><Projects /></div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative min-h-screen pt-24 pb-12 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-red-500/20 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-7xl px-6"><Contact /></div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <Footer />
      </footer>
    </div>
  );
}
