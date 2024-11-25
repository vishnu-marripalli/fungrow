import React from "react";
import { DollarSign, Target, BookOpen, Award } from "lucide-react";

const WhyWorkInTeens: React.FC = () => {
  const reasons = [
    {
      icon: <DollarSign className="w-12 h-12 text-indigo-600" />,
      title: "First income",
      description: "Work with real companies and Earn money",
    },
    {
      icon: <Target className="w-12 h-12 text-indigo-600" />,
      title: "Passion",
      description: "Make your passion as your profession",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-indigo-600" />,
      title: "Learning",
      description: "Experiential Learning by working on real projects",
    },
    {
      icon: <Award className="w-12 h-12 text-indigo-600" />,
      title: "Certification",
      description: "Build your profile by getting experience certificates",
    },
  ];

  return (
    <div className="flex flex-col items-center px-5 py-10 bg-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black mb-4">
          Why work in your Teens?
        </h1>
        <p className="text-lg text-gray-700">
          Warren Buffet, Bill Gates, Steve Jobs, all started working in their Teens, do you need a better reason?
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {reason.title}
            </h3>
            <p className="text-sm text-gray-700">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkInTeens;




// import React from "react";
// import { 
//   DollarSign, 
//   Target, 
//   BookOpen, 
//   Award, 
//   ArrowRight, 
//   Star,
//   TrendingUp
// } from "lucide-react";

// const WhyWorkInTeens = () => {
//   const reasons = [
//     {
//       icon: <DollarSign className="w-12 h-12 group-hover:text-green-500 transition-colors duration-300" />,
//       title: "First income",
//       description: "Work with real companies and Earn money",
//       color: "from-green-50 to-green-100",
//       hoverBorder: "hover:border-green-500",
//       stats: "500+ teens earning"
//     },
//     {
//       icon: <Target className="w-12 h-12 group-hover:text-red-500 transition-colors duration-300" />,
//       title: "Passion",
//       description: "Make your passion as your profession",
//       color: "from-red-50 to-red-100",
//       hoverBorder: "hover:border-red-500",
//       stats: "12+ career paths"
//     },
//     {
//       icon: <BookOpen className="w-12 h-12 group-hover:text-blue-500 transition-colors duration-300" />,
//       title: "Learning",
//       description: "Experiential Learning by working on real projects",
//       color: "from-blue-50 to-blue-100",
//       hoverBorder: "hover:border-blue-500",
//       stats: "100+ skills to learn"
//     },
//     {
//       icon: <Award className="w-12 h-12 group-hover:text-purple-500 transition-colors duration-300" />,
//       title: "Certification",
//       description: "Build your profile by getting experience certificates",
//       color: "from-purple-50 to-purple-100",
//       hoverBorder: "hover:border-purple-500",
//       stats: "Verified certificates"
//     },
//   ];

//   const successStories = [
//     "Warren Buffet",
//     "Bill Gates",
//     "Steve Jobs"
//   ];

//   return (
//     <div className="flex flex-col items-center my-40 md:my-0 px-8 py-16 bg-gradient-to-b from-gray-50 to-white">
//       {/* Header Section */}
//       <div className="text-center mb-16 max-w-3xl relative">
//         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
//           <TrendingUp className="w-8 h-8 text-blue-500 animate-bounce" />
//         </div>
        
//         <h1 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
//           Why work in your Teens?
//           <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
//         </h1>
        
//         <p className="text-lg text-gray-600 leading-relaxed mb-8">
//           {successStories.map((name, index) => (
//             <span key={name} className="relative inline-flex items-center mx-2 group">
//               <span className="font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
//                 {name}
//               </span>
//               {index < successStories.length - 1 && 
//                 <span className="mx-2 text-gray-400">,</span>
//               }
//             </span>
//           ))}
//           <span className="block mt-2">
//             all started working in their Teens, do you need a better reason?
//           </span>
//         </p>

//         <div className="flex justify-center items-center space-x-2">
//           <Star className="w-5 h-5 text-yellow-400" />
//           <span className="text-gray-600">Join the league of extraordinary teens</span>
//           <Star className="w-5 h-5 text-yellow-400" />
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
//         {reasons.map((reason, index) => (
//           <div
//             key={index}
//             className={`group flex flex-col items-center text-center p-8 
//               bg-gradient-to-br ${reason.color} rounded-xl shadow-lg 
//               hover:shadow-2xl transform hover:-translate-y-2 transition-all 
//               duration-300 border-2 border-transparent ${reason.hoverBorder}
//               cursor-pointer relative overflow-hidden`}
//           >
//             {/* Icon Container */}
//             <div className="mb-6 p-4 bg-white rounded-full transform group-hover:scale-110 
//               group-hover:rotate-6 transition-transform duration-300 shadow-md">
//               {reason.icon}
//             </div>

//             {/* Content */}
//             <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 
//               transition-colors duration-300">
//               {reason.title}
//             </h3>
//             <p className="text-sm text-gray-600 mb-4">{reason.description}</p>

//             {/* Stats Badge */}
//             <div className="text-xs font-medium px-3 py-1 bg-white/80 rounded-full 
//               text-gray-600 mb-4">
//               {reason.stats}
//             </div>

//             {/* Hover Effect */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
//               flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//               <span className="text-sm font-medium text-blue-600">Learn More</span>
//               <ArrowRight size={16} className="ml-1 text-blue-600 animate-bounce-x" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom CTA */}
//       <div className="mt-16 text-center">
//         <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
//           text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 
//           transform hover:scale-105 transition-all duration-300 
//           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
//           shadow-lg">
//           Start Your Journey Today
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WhyWorkInTeens;