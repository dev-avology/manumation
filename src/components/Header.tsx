import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { usePopup } from "../context/PopupContext";
import Logo from "./Logo";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const { openQuiz } = usePopup();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (!document.getElementById("mobile-menu")?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? "bg-dark-700 shadow-lg"
            : "bg-white shadow-md"
          : "bg-transparent"
      } py-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <Logo size="medium" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {isHomePage ? (
            ["About", "Services", "Process", "Contact"].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                {item}
              </ScrollLink>
            ))
          ) : (
            ["About", "Services", "Process", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={`/#${item.toLowerCase()}`}
                className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {item}
              </NavLink>
            ))
          )}

          {/* User Guide Link */}
          <NavLink
            to="/user-guide"
            className={({ isActive }) =>
              `font-medium ${
                isActive
                  ? "text-primary-500"
                  : "text-secondary-700 dark:text-light-300"
              } hover:text-primary-500 dark:hover:text-primary-400 transition-colors`
            }
          >
            User Guide
          </NavLink>

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
        </nav>

        {/* Mobile Menu & Theme Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            id="mobile-menu"
            className="focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <X className="w-8 h-8 text-primary-500" />
            ) : (
              <Menu className="w-8 h-8 text-primary-500" />
            )}
          </button>
        </div>

        {/* Right-Side Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="lg:hidden fixed top-16 left-0 w-full bg-white dark:bg-dark-700 shadow-md z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 p-6 text-center">
            {isHomePage ? (
              ["About", "Services", "Process", "Contact"].map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </ScrollLink>
              ))
            ) : (
              ["About", "Services", "Process", "Contact"].map((item) => (
                <NavLink
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))
            )}

            <NavLink
              to="/user-guide"
              className="font-medium text-secondary-700 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              User Guide
            </NavLink>

            <motion.button
              onClick={openQuiz}
              className="bg-primary-500 hover:bg-primary-600 text-dark-700 font-medium py-2 px-4 rounded-full transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
