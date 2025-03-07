import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { usePopup } from '../context/PopupContext';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useTheme();
  const { openQuiz } = usePopup();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          <motion.span
            className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
            whileHover={{ y: -2 }}
          >
            {children}
          </motion.span>
        </ScrollLink>
      );
    }
    return (
      <RouterLink to={`/#${to}`}>
        <motion.span
          className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
          whileHover={{ y: -2 }}
        >
          {children}
        </motion.span>
      </RouterLink>
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-dark-700 shadow-lg' 
            : 'bg-white shadow-md' 
          : 'bg-transparent'
      } py-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <RouterLink to="/">
          <Logo size="medium" />
        </RouterLink>
        
        <nav className="hidden md:flex space-x-8">
          {['About', 'Services', 'Process'].map((item) => (
            <NavLink key={item} to={item.toLowerCase()}>
              {item}
            </NavLink>
          ))}
          <RouterLink to="/quiz">
            <motion.span
              className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
            >
              Quiz
            </motion.span>
          </RouterLink>
          <RouterLink to="/calculator">
            <motion.span
              className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
            >
              Calculator
            </motion.span>
          </RouterLink>
          <NavLink to="contact">
            Contact
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.button
            onClick={openQuiz}
            className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-2 px-4 rounded-full transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;