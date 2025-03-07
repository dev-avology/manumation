import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="bg-white dark:bg-dark-800 rounded-lg shadow-xl mb-4 w-80"
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 20, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary-600 text-dark-700 p-4 rounded-t-lg flex justify-between items-center">
                  <h3 className="font-bold">Chat with Manumation</h3>
                  <button onClick={toggleChat} className="text-dark-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="bg-light-200 dark:bg-dark-700 p-3 rounded-lg mb-3 text-sm">
                    <p className="text-secondary-800 dark:text-light-200">
                      Hi there! 👋 I'm here to answer any questions about how Manumation can help automate your business. What would you like to know?
                    </p>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="w-full px-3 py-2 rounded-lg border border-secondary-300 dark:border-dark-600 bg-light-100 dark:bg-dark-600 text-secondary-800 dark:text-light-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <motion.button
                    className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-2 px-4 rounded-lg transition-colors shadow-md w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button
            onClick={toggleChat}
            className="bg-primary-500 hover:bg-primary-600 text-dark-700 rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyButton;