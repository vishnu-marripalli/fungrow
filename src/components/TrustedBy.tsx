import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Briefcase } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  category: 'company' | 'partner' | 'enterprise';
  logoUrl: string;
}

const partners: Partner[] = [
  // Companies
  ...[1, 2, 3, 4].map(id => ({
    id,
    name: `Company ${id}`,
    category: 'company' as const,
    logoUrl: `/api/placeholder/200/100`
  })),
  // Partners
  ...[5, 6, 7, 8].map(id => ({
    id,
    name: `Partner ${id}`,
    category: 'partner' as const,
    logoUrl: `/api/placeholder/200/100`
  })),
  // Enterprise
  ...[9, 10, 11, 12].map(id => ({
    id,
    name: `Enterprise ${id}`,
    category: 'enterprise' as const,
    logoUrl: `/api/placeholder/200/100`
  }))
];

const categories = [
  { title: 'Companies', icon: Building2, type: 'company' as const },
  { title: 'Partners', icon: Users, type: 'partner' as const },
  { title: 'Enterprise', icon: Briefcase, type: 'enterprise' as const }
];

const TrustedBySection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="  py-16 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            We are trusted by
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that trust us with their business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.type}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {partners
                  .filter(partner => partner.category === category.type)
                  .map(partner => (
                    <motion.div
                      key={partner.id}
                      className="relative group"
                      variants={logoVariants}
                      whileHover="hover"
                    >
                      <div className="bg-gray-50 rounded-lg p-4 transition-all duration-300 group-hover:bg-gray-100">
                        <img
                          src={partner.logoUrl}
                          alt={partner.name}
                          className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          variants={cardVariants}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Become a Partner
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrustedBySection;