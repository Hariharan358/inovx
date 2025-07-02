import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import video from "../img/event/video.mp4"
import image1 from "../img/event/image1.jpg";
import image2 from "../img/event/image2.jpg";
import image3 from "../img/event/image3.jpg";
import image4 from "../img/event/image4.jpg";
import image5 from "../img/event/image5.jpg";
const eventImages = [
    image1,
    image2,
    image3,
    image4,
    image5
];

const EventPlacementPage = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-20">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Placement & Internship and Startup Awareness Session
          </span>
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            📅 <strong>3rd May 2025</strong> | 📍 <strong>A105, Admin Block</strong> | 🧑🏼‍💼 <strong>Mohammed faheed</strong>
          </p>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Learn directly from recruiters and alumni about resume building, internships, job portals, and placement strategies that will shape your future.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <video
            ref={videoRef}
            className="w-full h-auto rounded-xl shadow-xl"
            loop
            controls
            muted={isMuted}
            playsInline
            src={video}// Your actual video file
          />
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full text-blue-600 dark:text-teal-400 shadow-md hover:scale-110 transition"
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </button>
        </motion.div>

        {/* Image Slider Below Video */}
        <div className="mt-16">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Glimpses from the Awareness Session
          </motion.h2>
          <ImageSlider images={eventImages} interval={4000} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPlacementPage;
