import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-light-300 dark:bg-dark-700" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto bg-light-100 dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Quote className="h-20 w-20 opacity-20 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Building Trust Through Results</h3>
                <p className="text-white/80">
                  There's a reason my clients can't stop talking about our work together. The transformation is so profound that they naturally want to share it with others.
                </p>
              </motion.div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-secondary-700 dark:text-light-300 text-lg italic mb-6">
                  "The mapping process we did together was like turning on the lights in a dark room—suddenly I could see everything that had been hiding in plain sight. The look on my face when I finally saw my entire business laid out clearly? Priceless. Within 3 months, our lead conversion increased by 70% and I'm working 15 fewer hours per week."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-300 dark:bg-dark-500 mr-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-secondary-400 to-secondary-500 dark:from-dark-400 dark:to-dark-500"></div>
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-light-100">Sarah Johnson</h4>
                    <p className="text-secondary-600 dark:text-light-400 text-sm">Insurance Agency Owner</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;