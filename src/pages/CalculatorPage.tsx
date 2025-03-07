import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, TrendingUp, Calculator as CalculatorIcon } from 'lucide-react';
import Calculator from '../components/Calculator';
import { useTheme } from '../context/ThemeContext';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

function CalculatorPage() {
  const { isDarkMode } = useTheme();

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-primary-500" />,
      title: "Time Savings Analysis",
      description: "See exactly how many hours you could reclaim each week through automation."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-500" />,
      title: "Cost Reduction Insights",
      description: "Calculate potential savings from optimized operations and reduced manual work."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-500" />,
      title: "Growth Potential",
      description: "Discover how automation can unlock your business's true scaling potential."
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-dark-700 text-light-100' : 'bg-light-200 text-secondary-900'} font-sans transition-colors duration-300`}>
      <header className="bg-light-100 dark:bg-dark-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo size="medium" />
          </Link>
          <Link
            to="/"
            className="flex items-center text-secondary-600 dark:text-light-300 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h1
                className="text-4xl md:text-6xl font-display font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Calculate Your Business{' '}
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Automation ROI
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-secondary-600 dark:text-light-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover how much time and money your business could save through strategic automation.
                Our calculator provides a detailed analysis of your potential ROI.
              </motion.p>

              <motion.div
                className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-full mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CalculatorIcon className="h-10 w-10 text-primary-500" />
              </motion.div>
            </div>

            <Calculator />

            <div className="max-w-5xl mx-auto mt-20">
              <motion.h2
                className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                What You'll Learn
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-light-100 dark:bg-dark-800 rounded-xl p-8 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 dark:text-light-100">{benefit.title}</h3>
                    <p className="text-secondary-600 dark:text-light-400">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CalculatorPage;