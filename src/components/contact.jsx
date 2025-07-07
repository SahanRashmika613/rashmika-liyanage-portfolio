import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { toast } from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // 📌 Validation logic
  const validate = (data) => {
    const errors = {};
    if (!data.get("user_name")) errors.user_name = "Name is required.";
    const email = data.get("user_email");
    if (!email) errors.user_email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) errors.user_email = "Invalid email format.";
    if (!data.get("message")) errors.message = "Message cannot be empty.";
    return errors;
  };

  // 📤 Form submit
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      if (errors.user_name) toast.error(errors.user_name);
      if (errors.user_email) toast.error(errors.user_email);
      if (errors.message) toast.error(errors.message);
      return;
    }

    setLoading(true);

    emailjs.sendForm(
      'service_19f00xl',
      'template_tfcq1fl',
      form.current,
      'jNNjieGN5iWyeTuj4'
    )
    .then((result) => {
        console.log("Message sent:", result.text);
        toast.success("✅ Your message has been sent!");
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 5000);
    }, (error) => {
        console.error("Error:", error.text);
        toast.error("❌ Something went wrong. Please try again.");
    })
    .finally(() => {
        setLoading(false);
    });
  };

  // 📧 Handle email click
  const handleEmailClick = () => {
    window.open('mailto:rashmikaliyanage2001@gmail.com', '_blank');
  };

  // 📱 Handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/qr/3UZW5L4UVWZYD1', '_blank');
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-8 z-10 relative">
        {/* Title with underline */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Get In <span className="text-green-500">Touch</span>
        </h1>
        <div className="flex justify-center mb-8 sm:mb-12">
          <span className="block w-12 h-1 bg-pink-500 rounded"></span>
        </div>

        {/* Two Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form Card */}
          <div className="rounded-xl p-6 sm:p-8 bg-black/80 border border-white/10 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative group">
            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">Send me a message</h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm sm:text-base"
              />

              <textarea
                name="message"
                placeholder="Tell me about your project or just say hello!"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-rose-600 disabled:bg-yellow-400 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <Send className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${loading ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <p className="text-green-400 text-center mt-4">
                  ✅ Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="rounded-xl p-6 sm:p-8 bg-black/80 border border-white/10 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative group">
            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">Contact Information</h2>

            <div className="space-y-6 sm:space-y-8">
              {/* Email - Clickable */}
              <div 
                onClick={handleEmailClick}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group cursor-pointer transform hover:scale-105"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-red-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-2 sm:p-3 rounded-full bg-pink-500/20 text-pink-500 flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-300 text-sm sm:text-base break-all">rashmikaliyanage2001@gmail.com</p>
                  <p className="text-xs text-gray-400 mt-1">Click to send email</p>
                </div>
              </div>

              {/* Phone/WhatsApp - Clickable */}
              <div 
                onClick={handleWhatsAppClick}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group cursor-pointer transform hover:scale-105"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-2 sm:p-3 rounded-full bg-blue-500/20 text-blue-500 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300 text-sm sm:text-base">+94 77 218 8610</p>
                  <p className="text-xs text-gray-400 mt-1">Click to chat on WhatsApp</p>
                </div>
              </div>

              {/* Location - Not clickable */}
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-2 sm:p-3 rounded-full bg-orange-500/20 text-orange-500 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg bg-black/60 border border-white/10 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-xs sm:text-sm text-gray-300 text-center">
                I typically respond within 24 hours. Available for freelance projects and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}