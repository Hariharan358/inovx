
import React from "react";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <EventsSection />
      <Footer />
    </motion.div>
  );
};

export default Events;
