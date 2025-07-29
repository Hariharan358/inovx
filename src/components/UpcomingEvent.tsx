import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Calendar, MapPin, DollarSign, Rocket, Zap } from 'lucide-react';



const UpcomingEvent = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden border-2 border-black dark:border-white mx-4 my-8 rounded-3xl bg-white dark:bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:20px_20px] rounded-3xl"></div>
      
      {/* Graphic Elements */}
      <div className="absolute top-8 left-8 w-32 h-32 border-2 border-black dark:border-white rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-16 right-12 w-24 h-24 border-2 border-black dark:border-white rounded-full opacity-10 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
      <div className="absolute bottom-8 left-16 w-20 h-20 border-2 border-black dark:border-white rounded-full opacity-10 animate-spin" style={{animationDuration: '25s'}}></div>
      <div className="absolute bottom-16 right-8 w-28 h-28 border-2 border-black dark:border-white rounded-full opacity-10 animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
      
      {/* Diagonal Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-black dark:bg-white opacity-5 transform rotate-12 translate-x-1/4"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-black dark:bg-white opacity-5 transform -rotate-12 -translate-x-1/4"></div>
        <div className="absolute bottom-0 left-1/4 w-1 h-full bg-black dark:bg-white opacity-5 transform rotate-6"></div>
        <div className="absolute bottom-0 right-1/4 w-1 h-full bg-black dark:bg-white opacity-5 transform -rotate-6"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 px-8">
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse"
        >
          <Zap className="w-4 h-4" />
           Registration Open!
        </motion.div>
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-black text-center text-black dark:text-white mb-3 leading-tight"
        >
          <Rocket className="inline-block w-10 h-10 md:w-14 md:h-14 mb-3" />
          <br />
          Tech Innovation Summit 2025
        </motion.h2>
        
        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-medium text-center text-gray-600 dark:text-gray-300 mb-6"
        >
          Join us for the biggest tech event of the year!
        </motion.h3>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-center text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          Experience cutting-edge technology demonstrations, network with industry leaders, 
          and discover the future of innovation. This exclusive event brings together 
          developers, entrepreneurs, and tech enthusiasts for an unforgettable experience.
        </motion.p>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-black rounded-2xl p-4 md:p-6 border-2 border-black dark:border-white hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white dark:text-black" />
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 md:mb-3">
                Date & Time
              </div>
              <div className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 md:mb-2">
                Aug 5,6 2025
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                9:00 AM - 5:00 PM
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-black rounded-2xl p-4 md:p-6 border-2 border-black dark:border-white hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white dark:text-black" />
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 md:mb-3">
                Location
              </div>
              <div className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 md:mb-2">
                Main Seminar Hall
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                REC, CHENNAI
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-black rounded-2xl p-4 md:p-6 border-2 border-black dark:border-white hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white dark:text-black" />
            </div>
            <div className="text-center">
              <div className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 md:mb-3">
                Registration
              </div>
              <div className="text-lg md:text-xl font-bold text-black dark:text-white mb-1 md:mb-2">
                 ₹25
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                For Students
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center"
        >
          <Button 
            onClick={() => window.open('#', '_blank')}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 md:px-12 py-3 md:py-4 text-base md:text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 w-full md:w-auto"
          >
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            Register Now!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvent; 