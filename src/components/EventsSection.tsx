import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { Calendar, Sun, Moon } from "lucide-react";

import ScrollVelocity from '../blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
 // Add Volume2 and VolumeX icons

const EventsSection = () => {
  const velocity=50;
  const [darkMode, setDarkMode] = useState(false);
  

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? "bg-gray-900 text-black" : "bg-club-lightGray text-black";

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // State to track mute status

  useEffect(() => {
    // Try to play the video as soon as the component mounts
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    }
  }, []);

  // Function to toggle mute/unmute
  const toggleMute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = !videoElement.muted; // Toggle mute
      setIsMuted(videoElement.muted); // Update state
    }
  };

  return (
    <section id="events" className="py-20 bg-club-lightGray dark:bg-gray-900 transition-colors">
       <ScrollVelocity 
  texts={['Innovation', 'Entrepreneurship']} 
  velocity={velocity} 
  className="mx-10 mb-10 mt-0 px-0 py-0 custom-scroll-text text-2xl md:text-4xl text-black dark:text-white"
/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl mt-10 md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Guest Reveal Video 
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Watch our inuguration guest release video, featuring exciting innovations and ideas. @ Main Seminar Hall
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              Watch More <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="w-full md:w-2/3 relative">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted={isMuted} // Bind muted to the state
              playsInline
              src="/videos/Comp 1.mp4" // This assumes the video is in your "public/videos" directory
            />
            {/* Mute/Unmute Button on top of the video */}
            <Button
              onClick={toggleMute}
              className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full text-club-blue dark:text-club-teal"
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />} 
            </Button>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">GRAND INAUGURATION :</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Innovation is not just about ideas; it's about turning those ideas into reality, and that's exactly what InovX stands for. This club will be a hub where creativity meets technology, where students collaborate, experiment, and push boundaries. Whether it's through workshops, projects, or discussions, InovX will provide a platform to explore, learn, and grow together.
            </p>
          </div>
        </div>

        
          {/* Background pattern */}
          
          
          
        
      </div>
    </section>
  );
};

export default EventsSection;