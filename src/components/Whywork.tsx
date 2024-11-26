import React from "react";
import { 
  DollarSign, 
  Target, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Star,
  TrendingUp,
  Crown
} from "lucide-react";

const WhyWorkInTeens = () => {
  const reasons = [
    {
      icon: <DollarSign className="w-12 h-12 group-hover:text-green-500 transition-colors duration-300" />,
      title: "First Income",
      description: "Generate your first income at your teens",
      color: "from-green-50 to-green-100",
      hoverBorder: "hover:border-green-500",
      stats: "500+ teens earning"
    },
    {
      icon: <Target className="w-12 h-12 group-hover:text-red-500 transition-colors duration-300" />,
      title: "Passion",
      description: "Convert your Passion into Your Profession",
      color: "from-red-50 to-red-100",
      hoverBorder: "hover:border-red-500",
      stats: "12+ career paths"
    },
    {
      icon: <BookOpen className="w-12 h-12 group-hover:text-blue-500 transition-colors duration-300" />,
      title: "Learning",
      description: "Learn with Real Companies on Real Projects",
      color: "from-blue-50 to-blue-100",
      hoverBorder: "hover:border-blue-500",
      stats: "100+ skills to learn"
    },
    {
      icon: <Award className="w-12 h-12 group-hover:text-purple-500 transition-colors duration-300" />,
      title: "Certification",
      description: "Get Certified on your Work enhance your Portfolio",
      color: "from-purple-50 to-purple-100",
      hoverBorder: "hover:border-purple-500",
      stats: "Verified certificates"
    },
  ];

  const successStories = [
    {
      name: "Warren Buffet",
      details: "founder of Buffett Partnership Ltd, first investment at age 11, started company at 13 worth ₹14,800 Crores today"
    },
    {
      name: "Bill Gates",
      details: "founder of Microsoft, started at 13 with Tic Tac Toe program, founded Microsoft at 20 worth ₹10,200 Crores today"
    }
  ];

  return (
    <div className="flex flex-col items-center mt-44 md:my-0 px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl relative">
        {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Crown className="w-8 h-8 text-yellow-500 animate-bounce" />
        </div> */}
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
          Why work in your Teens?
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </h1>
        
        <p className="text-xl font-semibold text-gray-800 mb-8">
          Great Emperors Leaders start working in their Teens to Build Their Own Kingdoms
        </p>

        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
          {successStories.map((story, index) => (
            <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <span className="font-bold text-blue-600">{story.name}</span>
              <span className="mx-2">-</span>
              <span>{story.details}</span>
            </div>
          ))}
          <p className="text-xl font-semibold text-gray-800 mt-6">
            Still you want a Reason to Start at your Teens?
          </p>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-gray-600">Join the league of extraordinary teens</span>
          <Star className="w-5 h-5 text-yellow-400" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center text-center p-8 
              bg-gradient-to-br ${reason.color} rounded-xl shadow-lg 
              hover:shadow-2xl transform hover:-translate-y-2 transition-all 
              duration-300 border-2 border-transparent ${reason.hoverBorder}
              cursor-pointer relative overflow-hidden`}
          >
            {/* Icon Container */}
            <div className="mb-6 p-4 bg-white rounded-full transform group-hover:scale-110 
              group-hover:rotate-6 transition-transform duration-300 shadow-md">
              {reason.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 
              transition-colors duration-300">
              {reason.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{reason.description}</p>

            {/* Stats Badge */}
            <div className="text-xs font-medium px-3 py-1 bg-white/80 rounded-full 
              text-gray-600 mb-4">
              {reason.stats}
            </div>

            {/* Hover Effect */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
              flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm font-medium text-blue-600">Learn More</span>
              <ArrowRight size={16} className="ml-1 text-blue-600 animate-bounce-x" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
          text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 
          transform hover:scale-105 transition-all duration-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
          shadow-lg">
          Start Your Journey Today
        </button>
      </div>
    </div>
  );
};

export default WhyWorkInTeens;