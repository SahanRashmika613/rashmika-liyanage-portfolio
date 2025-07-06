// src/components/About.jsx
import { GraduationCap, Laptop, Rocket, X } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [selectedCard, setSelectedCard] = useState(null);

  const closeModal = () => {
    setSelectedCard(null);
  };

  const cardData = {
    education: {
      title: "Education",
      icon: <GraduationCap className="h-12 w-12 text-pink-500 mb-6 mx-auto" />,
      fullDescription: `I am currently pursuing a Bachelor of Engineering (Honours) in Software Engineering at the Informatics Institute of Technology (IIT), which is affiliated with the University of Westminster. This comprehensive program has provided me with a strong foundation in software development principles, programming languages, and modern development methodologies.

Throughout my academic journey, I have gained extensive knowledge in various programming languages including Java, Python, JavaScript, and mobile development frameworks like Flutter. The curriculum has covered essential topics such as data structures, algorithms, software engineering principles, database management, and web development technologies.
`
    },
    experience: {
      title: "Experience",
      icon: <Laptop className="h-12 w-12 text-orange-500 mb-6 mx-auto" />,
      fullDescription: `I have gained valuable experience through various roles and projects that have shaped my professional development:

**Professional Experience:**
• Worked at SLT Mobitel as a Customer Service Representative, where I improved my communication and problem-solving skills while strengthening my ability to understand user needs and deliver quality service.

**Project Development:**
• Built AgriMart, a comprehensive post-harvest platform where I designed wireframes and created a Figma prototype, then developed the frontend using Flutter and backend with Django/Firebase.

• Created a real-time ticketing system using React.js for the frontend and Spring Boot for the backend, successfully connecting both through REST APIs.

• Developed a Java-based student management system applying object-oriented principles and best practices.

• Built a personal task manager using Python and Tkinter with an intuitive user-friendly GUI.

**Technical Skills Development:**
Through these projects, I have developed proficiency in multiple programming languages and frameworks including Java, Python, Flutter, React.js, Spring Boot, Django, and Firebase. This diverse experience has enhanced both my technical capabilities and soft skills through practical application.`
    },
    passion: {
      title: "Passion",
      icon: <Rocket className="h-12 w-12 text-purple-500 mb-6 mx-auto" />,
      fullDescription: `I am deeply passionate about leveraging technology to create meaningful impact in people's lives. My drive comes from the belief that software can be a powerful tool for positive change when built with purpose and care.

**What Motivates Me:**
I find immense satisfaction in the process of understanding complex problems, thinking creatively about solutions, and transforming ideas into functional software applications. The challenge of turning abstract concepts into tangible, working solutions is what energizes me every day.

**My Approach:**
Whether I'm in the planning phase, actively coding, or conducting thorough testing, I enjoy every aspect of the development process. I believe that great software is born from attention to detail and a deep understanding of user needs.

**Continuous Learning:**
I'm constantly curious about new technologies, tools, and techniques that can improve my projects and expand my capabilities. The rapidly evolving nature of technology means there's always something new to learn, which keeps me engaged and motivated.

**Real-World Impact:**
My experience working on practical projects has reinforced my belief in the transformative power of well-designed software. I'm particularly drawn to projects that can make life easier, more efficient, or more enjoyable for end users.

This passion drives me to not just write code, but to create solutions that truly matter.`
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-24 pb-12 px-4 md:px-12 flex flex-col justify-center items-center"
    >
      <div className="relative w-full text-center z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          About <span className="text-pink-500">Me</span>
        </h1>
        <span className="block mx-auto w-12 h-1 bg-pink-500 rounded mb-8"></span>

        {/* Three Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {Object.entries(cardData).map(([key, card]) => (
            <div
              key={key}
              className="rounded-xl p-8 backdrop-blur-md bg-black/40 border border-white/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              {card.icon}
              <h2 className="text-2xl font-bold mb-6 text-center">{card.title}</h2>
              <p className="text-gray-300 text-base text-center leading-relaxed mb-6 flex-grow">
                {card.shortDescription}
              </p>
              <button
                onClick={() => setSelectedCard(key)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 mx-auto block mt-auto"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
              {cardData[selectedCard].icon}
              <h2 className="text-3xl font-bold text-white mb-4">
                {cardData[selectedCard].title}
              </h2>
            </div>

            <div className="text-gray-300 text-left leading-relaxed space-y-4">
              {cardData[selectedCard].fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line.startsWith('**') && line.endsWith('**') ? (
                        <strong className="text-white font-semibold">
                          {line.slice(2, -2)}
                        </strong>
                      ) : line.startsWith('•') ? (
                        <span className="block ml-4 mb-2">
                          <span className="text-pink-500 mr-2">•</span>
                          {line.slice(2)}
                        </span>
                      ) : (
                        line
                      )}
                      {lineIndex < paragraph.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            {/* Optional: Add action buttons */}
            <div className="flex justify-center mt-8">
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}