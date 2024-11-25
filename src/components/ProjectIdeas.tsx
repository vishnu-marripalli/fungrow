import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const ProjectIdeas: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Build your brand",
      price: "₹2000",
      description: "Get your logos, brochure designed professionally – 5 Samples",
    },
    {
      id: 2,
      title: "Digital Marketing",
      price: "₹2500",
      description: "Boost your business with social media campaigns – 3 Platforms",
    },
    {
      id: 3,
      title: "Website Development",
      price: "₹5000",
      description: "Launch your custom website in just 7 days – Responsive Design",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="  flex flex-col items-center p-10">
      {/* Header Section */}
      <motion.h1
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <h1 className="text-4xl font-bold text-gray-900 mb-6 relative">
          Project Ideas
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
        </h1>
      </motion.h1>
      <motion.p
        className="text-gray-600 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Cost-effective, innovative, and timely delivery of projects by the smartest talent on the planet (Teenlancers)
      </motion.p>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-xl font-bold mb-2">{project.price}</p>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <button className="bg-blue-500 text-white  py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600">
              Start Now <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <div className="flex space-x-4 mt-8">
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          <ChevronLeft size={20} />
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          <ChevronRight size={20} />
        </button>
      </div> */}
    </div>
  );
};

export default ProjectIdeas;
