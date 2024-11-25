import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Meetu',
    company: "Let's Evolve",
    avatar: 'https://placehold.co/50x50',
    text: 'Funngro services are excellent. They have provided blogs for our website and super impressed by the quality of work done by Teens.'
  },
  {
    id: 2,
    name: 'Rajesh',
    company: 'Tech Innovators',
    avatar: 'https://placehold.co/50x50',
    text: 'Working with Funngro has been a game-changer. The young talent brings fresh perspectives and incredible creativity.'
  },
  {
    id: 3,
    name: 'Priya',
    company: 'Learning Hub',
    avatar: 'https://placehold.co/50x50',
    text: 'Incredible platform that empowers teenagers with real-world skills and professional opportunities.'
  },
  {
    id: 4,
    name: 'Arun',
    company: 'Global Solutions',
    avatar: 'https://placehold.co/50x50',
    text: 'Funngro delivers exceptional talent. Their teens demonstrate remarkable problem-solving skills and professional maturity.'
  },
  {
    id: 5,
    name: 'Sonia',
    company: 'Innovation Labs',
    avatar: 'https://placehold.co/50x50',
    text: 'A revolutionary platform connecting talented teenagers with real-world professional opportunities.'
  },
  {
    id: 6,
    name: 'Vikram',
    company: 'Creative Media',
    avatar: 'https://placehold.co/50x50',
    text: 'Funngro has transformed how we view young talent. Their network of teens is impressive and innovative.'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg w-80 relative overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <Quote className="absolute top-2 left-2 text-blue-100 w-12 h-12" />
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.avatar} 
        alt={`Profile picture of ${testimonial.name}`} 
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h2 className="font-bold text-lg">{testimonial.name}</h2>
        <p className="text-gray-600 text-sm">{testimonial.company}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{testimonial.text}"</p>
  </motion.div>
);

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1 + testimonials.length) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCards }).map((_, i) => {
      const index = (currentIndex + i) % testimonials.length;
      return testimonials[index];
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-2 py-10">
      <h1 className="text-4xl md:text-5xl text-center font-bold text-gray-800 mb-10">
        Happy Funngro Members
      </h1>

      <div className="flex items-center justify-center w-full max-w-5xl">
        <motion.button 
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white p-3 rounded-full mr-4"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <div className="flex space-x-4">
          <AnimatePresence>
            {getVisibleTestimonials().map(testimonial => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            ))}
          </AnimatePresence>
        </div>

        <motion.button 
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white p-3 rounded-full ml-4"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;