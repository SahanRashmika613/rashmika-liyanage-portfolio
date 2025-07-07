// src/components/projects.jsx
import { useState } from "react";
import { Code, ClipboardList, GraduationCap, CheckSquare } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Post-harvest Farmer Buyer Network System",
      status: "Completed",
      icon: <ClipboardList className="h-8 w-8 text-pink-500" />,
      description:
        "AgriMart is a mobile application designed to connect farmers and buyers within the agricultural ecosystem. It includes an AI-driven price prediction model for vegetables, achieving 93% accuracy. The app features a Django backend, Flutter frontend, and Firebase database.",
      tech: ["Flutter", "Django", "Firebase"],
      github: "https://github.com/agrimart44/AgriMart.git"
    },
    {
      id: 2,
      title: "Real-Time Ticketing Simulation System",
      status: "Completed",
      icon: <CheckSquare className="h-8 w-8 text-orange-500" />,
      description:
        "This system simulates a dynamic ticketing environment, built with Spring Boot backend, React.js frontend, and MySQL database to store configurations.",
      tech: ["Spring Boot", "React.js", "MySQL"],
      github: "https://github.com/SahanRashmika613/OOP-.git"
    },
    {
      id: 3,
      title: "Student Management System",
      status: "Completed",
      icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
      description:
        "A Java console application to manage student records, with validation, text-based persistent storage, report generation, and sorting algorithms like merge sort.",
      tech: ["Java", "File I/O", "Sorting", "Exception Handling", "OOP"],
      github: "https://github.com/SahanRashmika613/Student-Management-System.git"
    },
    {
      id: 4,
      title: "Personal Task Manager",
      status: "Completed",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      description:
        "A Python desktop app evolved from CLI to Tkinter GUI, using JSON for storage, supporting task creation, updates, and object-oriented design.",
      tech: ["Python", "Tkinter", "JSON", "OOP"],
      github: "https://github.com/SahanRashmika613/Personal-Task-Manager-.git"
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen pt-24 pb-12 px-4 md:px-12 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          My <span className="text-pink-500">Projects</span>
        </h1>
        <span className="block mx-auto w-12 h-1 bg-pink-500 rounded mb-8"></span>

        {/* grid of project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl p-6 bg-black/80 border border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(0,0,255,0.5)] relative cursor-pointer transition duration-300 group"
              onClick={() => setSelectedProject(project)}
            >
              {/* top border line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition"></div>

              {project.icon}
              <h2 className="text-xl font-bold mt-4 mb-2">{project.title}</h2>
              <span className="inline-block mt-2 text-xs px-2 py-1 bg-green-600 rounded">
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex justify-center items-center z-50">
          <div className="bg-black rounded-xl p-8 max-w-xl relative border border-purple-500 shadow-xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-white hover:text-pink-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-extrabold text-purple-500 mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-pink-500/20 px-2 py-1 rounded text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-red-600 px-4 py-2 rounded hover:bg-green-600 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
}