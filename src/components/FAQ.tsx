import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does Funngro connect teenagers with professional opportunities?",
    answer: "Funngro provides a platform where talented teenagers can showcase their skills, work on real-world projects, and connect with companies looking for innovative, cost-effective talent."
  },
  {
    question: "What types of skills do the teenagers on Funngro possess?",
    answer: "Our teens have diverse skills including digital marketing, content creation, graphic design, coding, social media management, and innovative problem-solving capabilities."
  },
  {
    question: "How do you ensure the quality of work from teenagers?",
    answer: "We carefully vet our teen talents, provide professional training, and have a robust review system to ensure high-quality deliverables for our clients."
  },
  {
    question: "What are the cost benefits of working with Funngro teens?",
    answer: "Companies can save up to 50% on project costs while receiving high-quality, innovative work from motivated young professionals."
  },
  {
    question: "Is working with teenagers legally compliant?",
    answer: "Absolutely. We ensure all work arrangements comply with labor laws and have strict guidelines to protect both teen workers and client companies."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" flex flex-col items-center justify-center my-10  p-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <HelpCircle className="mr-4 text-blue-500" size={40} />
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Get insights into how Funngro connects talented teenagers with professional opportunities
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className={`
                  bg-white p-4 rounded-lg shadow-md cursor-pointer
                  ${activeIndex === index ? 'border-2 border-blue-500' : ''}
                `}
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-blue-800">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  >
                    <ChevronDown 
                      className={`
                        text-blue-500 
                        ${activeIndex === index ? 'transform rotate-180' : ''}
                      `} 
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        height: 'auto',
                        transition: { duration: 0.3 }
                      }}
                      exit={{ 
                        opacity: 0, 
                        height: 0,
                        transition: { duration: 0.2 }
                      }}
                      className="text-gray-700 mt-4 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;