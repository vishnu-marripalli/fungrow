import React from "react";
import img from '../assests/funngro-logo.png'

import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube,
  User,
  Building2,
  Users,
  Info,
  HelpCircle,
  Shield,
  LogIn,
  BookOpen,
  Briefcase,
  DollarSign,
  PhoneCall,
  ArrowRight,
  Apple,
  PlayCircle
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    mainLinks: [
      { title: "Teen", icon: <User size={16} />, href: "#" },
      { title: "Company", icon: <Building2 size={16} />, href: "#" },
      { title: "Parent", icon: <Users size={16} />, href: "#" }
    ],
    support: [
      { title: "About us", icon: <Info size={16} />, href: "#" },
      { title: "FAQ", icon: <HelpCircle size={16} />, href: "#" },
      { title: "Privacy policy", icon: <Shield size={16} />, href: "#" },
      { title: "Login/Signup", icon: <LogIn size={16} />, href: "#" }
    ],
    resources: [
      { title: "Blogs", icon: <BookOpen size={16} />, href: "#" },
      { title: "Career", icon: <Briefcase size={16} />, href: "#" },
      { title: "Investors", icon: <DollarSign size={16} />, href: "#" },
      { title: "Contact us", icon: <PhoneCall size={16} />, href: "#" }
    ],
    socials: [
      { icon: <Linkedin size={24} />, href: "https://www.linkedin.com" },
      { icon: <Instagram size={24} />, href: "https://www.instagram.com" },
      { icon: <Twitter size={24} />, href: "https://twitter.com" },
      { icon: <Youtube size={24} />, href: "https://www.youtube.com" }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-600 text-sm mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-around">
          {/* Left Section */}
          <div className="flex flex-col max-w-sm">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img src={img} alt="Funngro Logo" className="w-56 mb-4" />
            </div>
            <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
              Enable Smart Teenagers and Smart Companies to realize their full
              potentials. It's fun to grow.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg 
                  hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                <Apple size={20} />
                <span>App Store</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg 
                  hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                <PlayCircle size={20} />
                <span>Play Store</span>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-3 gap-8 mt-8 md:mt-0">
            {/* Main Links */}
            <div className="space-y-4">
              {footerLinks.mainLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 group text-gray-600 hover:text-blue-600 
                    transition-colors duration-300"
                >
                  <span className="transform group-hover:rotate-12 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              {footerLinks.support.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 group text-gray-600 hover:text-blue-600 
                    transition-colors duration-300"
                >
                  <span className="transform group-hover:rotate-12 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Resource Links */}
            <div className="space-y-4">
              {footerLinks.resources.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 group text-gray-600 hover:text-blue-600 
                    transition-colors duration-300"
                >
                  <span className="transform group-hover:rotate-12 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {footerLinks.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transform hover:scale-125 
                    hover:rotate-6 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 flex items-center space-x-2 group">
              <span>&copy; All Copyrights reserved {new Date().getFullYear()} By FUNNGRO</span>
              <ArrowRight 
                size={12} 
                className="opacity-0 group-hover:opacity-100 transform -translate-x-2 
                  group-hover:translate-x-0 transition-all duration-300" 
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;