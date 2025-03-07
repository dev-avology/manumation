import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      title: "Insurance Agency Automation",
      description: "A 5-person insurance agency struggling with lead management and client follow-up implemented our automation system.",
      results: [
        { icon: <TrendingUp className="h-5 w-5" />, text: "68% increase in sales conversion rate" },
        { icon: <Clock className="h-5 w-5" />, text: "20+ hours saved weekly on administrative tasks" },
        { icon: <Users className="h-5 w-5" />, text: "Client retention improved from 76% to 92%" }
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Real Estate Team Transformation",
      description: "A real estate team of 3 agents implemented our lead nurturing and client management system.",
      results: [
        { icon: <TrendingUp className="h-5 w-5" />, text: "43% more listings secured in first quarter" },
        { icon: <Clock className="h-5 w-5" />, text: "15 hours per week redirected to client meetings" },
        { icon: <Users className="h-5 w-5" />, text: "Online review generation increased by 215%" }
      ],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Financial Advisory Firm Overhaul",
      description: "A financial advisory practice with 7 team members revamped their client onboarding and service delivery.",
      results: [
        { icon: <TrendingUp className="h-5 w-5" />, text: "52% increase in assets under management" },
        { icon: <Clock className="h-5 w-5" />, text: "Client onboarding time reduced from 2 weeks to 3 days" },
        { icon: <Users className="h-5 w-5" />, text: "Team capacity increased to handle 40% more clients" }
      ],
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-light-300 dark:bg-dark-700" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary -300 font-medium text-sm mb-4"
          >
            Success Stories
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Real Results for Real Businesses
          </motion.h2>
          
          <motion.p 
            className="text-lg text-secondary-600 dark:text-light-300 max-w-3xl mx-auto"
          >
            See how service businesses like yours have transformed their operations and results with Manumation.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-100 dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className={`bg-gradient-to-r ${study.color} h-3`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-light-100">{study.title}</h3>
                <p className="text-secondary-600 dark:text-light-400 mb-6">{study.description}</p>
                
                <div className="space-y-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-3">
                        <div className="text-primary-600 dark:text-primary-400">
                          {result.icon}
                        </div>
                      </div>
                      <p className="text-secondary-700 dark:text-light-300">{result.text}</p>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="text-primary-600 dark:text-primary-400 font-medium inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;