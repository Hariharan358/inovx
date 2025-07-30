import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import DevelopersCredit from "@/components/DevelopersCredit";
import EventSlider from "@/components/EventSlider";
import banner from "../components/Members/banner.jpg"

const events = [
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-12 relative"
        >
          {/* --- Decorative Background Elements --- */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {/* Gradient Blobs */}
            <div className="absolute top-[-60px] left-[-80px] w-80 h-80 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-[-60px] right-[-60px] w-[20rem] h-[20rem] bg-gradient-to-tr from-pink-400/20 via-yellow-300/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slower"></div>
            {/* Subtle Lines */}
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200/30 via-purple-200/20 to-pink-200/30 -translate-x-1/2"></div>
            {/* Floating Icons */}
            <svg className="absolute left-1/4 top-16 w-8 h-8 text-blue-300/30 animate-float-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l1.41-1.41M6.34 6.34L4.93 4.93" /></svg>
            <svg className="absolute right-1/4 bottom-20 w-6 h-6 text-pink-300/30 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" /></svg>
          </div>
          {/* --- End Decorative Background Elements --- */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Featured Events and Highlights
          </motion.h2>

          <EventSlider events={events} />
        </motion.div>

        {/* Other Sections */}
        <AboutSection />
        <EventsSection />
        <DevelopersCredit />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
