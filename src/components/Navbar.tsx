
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and site name */}
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-club-purple to-club-teal w-8 h-8 rounded-md flex items-center justify-center text-white font-bold mr-2">
                N
              </div>
              <span className="text-xl font-bold text-gray-900">Nexus</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-900 hover:text-club-purple px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-900 hover:text-club-purple px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#events" className="text-gray-900 hover:text-club-purple px-3 py-2 rounded-md text-sm font-medium">
                Events
              </a>
              <a href="#team" className="text-gray-900 hover:text-club-purple px-3 py-2 rounded-md text-sm font-medium">
                Team
              </a>
              <a href="#contact" className="text-gray-900 hover:text-club-purple px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          
          {/* Join button */}
          <div className="hidden md:block">
            <Button className="bg-club-purple hover:bg-club-purple/90">
              Join Nexus
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-club-purple focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              About
            </a>
            <a href="#events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              Events
            </a>
            <a href="#team" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              Team
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full bg-club-purple hover:bg-club-purple/90">
                Join Nexus
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
