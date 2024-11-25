import React from 'react';
import { motion } from 'framer-motion';

// Define brand interface
interface Brand {
  name: string;
  logo: string;
  bgColor: string;
}

// Sample brand data
const brands: Brand[] = [
  { 
    name: "TechCrunch", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/techcrunch.svg", 
    bgColor: "bg-blue-100" 
  },
  { 
    name: "Forbes", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/forbes.svg", 
    bgColor: "bg-red-100" 
  },
  { 
    name: "Wired", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wired.svg", 
    bgColor: "bg-gray-200" 
  },
  { 
    name: "Bloomberg", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bloomberg.svg", 
    bgColor: "bg-green-100" 
  },
  { 
    name: "CNBC", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cnbc.svg", 
    bgColor: "bg-yellow-100" 
  },
  { 
    name: "Fast Company", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastcompany.svg", 
    bgColor: "bg-purple-100" 
  },
  { 
    name: "Business Insider", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/businessinsider.svg", 
    bgColor: "bg-indigo-100" 
  },
  { 
    name: "Entrepreneur", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/entrepreneur.svg", 
    bgColor: "bg-pink-100" 
  },
  { 
    name: "Inc", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/incmagazine.svg", 
    bgColor: "bg-orange-100" 
  }
];

const FeaturedSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-2">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-gray-900 mb-8 relative "
      >
          Why work in your Teens?
             </motion.h1>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              delayChildren: 0.3,
              staggerChildren: 0.1 
            }
          }
        }}
        className="flex flex-wrap justify-center gap-8 max-w-6xl"
      >
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            variants={{
              hidden: { 
                opacity: 0, 
                scale: 0.8 
              },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.5 
                }
              }
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              w-24 h-24 rounded-full flex items-center justify-center 
              ${brand.bgColor} border-2 border-gray-200 
              shadow-md hover:shadow-xl transition-all duration-300 
              cursor-pointer group
            `}
          >
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedSection;