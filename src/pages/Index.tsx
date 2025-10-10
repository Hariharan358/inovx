import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ImageSlider from "@/components/ImageSlider";
import DevelopersCredit from "@/components/DevelopersCredit";
import EventSlider from "@/components/EventSlider";
import banner from "../components/Members/banner.jpg"

const sliderImages = [
  "/slider/image1.jpg",
  "/slider/image2.jpg",
  "/slider/image3.jpg",
  "/slider/image4.jpg",
  "/slider/image5.jpg",
  "/slider/image6.jpg",
];

const events = [
  {
    id: "agentic-ai",
    title: "AGENTIC AI",
    image: "/events/ai.jpg",
    date: "15th October 2025",
    venue: "Main Seminar Hall",
    shortDescription:
      "Transforming today, shaping tomorrow, innovating for a brighter future. Join us for an exciting exploration of Agentic AI technologies and their impact on the future of innovation.",
  },
  {
    id: "crack-the-case",
    title: "Crack the Case",
    image: banner,
    date: "5th & 6th August 2025",
    venue: "Main Seminar Hall",
    shortDescription:
      "A national-level, business strategy case competition. Analyze, strategize, and pitch your way through a real-world fintech challenge inspired by India's digital financial transformation.",
  },
  {
    id: "inauguration",
    title: "Inauguration of InovX REC",
    image: "/slider/image2.jpg",
    date: "April 3, 2025",
    venue: "REC Campus",
    shortDescription:
      "Join us for the grand inauguration of our club InovX REC with esteemed guests Dhana Prabu Sekar and A2D Nandhakumar. Celebrate the beginning of our journey to foster innovation, creativity, and technological excellence!",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* AGENTIC AI Poster Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Upcoming Event
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't miss our exciting AGENTIC AI event - Innovation for the future
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group max-w-5xl w-full">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Poster container - Wide rectangle like presentation screen */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Live badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg animate-pulse">
                    LIVE
                  </span>
                </div>
                
                {/* Poster image - 16:9 aspect ratio */}
                <div className="w-full aspect-video">
                  <img 
                    src="/events/ai.jpg" 
                    alt="AGENTIC AI Event Poster" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay with event details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1">AGENTIC AI</h3>
                    <p className="text-sm mb-1">October 15, 2025</p>
                    <p className="text-xs opacity-90">Main Seminar Hall</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex justify-center mt-8"
          >
           
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700  transition-all duration-300 hover:shadow-xl"
            >
              <a href="https://forms.gle/NafpoKpMwnBfLtw8A"> Register Now </a>
            </motion.button>
          </motion.div>

          {/* Event details card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Date</h4>
                  <p className="text-gray-600 dark:text-gray-300">October 15, 2025</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Venue</h4>
                  <p className="text-gray-600 dark:text-gray-300">stay Tuned!</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Status</h4>
                  <p className="text-red-500 font-semibold">Live Event</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

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
