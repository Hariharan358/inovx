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
          Inauguration Event Clicks
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-md"
        >
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Join us for the grand inauguration of our club InovX REC on <span className="font-semibold">April 3, 2025</span>. We are honored to have 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> Dhana Prabu Sekar</span>, our esteemed alumni and successful entrepreneur, and 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> A2D Nandhakumar</span>, the renowned tech influencer, as our chief guests. 
            This milestone event marks the beginning of our journey to foster innovation, creativity, and technological excellence within our community.
          </p>
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
