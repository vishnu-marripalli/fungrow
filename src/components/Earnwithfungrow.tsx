// import React from "react";

// const steps = [
//   {
//     number: 1,
//     title: "Register",
//     description: "Register for Earning on Funngro app, select your area of interest",
//   },
//   {
//     number: 2,
//     title: "Add Projects",
//     description: "Add projects in a simple process that will take no more than 2 min",
//   },
//   {
//     number: 3,
//     title: "Get Applications",
//     description:
//       "Funngro will share a curated list of Teenagers interested in your project",
//   },
//   {
//     number: 4,
//     title: "Select Teens",
//     description:
//       "Review profiles, past work, experience and select Teenagers that fit your work",
//   },
//   {
//     number: 5,
//     title: "Project Delivered",
//     description:
//       "On successful completion, release payment to Teenager and post your next project",
//   },
// ];

// const EarningWithFunngro: React.FC = () => {
//   return (
//     <div className="container mx-auto py-12">
//       {/* Header */}
//       <h1 className="text-2xl font-bold text-center mb-6">Earning with Funngro</h1>
//       <p className="text-center text-black mb-10 text-lg">
//         Simple steps to earn income by working with real companies on a project basis
//       </p>

//       {/* Steps Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
//         {steps.map((step) => (
//           <div key={step.number} className="text-center">
//             <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full border-2 border-dashed border-black bg-blue-100">
//               <span className="text-xl font-bold">{step.number}</span>
//             </div>
//             <h2 className="mt-4 font-semibold text-lg">{step.title}</h2>
//             <p className="text-sm text-gray-600">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EarningWithFunngro;








import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Register",
    description: "Register for Earning on Funngro app, select your area of interest",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    number: 2,
    title: "Add Projects",
    description: "Add projects in a simple process that will take no more than 2 min",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    number: 3,
    title: "Get Applications",
    description: "Funngro will share a curated list of Teenagers interested in your project",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    number: 4,
    title: "Select Teens",
    description: "Review profiles, past work, experience and select Teenagers that fit your work",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    number: 5,
    title: "Project Delivered",
    description: "On successful completion, release payment to Teenager and post your next project",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
];

const EarningWithFunngro = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Earning with Funngro
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Simple steps to earn income by working with real companies on a project basis
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              <motion.div 
                className="mt-4 text-blue-600"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EarningWithFunngro;