// src/components/contact.jsx

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full px-8 z-10 relative">
        {/* Title with underline */}
        <h1 className="text-4xl font-bold mb-2 text-center">
          Get In <span className="text-green-500">Touch</span>
        </h1>
        <div className="flex justify-center mb-12">
          <span className="block w-12 h-1 bg-pink-500 rounded"></span>
        </div>

        {/* Two Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Card */}
          <div className="rounded-xl p-8 bg-black/80 border border-white/10 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative group">
            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Send me a message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
              
              <textarea
                placeholder="Tell me about your project or just say hello!"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="rounded-xl p-8 bg-black/80 border border-white/10 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative group">
            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-3 rounded-full bg-pink-500/20 text-pink-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">rashmikaliyanage2001@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+94 77 218 8610</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-3 rounded-full bg-orange-500/20 text-orange-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-sm text-gray-300 text-center">
                I typically respond within 24 hours. Available for freelance projects and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}