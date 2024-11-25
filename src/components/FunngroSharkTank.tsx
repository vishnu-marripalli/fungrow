import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, TrendingUp, Award, Star } from 'lucide-react';

interface SharkTankImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

const images: SharkTankImage[] = [
  {
    id: 1,
    url: '/api/placeholder/300/200',
    alt: 'Funngro team pitching on Shark Tank India',
    caption: 'Presenting our vision to the Sharks'
  },
  {
    id: 2,
    url: '/api/placeholder/300/200',
    alt: 'Funngro celebrating on Shark Tank India',
    caption: 'Celebrating our successful pitch'
  },
  {
    id: 3,
    url: '/api/placeholder/300/200',
    alt: 'Sharks discussing Funngro',
    caption: 'Sharks discussing our innovative platform'
  },
  {
    id: 4,
    url: '/api/placeholder/300/200',
    alt: 'Deal celebration moment',
    caption: 'The moment we sealed the deal'
  }
];

const stats = [
  { icon: TrendingUp, value: '2Cr+', label: 'Valuation' },
  { icon: Star, value: '3', label: 'Shark Offers' },
  { icon: Award, value: '1', label: 'Deal Secured' }
];

const FunngroSharkTank: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Funngro @ Shark Tank
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lakhs of Teens love Funngro, Hundreds of Companies love Funngro and now Sharks also loved Funngro
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
              <span className="text-gray-600">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Section */}
        <div className="relative overflow-hidden rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative"
            >
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-xl">
                <p className="text-white text-lg">{images[currentIndex].caption}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              <Play className={`w-6 h-6 text-gray-800 ${isAutoPlaying ? 'opacity-50' : ''}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-4 flex space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Watch Our Journey
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FunngroSharkTank;