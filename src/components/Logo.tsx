import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true }) => {
  const { isDarkMode } = useTheme();
  
  // Size mapping
  const sizeMap = {
    small: { height: 32, fontSize: 'text-lg' },
    medium: { height: 40, fontSize: 'text-xl' },
    large: { height: 56, fontSize: 'text-3xl' }
  };
  
  // Colors based on theme
  const primaryColor = isDarkMode ? '#ffe14d' : '#ffe14d';
  const secondaryColor = isDarkMode ? '#ffd200' : '#ffd200';
  const textColor = isDarkMode ? 'text-light-100' : 'text-secondary-900';
  const darkGrey = '#1e293b'; // Using Tailwind's dark-700 color
  
  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
    >
      <div style={{ height: sizeMap[size].height }}>
        <svg 
          width={sizeMap[size].height * 1.2} 
          height={sizeMap[size].height} 
          viewBox="0 0 120 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* M shape */}
          <motion.path 
            d="M10,80 L10,20 L30,20 L40,50 L50,20 L70,20 L70,80" 
            stroke={primaryColor} 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {/* Automation wave */}
          <motion.path 
            d="M70,50 Q85,20 100,50 Q115,80 130,50" 
            stroke={secondaryColor} 
            strokeWidth="10" 
            strokeLinecap="round" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />
          
          {/* Dot */}
          <motion.circle 
            cx="100" 
            cy="50" 
            r="8" 
            fill={darkGrey}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </svg>
      </div>
      
      {showText && (
        <motion.span 
          className={`font-display font-bold ${sizeMap[size].fontSize} ${textColor}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Manumation
        </motion.span>
      )}
    </motion.div>
  );
};

export default Logo;