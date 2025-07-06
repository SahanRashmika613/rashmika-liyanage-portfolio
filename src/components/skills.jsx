// src/components/Skills.jsx

import { Code, Brush, CheckCircle, Users } from "lucide-react";

export default function Skills() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl w-full px-8 z-10 relative">
        <h1 className="text-4xl font-bold mb-2 text-center">
          My <span className="text-pink-500">Skills</span>
        </h1>
        <div className="flex justify-center mb-8">
          <span className="block w-12 h-1 bg-pink-500 rounded"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full place-items-center">
          {/* Programming & Frameworks */}
          <div className="rounded-xl p-6 backdrop-blur-md bg-[#000000]/80 border border-white/10 hover:bg-white/10 transition w-full max-w-md h-full flex flex-col">
            <Code className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-bold mb-4">Programming & Frameworks</h2>
            <ul className="text-gray-300 text-sm space-y-2 flex-1">
              <li><strong>Languages:</strong> Python, Java, PHP</li>
              <li><strong>Web:</strong> HTML, CSS, JavaScript, JSON</li>
              <li><strong>Frameworks:</strong> Spring Boot, Laravel</li>
              <li><strong>Database:</strong> MySQL</li>
              <li><strong>Other Tools:</strong> Node.js</li>
            </ul>
          </div>

          {/* UI/UX Design Skills */}
          <div className="rounded-xl p-6 backdrop-blur-md bg-[#000000]/80 border border-white/10 hover:bg-white/10 transition w-full max-w-md h-full flex flex-col">
            <Brush className="h-8 w-8 text-orange-500 mb-4" />
            <h2 className="text-xl font-bold mb-4">UI/UX Design Skills</h2>
            <ul className="text-gray-300 text-sm space-y-2 flex-1">
              <li><strong>Tools:</strong> Figma</li>
              <li><strong>Research:</strong> User Research, Personas & Journey Mapping</li>
              <li><strong>Prototyping:</strong> Wireframing, Prototyping, User Flows</li>
              <li><strong>Evaluation:</strong> Usability Testing, Design Thinking</li>
            </ul>
          </div>

          {/* Testing & QA Skills */}
          <div className="rounded-xl p-6 backdrop-blur-md bg-[#000000]/80 border border-white/10 hover:bg-white/10 transition w-full max-w-md h-full flex flex-col">
            <CheckCircle className="h-8 w-8 text-purple-500 mb-4" />
            <h2 className="text-xl font-bold mb-4">Testing & QA Skills</h2>
            <ul className="text-gray-300 text-sm space-y-2 flex-1">
              <li><strong>Test Design:</strong> Test Design and Planning</li>
              <li><strong>Testing Types:</strong> Unit Testing, Integration Testing, UI Testing</li>
              <li><strong>Automation:</strong> Test Automation Principles</li>
            </ul>
          </div>

          {/* Soft & Language Skills */}
          <div className="rounded-xl p-6 backdrop-blur-md bg-[#000000]/80 border border-white/10 hover:bg-white/10 transition w-full max-w-md h-full flex flex-col">
            <Users className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-xl font-bold mb-4">Soft & Language Skills</h2>
            <ul className="text-gray-300 text-sm space-y-2 flex-1">
              <li><strong>Soft Skills:</strong> Communication, Teamwork, Collaboration, Problem Solving, Empathy for Users, Fast Learning</li>
              <li><strong>Languages:</strong> English (Good), Sinhala (Fluent)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}