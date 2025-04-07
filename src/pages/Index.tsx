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
  "/slider/image1.png",
  "/slider/image2.png",
  "/slider/image3.png",
  "/slider/image4.png",
  "/slider/image5.png",
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
