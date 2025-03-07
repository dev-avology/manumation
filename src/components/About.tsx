import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Briefcase } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 bg-light-300 dark:bg-dark-700" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="md:w-1/3"
            variants={itemVariants}
          >
            <div className="bg-light-200 p-3 rounded-xl shadow-md dark:bg-transparent dark:p-0 dark:shadow-none">
              <img 
                src="https://storage.googleapis.com/msgsndr/5yufDyfhuTKFx8nCQCP6/media/6648c223e31b5065fedf3e0a.png" 
                alt="Business Automation Expert" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>
          
          <motion.div className="md:w-2/3">
          <motion.span 
  className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-dark-700 dark:text-dark-700 font-medium text-sm mb-4"
  variants={itemVariants}
>
  About Me
</motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              variants={itemVariants}
            >
              Who I Am and What I Do
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
            >
              <p className="text-lg text-secondary-600 dark:text-light-300 mb-6">
                I'm a battle-tested entrepreneur with 30+ years in the trenches, on a mission to transform how service-based businesses operate. I don't just implement tools—I revolutionize businesses by blending human touch with cutting-edge automation.
              </p>
              <p className="text-lg text-secondary-600 dark:text-light-300">
                This is <span className="font-semibold text-primary-600 dark:text-primary-400">Manumation</span>—my signature approach that liberates you from the 80% of tasks draining your energy while actually elevating your clients' experience.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-light-100 dark:bg-dark-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-dark-700 dark:text-dark-700" />
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-light-100">Experience</h3>
            <p className="text-secondary-600 dark:text-light-400">
              With 30+ years as an entrepreneur, I've made the mistakes so you don't have to. I bring a roadmap to break through those invisible barriers holding your business back.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-light-100 dark:bg-dark-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-dark-700 dark:text-dark-700" />
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-light-100">Who I Help</h3>
            <p className="text-secondary-600 dark:text-light-400">
              I'm the secret weapon for ambitious service-based businesses ready to break free from the hamster wheel of inefficiency—insurance agents, real estate professionals, and service providers who know they should be making more with less stress.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-light-100 dark:bg-dark-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-dark-700 dark:text-dark-700" />
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-light-100">My Approach</h3>
            <p className="text-secondary-600 dark:text-light-400">
              When you work with me, you'll feel the immediate relief of having someone who truly gets it. I build systems around your strengths and vision, amplifying what makes you special while automating what drags you down.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;