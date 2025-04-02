import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import InovxLogo from "../img/logo.png"; // Ensure the image is available in your assets

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
    return location.pathname === path ? "text-club-purple" : "text-gray-900 hover:text-club-purple dark:text-gray-300 dark:hover:text-club-purple";
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={InovxLogo} alt="INOVX" className="h-28 w-38" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm font-medium`}>Home</Link>
            <Link to="/about" className={`${isActive('/about')} px-3 py-2 rounded-md text-sm font-medium`}>About</Link>
            <Link to="/events" className={`${isActive('/events')} px-3 py-2 rounded-md text-sm font-medium`}>Events</Link>
            <Link to="/team" className={`${isActive('/team')} px-3 py-2 rounded-md text-sm font-medium`}>Team</Link>
            <Link to="/contact" className={`${isActive('/contact')} px-3 py-2 rounded-md text-sm font-medium`}>Contact</Link>
          </div>

          {/* Theme toggle button */}
          <button onClick={toggleTheme} className="p-2 rounded-md text-gray-700 dark:text-gray-300">
            {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </button>

          {/* Join button */}
          <div className="hidden md:block">
            <Button className="bg-club-purple hover:bg-club-purple/90 dark:bg-club-purple dark:hover:bg-club-purple/90">
              JOIN <span className="font-bebas text-xl"> INOVX </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
            <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Events</Link>
            <Link to="/team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Team</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
            <div className="pt-2">
              <Button className="w-full bg-club-purple hover:bg-club-purple/90 dark:bg-club-purple dark:hover:bg-club-purple/90">Join Nexus</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
