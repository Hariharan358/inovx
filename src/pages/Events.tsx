import React from "react";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import ImageSlider from "@/components/ImageSlider";

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
            className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Inauguration Event - April 3, 2025
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Join us for the grand inauguration of our club InovX REC on April 3, 2025. We are honored to have 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Dhana Prabu Sekar</span>, our esteemed alumni and successful entrepreneur, and 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> A2D Nandhakumar</span>, the renowned tech influencer, as our chief guests. 
              This milestone event marks the beginning of our journey to foster innovation, creativity, and technological excellence within our community.
            </p>
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
        </div>
      </motion.div>
      
      <EventsSection />
      <Footer />
    </motion.div>
  );
};

export default Events;
