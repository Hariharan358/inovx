import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import About from "./About";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ImageSlider from "@/components/ImageSlider";
import DevelopersCredit from "@/components/DevelopersCredit";
import { theme } from "@/lib/theme";

// Images from the public directory
const sliderImages = [
  "/slider/image1.jpg",
  "/slider/image2.jpg",
  "/slider/image3.jpg",
  "/slider/image4.jpg",
  "/slider/image5.jpg",
  "/slider/image6.jpg",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Inauguration Event Clicks
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl shadow-md relative overflow-hidden group"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400/10 dark:bg-blue-400/5 rounded-full -translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 dark:bg-purple-400/5 rounded-full translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Join us for the grand inauguration of our club InovX REC on <motion.span 
                className="font-semibold text-blue-600 dark:text-blue-400 inline-block"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                April 3, 2025
              </motion.span>. We are honored to have 
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
        
        <ImageSlider images={sliderImages} interval={4000} />
      </motion.div>
      <AboutSection/>
      <EventsSection/>
      <DevelopersCredit />
      
      <Footer/>
    </div>
  );
};

export default Index;
