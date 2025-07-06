import { Code, Paintbrush, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen pt-24 pb-12 px-4 md:px-12 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          My <span className="text-red-500">Services</span>
        </h1>
        <span className="block mx-auto w-12 h-1 bg-red-500 rounded mb-8"></span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {/* UI/UX */}
          <div className="rounded-xl p-6 backdrop-blur-md bg-black/40 border border-white/10 hover:bg-white/10 transition text-left">
            <Paintbrush className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">UI/UX Design</h2>
            <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
              <li>Interactive & Animated UI Components</li>
              <li>Wireframing & Prototyping (Figma, Adobe XD)</li>
              <li>UI Design (modern, responsive layouts)</li>
              <li>UX Research (user flows, usability testing)</li>
              <li>Branding & Visual Design (color schemes, typography, icons)</li>
            </ul>
          </div>
          {/* Web */}
          <div className="rounded-xl p-6 backdrop-blur-md bg-black/40 border border-white/10 hover:bg-white/10 transition text-left">
            <Code className="h-8 w-8 text-orange-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Web Development</h2>
            <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
              <li>Custom Website Development (React.js, HTML, CSS, JavaScript)</li>
              <li>Full-Stack Development (React + Node.js, Express.js / Spring Boot)</li>
              <li>Backend Development (APIs, databases - MySQL, MongoDB, PostgreSQL)</li>
              <li>E-Commerce Development (payment integrations, shopping carts)</li>
              <li>Performance Optimization (faster load times, SEO-friendly)</li>
            </ul>
          </div>
          {/* QA */}
          <div className="rounded-xl p-6 backdrop-blur-md bg-black/40 border border-white/10 hover:bg-white/10 transition text-left">
            <ShieldCheck className="h-8 w-8 text-purple-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Quality Assurance</h2>
            <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
              <li>Test Planning & Strategy</li>
              <li>Manual Testing (functional, UI, user flows)</li>
              <li>Unit & Integration Testing (JUnit, PyTest, Jest)</li>
              <li>Basic Automation (Selenium, Cypress)</li>
              <li>Bug Reporting & Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
