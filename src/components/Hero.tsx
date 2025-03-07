import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Target } from 'lucide-react';
import { usePopup } from '../context/PopupContext';

const Hero = () => {
  const { openQuiz } = usePopup();
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-dark-700 dark:text-dark-700 font-medium text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Business Automation Expert
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform Your Business With{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Manumation
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-secondary-600 dark:text-light-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Revolutionize your service-based business by blending human touch with cutting-edge automation. Free yourself from the 80% of tasks draining your energy while elevating your clients' experience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.button
                onClick={openQuiz}
                className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-3 px-6 rounded-full transition-colors shadow-md flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              
              <motion.button
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-light-100 dark:bg-dark-700 hover:bg-light-300 dark:hover:bg-dark-600 text-secondary-800 dark:text-light-100 font-medium py-3 px-6 rounded-full border border-secondary-200 dark:border-dark-600 transition-colors shadow-sm flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] w-full">
              <motion.div 
                className="absolute top-0 right-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl h-[350px] w-[350px] shadow-xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute top-10 left-10 bg-light-100 dark:bg-dark-700 rounded-2xl p-6 shadow-lg z-10 w-[300px]"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-dark-700 dark:text-dark-700" />
                  </div>
                  <div>
                    <h3 className="font-bold dark:text-light-100">Automation</h3>
                    <p className="text-sm text-secondary-600 dark:text-light-400">Save 20+ hours weekly</p>
                  </div>
                </div>
                <div className="h-2 bg-secondary-100 dark:bg-dark-600 rounded-full mb-1">
                  <motion.div 
                    className="h-2 bg-primary-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                <p className="text-xs text-right text-secondary-500 dark:text-light-500">85% complete</p>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 right-10 bg-light-100 dark:bg-dark-700 rounded-2xl p-6 shadow-lg z-10 w-[280px]"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-dark-700 dark:text-dark-700" />
                  </div>
                  <div>
                    <h3 className="font-bold dark:text-light-100">Results</h3>
                    <p className="text-sm text-secondary-600 dark:text-light-400">Increased conversion</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium dark:text-light-300">Before</span>
                  <span className="text-sm font-medium dark:text-light-300">After</span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 bg-secondary-200 dark:bg-dark-600 rounded-l-full w-[30%] flex items-center justify-center text-xs font-medium">30%</div>
                  <motion.div 
                    className="h-8 bg-primary-500 rounded-r-full text-dark-700 flex items-center justify-center text-xs font-medium"
                    initial={{ width: "0%" }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    70%
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-light-100 dark:bg-dark-700 rounded-2xl p-4 shadow-lg z-10"
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.8
                }}
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full">
                  <Lightbulb className="h-5 w-5 text-dark-700 dark:text-dark-700" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;