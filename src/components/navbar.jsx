// This is how your Hero/Home section should look
// Add this padding to your main content container or hero section

export default function Hero() {
  return (
    <div id="home" className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-8">
      {/* pt-20 on mobile, pt-24 on larger screens to account for navbar */}
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          I Am <span className="text-pink-500">Rashmika Liyanage</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-blue-400 mb-6">
          I'm a UI/UX Designer
        </p>
        
        <div className="text-gray-300 mb-8 leading-relaxed">
          <p>
            BEng (Hons) Software Engineering undergraduate at the 
            Informatics Institute of Technology (IIT), affiliated with the 
            University of Westminster.
          </p>
          <br />
          <p>
            Passionate about designing and building scalable, user-friendly 
            software solutions. Eager to apply my skills through an internship 
            and contribute to a high-performing team, leveraging my foundation 
            in full-stack development and problem-solving.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition-colors">
            View My Work
          </button>
          <button className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-full transition-colors">
            Download CV
          </button>
        </div>
        
        {/* Your profile image here */}
        <div className="flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/20">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Rashmika Liyanage" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}