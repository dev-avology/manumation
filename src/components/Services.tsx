import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserCheck, Users, Cog } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 bg-light-100 dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-dark-700 dark:text-dark-700 font-medium text-sm mb-4"
            variants={itemVariants}
          >
            My Offerings
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            Service Offerings
          </motion.h2>
          
          <motion.p 
            className="text-lg text-secondary-600 dark:text-light-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I meet you where you are with three distinct ways to transform your business, each designed to provide the perfect level of support for your needs.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-90 z-0"></div>
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="h-8 w-8 text-dark-700" />
              </div>
              <h3 className="text-lg font-bold text-dark-700 mb-4">1:1 Coaching</h3>
              <p className="text-dark-700 mb-6 flex-grow">
                Feel the empowerment of having a seasoned guide walk alongside you, teaching you to fish rather than just handing you the catch. The confidence you'll gain is transformative.
              </p>
              <motion.button
                className="mt-auto bg-white text-dark-700 font-medium py-3 px-6 rounded-full shadow-md inline-block self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-90 z-0"></div>
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-dark-700" />
              </div>
              <h3 className="text-lg font-bold text-dark-700 mb-4">Done-With-You Services</h3>
              <p className="text-dark-700 mb-6 flex-grow">
                Experience the perfect balance of learning and support as we build together. You'll feel ownership of the process while having an expert ensure you don't waste time on trial and error.
              </p>
              <motion.button
                className="mt-auto bg-white text-dark-700 font-medium py-3 px-6 rounded-full shadow-md inline-block self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-90 z-0"></div>
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-dark-700" />
              </div>
              <h3 className="text-lg font-bold text-dark-700 mb-4">Done-For-You Services</h3>
              <p className="text-dark-700 mb-6 flex-grow">
                Enjoy the freedom of focusing solely on what you love while my team handles the rest. The relief of delegating your biggest headaches to experts who actually solve them is incomparable.
              </p>
              <motion.button
                className="mt-auto bg-white text-dark-700 font-medium py-3 px-6 rounded-full shadow-md inline-block self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;