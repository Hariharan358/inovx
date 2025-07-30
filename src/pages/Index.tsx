import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ImageSlider from "@/components/ImageSlider";
import DevelopersCredit from "@/components/DevelopersCredit";
import { theme } from "@/lib/theme";
import EventSlider from "@/components/EventSlider";

// Images from the public directory
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
    id: "crack-the-case",
    title: "Crack the Case",
    image: "/slider/image1.jpg", // Stock image for the case study event
    date: "5th & 6th August 2025",
    venue: "Main Seminar Hall",
    shortDescription: "A national-level, business strategy case competition. Analyze, strategize, and pitch your way through a real-world fintech challenge inspired by India's digital financial transformation.",
  },
  {
    id: "inauguration",
    title: "Inauguration of InovX REC",
    image: "/slider/image2.jpg", // Use the original inauguration image or a suitable one
    date: "April 3, 2025",
    venue: "REC Campus",
    shortDescription: "Join us for the grand inauguration of our club InovX REC with esteemed guests Dhana Prabu Sekar and A2D Nandhakumar. Celebrate the beginning of our journey to foster innovation, creativity, and technological excellence!",
  },
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
          <span>
            Featured Events and Highlights
          </span>
        </motion.h2>
        
        {/* Replace the static inauguration section with the EventSlider */}
        <EventSlider events={events} />
      </motion.div>
      <AboutSection/>
      <EventsSection/>
      <DevelopersCredit />
      
      <Footer/>
    </div>
  );
};

export default Index;
