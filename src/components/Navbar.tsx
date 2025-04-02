import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import InovxLogo from "../img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-white bg-club-purple"
      : "text-gray-900 hover:text-club-purple dark:text-gray-300 dark:hover:text-club-purple";
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50  shadow-lg rounded-full px-6 py-2 flex items-center justify-between w-[90%] max-w-3xl backdrop-blur-md border border-gray-300 dark:border-gray-700 ${theme === "dark" ? "bg-black" : "bg-gray-200"}`}>
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img src={InovxLogo} alt="INOVX" className="h-10 w-18 " />
      </Link>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-4">
        <Link to="/" className={`${isActive("/")} px-3 py-1 rounded-full text-sm font-medium transition`}>Home</Link>
        <Link to="/about" className={`${isActive("/about")} px-3 py-1 rounded-full text-sm font-medium transition`}>About</Link>
        <Link to="/events" className={`${isActive("/events")} px-3 py-1 rounded-full text-sm font-medium transition`}>Events</Link>
       
      </div>

      {/* Theme toggle button */}
      <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
        {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </button>

      {/* Mobile menu button */}
      <button onClick={toggleMenu} className="md:hidden p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white dark:bg-black rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 p-4">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="block px-4 py-2 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
            <Link to="/about" className="block px-4 py-2 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
            <Link to="/events" className="block px-4 py-2 rounded-lg text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Events</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
