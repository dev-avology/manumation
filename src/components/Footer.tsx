import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-secondary-900 dark:bg-dark-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo size="medium" />
            </div>
            <p className="text-secondary-400 dark:text-light-400 mb-6">
              Revolutionizing service-based businesses through the perfect blend of human touch and cutting-edge automation.
            </p>
            <div className="flex space-x-4 items-center">
              <motion.a 
                href="#" 
                className="bg-secondary-800 dark:bg-dark-700 p-2 rounded-full hover:bg-primary-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-secondary-800 dark:bg-dark-700 p-2 rounded-full hover:bg-primary-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-secondary-800 dark:bg-dark-700 p-2 rounded-full hover:bg-primary-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <ThemeToggle />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`}
                    className="text-secondary-400 dark:text-light-400 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {['1:1 Coaching', 'Done-With-You', 'Done-For-You', 'Strategy Sessions'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    key={item}
                    to={item==='1:1 Coaching' ? 'coaching' : item.toLocaleLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    className="text-secondary-400 dark:text-light-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-secondary-400 dark:text-light-400">hello@manumation.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-secondary-400 dark:text-light-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5" />
                <span className="text-secondary-400 dark:text-light-400">123 Business Ave, Suite 100<br />Innovation City, CA 94123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 dark:border-dark-600 pt-8 mt-8 text-center text-secondary-500 dark:text-light-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Manumation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;