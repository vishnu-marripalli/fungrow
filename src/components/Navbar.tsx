// import React, { useState } from "react";

// const Navbar: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-100 border-b border-gray-200">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="#" className="text-lg font-semibold text-gray-900">
//               Fungrow
//             </a>
//           </div>

//           {/* Hamburger Menu */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//             <div className="flex flex-row gap-10">
//           {/* Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
//               Teen
//             </a>
//             <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
//               Company
//             </a>
//             <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
//               Parent
//             </a>
//           </div>

//           {/* Icons & Button */}
//           <div className="hidden md:flex items-center space-x-4">
//             <img src="apple icon.png" alt="Apple Icon" className="w-5 h-5" />
//             <img src="android icon.png" alt="Android Icon" className="w-5 h-5" />
//             <a
//               href="#"
//               className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
//             >
//               Company Login →
//             </a>
//           </div>
//         </div>
//         </div>
//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden">
//             <a
//               href="#"
//               className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
//             >
//               Teen
//             </a>
//             <a
//               href="#"
//               className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
//             >
//               Company
//             </a>
//             <a
//               href="#"
//               className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
//             >
//               Parent
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;










import React, { useState, useEffect } from "react";
import img from '../assests/funngro-logo.png'

import { 
  Menu, 
  X, 
  ChevronRight, 
  Apple, 
  Smartphone, 
  Users, 
  Building2, 
  User 
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Teen", icon: <User size={18} />, href: "#" },
    { title: "Company", icon: <Building2 size={18} />, href: "#" },
    { title: "Parent", icon: <Users size={18} />, href: "#" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
      ${scrolled 
        ? 'bg-white shadow-md'
        : 'bg-gray-100 border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
             <img src={img} alt="" className="h-10" />
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Links */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-600 
                    hover:text-blue-600 transition-colors duration-200 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transform 
                    group-hover:translate-x-0 -translate-x-2 transition-all duration-200">
                    {link.icon}
                  </span>
                  <span>{link.title}</span>
                </a>
              ))}
            </div>

            {/* Icons & Button */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Apple size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Smartphone size={20} />
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg 
                  hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 
                  flex items-center space-x-1"
              >
                <span>Company Login</span>
                <ChevronRight size={16} className="animate-bounce-x" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 
                  hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {link.icon}
                <span>{link.title}</span>
              </a>
            ))}
            <div className="flex items-center space-x-4 px-4 py-2">
              <Apple size={20} className="text-gray-600" />
              <Smartphone size={20} className="text-gray-600" />
            </div>
            <a
              href="#"
              className="block mx-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium 
                rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Company Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;