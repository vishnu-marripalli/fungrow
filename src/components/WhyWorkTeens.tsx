import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Users } from 'lucide-react';
import img from '../assests/whyworkwithteens.png'
const WhyWorkWithTeens: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl w-full"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Work with Teens
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Teenagers are the smarter generation, more attuned to customer mindsets, 
            unburdened by traditional thinking, and capable of delivering high-quality 
            work in a cost-effective manner.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
            <div className="flex flex-col gap-4">
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-500"
          >
            <div className="flex items-center mb-4">
              <Rocket className="w-10 h-10 text-blue-500 mr-4" />
              <h2 className="text-xl font-bold text-blue-800">Innovation</h2>
            </div>
            <p className="text-gray-700">
              Break free from conventional thinking. Tap into fresh perspectives 
              that drive rapid growth and timely project delivery.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-500"
          >
            <div className="flex items-center mb-4">
              <DollarSign className="w-10 h-10 text-green-500 mr-4" />
              <h2 className="text-xl font-bold text-blue-800">Cost Effective</h2>
            </div>
            <p className="text-gray-700">
              Reduce project costs by up to 50% while maintaining exceptional quality.
            </p>
            <p className="text-xs text-gray-500 mt-2 italic">
              * Help the next generation, just as someone helped you
            </p>
          </motion.div>
          </div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <img 
              src={img} 
              alt="Teenagers collaborating" 
              className="w-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Start Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
          >
            Talk to Us
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyWorkWithTeens;