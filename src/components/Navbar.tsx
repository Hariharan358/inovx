import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    // { name: "Profile", path: "/profile" },
    { name: "Register", path: "/event/crack-the-case" },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-lg rounded-full px-2 sm:px-4 md:px-6 py-2 flex items-center justify-between w-full sm:w-[95%] md:w-[90%] max-w-3xl backdrop-blur-md border border-gray-300 dark:border-gray-700 ${theme === "dark" ? "bg-black" : "bg-gray-200"}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-1 md:space-x-2">
        <img src="/slider/logo.jpg" alt="InovX Logo" className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full object-cover" />
        <span className="text-base sm:text-lg md:text-xl px-0.5 sm:px-1 md:px-2 font-bold">InovX</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-all duration-300 ${
              link.name === "Register"
                ? "px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105"
                : location.pathname === link.path
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
      <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4 text-gray-700" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-400" />
          )}
        </button>
        <button
          onClick={toggleMenu}
          className="p-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
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
                <X className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 py-1 px-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg md:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-1.5 px-2 text-xs font-medium transition-all duration-300 rounded ${
                  link.name === "Register"
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg"
                    : location.pathname === link.path
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>  
    </nav>
  );
};

export default Navbar;
