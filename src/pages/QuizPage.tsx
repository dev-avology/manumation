import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Target, Users, Lightbulb } from 'lucide-react';
import QuizPopup from '../components/QuizPopup';
import { usePopup } from '../context/PopupContext';
import { useTheme } from '../context/ThemeContext';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

function QuizPage() {
  const { isDarkMode } = useTheme();
  const { isQuizOpen, openQuiz, closeQuiz } = usePopup();

  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-primary-500" />,
      title: "Identify Growth Blockers",
      description: "Discover exactly what's holding your business back from scaling efficiently."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: "Personalized Insights",
      description: "Get tailored recommendations based on your unique business challenges."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-500" />,
      title: "Actionable Solutions",
      description: "Walk away with clear next steps to transform your business operations."
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
                Is Your Business Ready for{' '}
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  Automation?
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-secondary-600 dark:text-light-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Take this 2-minute quiz to discover if your business is suffering from inefficiencies
                that are costing you time, money, and sanity.
              </motion.p>

              <motion.button
                onClick={openQuiz}
                className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Start the Quiz
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

            <div className="max-w-3xl mx-auto bg-light-100 dark:bg-dark-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-start mb-6">
                <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-light-100">
                    What You'll Discover
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-secondary-600 dark:text-light-300">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span>How much time you're really losing to manual tasks</span>
                    </li>
                    <li className="flex items-center text-secondary-600 dark:text-light-300">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span>Where your business automation gaps are costing you money</span>
                    </li>
                    <li className="flex items-center text-secondary-600 dark:text-light-300">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span>Which processes are prime for automation in your business</span>
                    </li>
                    <li className="flex items-center text-secondary-600 dark:text-light-300">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span>Your personalized automation readiness score</span>
                    </li>
                  </ul>
                </div>
              </div>

              <motion.button
                onClick={openQuiz}
                className="w-full bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-4 rounded-lg transition-colors shadow-md text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Take the Quiz Now
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuizPopup isOpen={isQuizOpen} onClose={closeQuiz} />
    </div>
  );
}

export default QuizPage;