import React from "react";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import ImageSlider from "@/components/ImageSlider";
import { Calendar, Clock, Users } from "lucide-react";

// Event images from the public directory
const eventImages = [
  "/slider/image1.jpg",
  "/slider/image2.jpg",
  "/slider/image3.jpg",
  "/slider/image4.jpg",
  "/slider/image5.jpg",
  "/slider/image6.jpg",
];

const Events = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-black transition-colors"
    >
      <Navbar />
      
      <motion.div 
        className="pt-20 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Events
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover our upcoming and past events, workshops, and meetups designed to foster innovation and learning.
          </motion.p>
          
          {/* Inauguration Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-md relative overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400/10 dark:bg-blue-400/5 rounded-full -translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 dark:bg-purple-400/5 rounded-full translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <motion.h3 
              className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Inauguration Event - April 3, 2025
              </span>
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
                Join us for the grand inauguration of our club InovX REC on <span className="font-semibold text-blue-600 dark:text-blue-400">April 3, 2025</span>. We are honored to have 
                <motion.span 
                  className="font-semibold text-blue-600 dark:text-blue-400 inline-block mx-1"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Dhana Prabu Sekar
                </motion.span>, our esteemed alumni and successful entrepreneur, and 
                <motion.span 
                  className="font-semibold text-purple-600 dark:text-purple-400 inline-block mx-1"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  A2D Nandhakumar
                </motion.span>, the renowned tech influencer, as our chief guests. 
                This milestone event marks the beginning of our journey to foster innovation, creativity, and technological excellence within our community.
              </p>
              
              {/* Event details card */}
              <motion.div 
                className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-inner border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">April 3, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Chief Guests</p>
                      <p className="font-medium text-gray-900 dark:text-white">Dhana Prabu Sekar & A2D Nandhakumar</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Event Image Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Event Highlights
            </h2>
            <ImageSlider images={eventImages} interval={4000} />
          </motion.div>

          {/* Inauguration Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-4xl mx-auto mb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-xl border border-blue-100/50 dark:border-blue-900/30 overflow-hidden relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-400/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            {/* Event Header */}
            <div className="text-center mb-8 relative">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Inauguration Event</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
            </div>
            
            {/* Event Details */}
            <div className="space-y-6 relative">
              {/* Date and Time Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Date */}
                <div className="flex-1 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-blue-100/50 dark:border-blue-900/30 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center mr-4 shadow-md">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Date</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">April 3, 2025</p>
                    </div>
                  </div>
                </div>
                
                {/* Time */}
                <div className="flex-1 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-purple-100/50 dark:border-purple-900/30 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 flex items-center justify-center mr-4 shadow-md">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Time</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chief Guests */}
              <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-blue-100/50 dark:border-blue-900/30 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 flex items-center justify-center mr-4 shadow-md">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Chief Guests</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">Dhana Prabu Sekar & A2D Nandhakumar</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 ml-16">
                  Join us for the grand inauguration of our club InovX REC. We are honored to have our esteemed alumni and successful entrepreneurs as our chief guests.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <EventsSection />
      <Footer />
    </motion.div>
  );
};

export default Events;
