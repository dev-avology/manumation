import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, DollarSign, Users, Award } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-primary-500" />,
      value: "15+",
      label: "Hours saved weekly per client",
      description: "On average, clients reclaim over 15 hours per week through automation"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-500" />,
      value: "35%",
      label: "Average revenue increase",
      description: "Clients typically see a 35% increase in revenue within 6 months"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      value: "200+",
      label: "Businesses transformed",
      description: "Over 200 service businesses have revolutionized their operations"
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      value: "30+",
      label: "Years of experience",
      description: "Three decades of entrepreneurial and automation expertise"
    }
  ];

  return (
    <section className="py-20 bg-light-100 dark:bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-light-200 dark:bg-dark-700 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-display font-bold mb-2 text-primary-600 dark:text-primary-400">
                {stat.value}
              </h3>
              <p className="font-bold mb-2 dark:text-light-100">
                {stat.label}
              </p>
              <p className="text-sm text-secondary-600 dark:text-light-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;