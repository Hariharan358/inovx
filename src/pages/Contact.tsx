
import React from "react";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />

      <Footer />
    </motion.div>
  );
};

export default Contact;
