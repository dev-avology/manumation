import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Heart, 
  ShoppingCart, 
  Settings, 
  Star,
  ArrowRight
} from 'lucide-react';
import { usePopup } from '../context/PopupContext';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { openQuiz } = usePopup();

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

  const pillars = [
    {
      title: "Lead Generation",
      description: "Feel the excitement of watching qualified prospects flow into your business consistently.",
      icon: <Target className="h-6 w-6" />,
      color: "bg-primary-500",
    },
    {
      title: "Lead Nurture",
      description: "Experience the satisfaction of seeing leads engage with you automatically, warming up before you even speak to them.",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-primary-400",
    },
    {
      title: "Sales",
      description: "Enjoy the confidence of a streamlined sales process that feels natural and closes more deals.",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "bg-primary-600",
    },
    {
      title: "Operations and Fulfillment",
      description: "Breathe easier knowing your delivery systems run smoothly without your constant oversight.",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-primary-700",
    },
    {
      title: "Brand Advocacy",
      description: "Delight in watching your clients become your most powerful marketing force through my \"3 R's\" framework.",
      icon: <Star className="h-6 w-6" />,
      color: "bg-primary-300",
    }
  ];

  return (
    <section id="process" className="py-20 bg-light-300 dark:bg-dark-700" ref={ref}>
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
            My Methodology
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            My Process and Philosophy
          </motion.h2>
          
          <motion.p 
            className="text-lg text-secondary-600 dark:text-light-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            When we work together, you'll experience the clarity that comes from my 5 pillar framework—a comprehensive approach that leaves no stone unturned.
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center mb-8 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {index < pillars.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-secondary-200 dark:bg-dark-500 hidden md:block" style={{ height: 'calc(100% - 3rem)' }}></div>
              )}
              
              <div className={`${pillar.color} text-dark-700 rounded-full p-3 flex items-center justify-center z-10 mb-4 md:mb-0 md:mr-6`}>
                {pillar.icon}
              </div>
              
              <div className="bg-light-100 dark:bg-dark-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex-1">
                <h3 className="text-xl font-bold mb-2 dark:text-light-100">{pillar.title}</h3>
                <p className="text-secondary-600 dark:text-light-400">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-secondary-600 dark:text-light-300 max-w-3xl mx-auto mb-8">
            The mapping process we'll do together is like turning on the lights in a dark room—suddenly you'll see everything that's been hiding in plain sight. I built this system while troubleshooting for a client who couldn't figure out why leads were falling through the cracks.
          </p>
          
          <motion.button
            onClick={openQuiz}
            className="bg-primary-600 hover:bg-primary-700 text-dark-700 font-medium py-3 px-6 rounded-full transition-colors shadow-md inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;