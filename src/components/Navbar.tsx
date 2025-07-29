import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Home, Users, Calendar, Phone, Code2, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Add custom CSS for very small screens
const navbarStyles = `
  @media (max-width: 480px) {
    .mobile-navbar {
      width: 99% !important;
      padding: 0.25rem 0.5rem !important;
      top: 0.25rem !important;
    }
    .mobile-logo {
      height: 1rem !important;
      width: 1rem !important;
    }
    .mobile-text {
      font-size: 0.75rem !important;
    }
    .mobile-button {
      padding: 0.125rem !important;
    }
    .mobile-icon {
      height: 0.75rem !important;
      width: 0.75rem !important;
    }
  }
`;

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4" /> },
    { name: "About", path: "/about", icon: <Info className="h-4 w-4" /> },
    { name: "Projects", path: "/projects", icon: <Code2 className="h-4 w-4" /> },
    { name: "Events", path: "/events", icon: <Calendar className="h-4 w-4" /> },
  
    { name: "Contact", path: "/contact", icon: <Phone className="h-4 w-4" /> },
  ];

  return (
    <>
      <style>{navbarStyles}</style>
      <nav className={`mobile-navbar fixed top-1 md:top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-lg rounded-full px-1 md:px-6 py-1 md:py-2 flex items-center justify-between w-[99%] md:w-[90%] max-w-3xl backdrop-blur-md border border-gray-300 dark:border-gray-700 ${theme === "dark" ? "bg-black" : "bg-gray-200"}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1 md:space-x-2">
          <img src="/slider/logo.jpg" alt="InovX Logo" className="mobile-logo h-5 w-5 md:h-10 md:w-10 rounded-full object-cover" />
          <span className="mobile-text text-xs md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            InovX
          </span>
        </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-colors duration-300 ${
              location.pathname === link.path
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-gray-700" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-1">
        <button
          onClick={toggleTheme}
          className="mobile-button p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        >
          {theme === "light" ? (
            <Moon className="mobile-icon h-3 w-3 text-gray-700" />
          ) : (
            <Sun className="mobile-icon h-3 w-3 text-yellow-300" />
          )}
        </button>
        <button
          onClick={toggleMenu}
          className={`mobile-button p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 border ${
            isMenuOpen 
              ? "border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20" 
              : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          } shadow-sm`}
          title={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="mobile-icon h-3 w-3 text-gray-700 dark:text-gray-300" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="mobile-icon h-3 w-3 text-gray-700 dark:text-gray-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 md:hidden overflow-hidden z-50"
          >
            {/* Menu Header */}
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Navigation</h3>
            </div>
            
            {/* Menu Items */}
            <div className="py-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      location.pathname === link.path
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-r-2 border-blue-600 dark:border-blue-400"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <span className="mr-3 text-gray-500 dark:text-gray-300">
                      {link.icon}
                    </span>
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Menu Footer */}
            <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-300">
                <span>InovX Club</span>
                <span>v1.0</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
