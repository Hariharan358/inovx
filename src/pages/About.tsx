import React from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mobile-safe min-h-screen bg-white dark:bg-black transition-colors"
    >
      <Navbar/>
      <AboutSection />
      <Footer />
    </motion.div>
  );
};

export default About;
