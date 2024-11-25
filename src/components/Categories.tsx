// import React from "react";

// const Categories: React.FC = () => {
//   const categories = [
//     {
//       title: "Social media marketing",
//       description: "Teens manage social media pages of companies",
//     },
//     {
//       title: "Video Creation",
//       description: "Teens create and edit videos for your company",
//     },
//     {
//       title: "Website Design",
//       description: "Get help to Design and build a website for your company",
//     },
//     {
//       title: "Influencer Marketing",
//       description: "Teens create Reels, Memes, posts and videos for social media",
//     },
//     {
//       title: "Mobile App Development",
//       description: "Develop market ready apps for your business",
//     },
//     {
//       title: "Campus Ambassador",
//       description: "Drive sales for company by acquiring customers through Teenagers",
//     },
//     {
//       title: "Research & Survey",
//       description: "Run Surveys for your company and complete research assignments",
//     },
//     {
//       title: "Data Entry",
//       description: "Create databases for your company with talent with data research skills",
//     },
//     {
//       title: "Voice Over",
//       description: "Get your content recording done with voice over artists",
//     },
//     {
//       title: "Content Writing",
//       description: "Blogs, articles, website content and a lot more. Get quality content",
//     },
//     {
//       title: "Graphic Design",
//       description: "Logos, Brochures, pamphlets, website, posts etc.",
//     },
//     {
//       title: "Testing",
//       description:
//         "Get your company’s products tested and get feedback on app, website, physical product",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center p-5 bg-white">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-black mb-4">Project Categories</h1>
//         <p className="text-lg text-black">
//           Hundreds of live projects in each category. Register for categories of your choice in Funngro App and start
//           working with companies.
//         </p>
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
//           >
//             <h3 className="text-xl font-medium text-black mb-2">{category.title}</h3>
//             <p className="text-sm text-gray-700">{category.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;







import React from "react";
import {
  Share2,
  Video,
  Globe,
  Instagram,
  Smartphone,
  Users,
  ClipboardList,
  Database,
  Mic,
  PenTool,
  Palette,
  TestTube,
  ArrowRight,
  Search
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      title: "Social media marketing",
      description: "Teens manage social media pages of companies",
      icon: <Share2 className="group-hover:text-blue-500 transition-colors duration-300" />,
      color: "hover:border-blue-500"
    },
    {
      title: "Video Creation",
      description: "Teens create and edit videos for your company",
      icon: <Video className="group-hover:text-red-500 transition-colors duration-300" />,
      color: "hover:border-red-500"
    },
    {
      title: "Website Design",
      description: "Get help to Design and build a website for your company",
      icon: <Globe className="group-hover:text-purple-500 transition-colors duration-300" />,
      color: "hover:border-purple-500"
    },
    {
      title: "Influencer Marketing",
      description: "Teens create Reels, Memes, posts and videos for social media",
      icon: <Instagram className="group-hover:text-pink-500 transition-colors duration-300" />,
      color: "hover:border-pink-500"
    },
    {
      title: "Mobile App Development",
      description: "Develop market ready apps for your business",
      icon: <Smartphone className="group-hover:text-green-500 transition-colors duration-300" />,
      color: "hover:border-green-500"
    },
    {
      title: "Campus Ambassador",
      description: "Drive sales for company by acquiring customers through Teenagers",
      icon: <Users className="group-hover:text-yellow-500 transition-colors duration-300" />,
      color: "hover:border-yellow-500"
    },
    {
      title: "Research & Survey",
      description: "Run Surveys for your company and complete research assignments",
      icon: <ClipboardList className="group-hover:text-indigo-500 transition-colors duration-300" />,
      color: "hover:border-indigo-500"
    },
    {
      title: "Data Entry",
      description: "Create databases for your company with talent with data research skills",
      icon: <Database className="group-hover:text-cyan-500 transition-colors duration-300" />,
      color: "hover:border-cyan-500"
    },
    {
      title: "Voice Over",
      description: "Get your content recording done with voice over artists",
      icon: <Mic className="group-hover:text-orange-500 transition-colors duration-300" />,
      color: "hover:border-orange-500"
    },
    {
      title: "Content Writing",
      description: "Blogs, articles, website content and a lot more. Get quality content",
      icon: <PenTool className="group-hover:text-teal-500 transition-colors duration-300" />,
      color: "hover:border-teal-500"
    },
    {
      title: "Graphic Design",
      description: "Logos, Brochures, pamphlets, website, posts etc.",
      icon: <Palette className="group-hover:text-violet-500 transition-colors duration-300" />,
      color: "hover:border-violet-500"
    },
    {
      title: "Testing",
      description: "Get your company's products tested and get feedback on app, website, physical product",
      icon: <TestTube className="group-hover:text-rose-500 transition-colors duration-300" />,
      color: "hover:border-rose-500"
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 relative">
          Project Categories
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hundreds of live projects in each category. Register for categories of your choice in 
          <span className="font-semibold text-blue-600"> Funngro App </span>
          and start working with companies.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Search className="text-gray-400 animate-bounce" />
          <span className="text-gray-500">Find your perfect project category below</span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center text-center p-8 bg-white rounded-xl
              shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300
              border-2 border-transparent ${category.color} cursor-pointer`}
          >
            <div className="mb-6 p-4 bg-gray-50 rounded-full transform group-hover:scale-110 
              group-hover:rotate-6 transition-transform duration-300">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 
              transition-colors duration-300">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{category.description}</p>
            <div className="flex items-center text-sm text-blue-600 opacity-0 group-hover:opacity-100 
              transition-opacity duration-300">
              <span>Learn More</span>
              <ArrowRight size={16} className="ml-1 animate-bounce-x" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium
          hover:bg-blue-700 transform hover:scale-105 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Explore All Categories
        </button>
      </div>
    </div>
  );
};

export default Categories;