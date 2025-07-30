import React from "react";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import ImageSlider from "@/components/ImageSlider";
import { Calendar, Clock, Users } from "lucide-react";
import { useInView } from 'react-intersection-observer';

// Event images from the public directory
const eventImages = [
  "/slider/image1.jpg",
  "/slider/image2.jpg",
  "/slider/image3.jpg",
  "/slider/image4.jpg",
  "/slider/image5.jpg",
  "/slider/image6.jpg",
];

const timelineEvents = [
  {
    id: "crack-the-case",
    title: "Crack the Case",
    date: "5th & 6th August 2025",
    venue: "Main Seminar Hall",
    description: "A national-level, business strategy case competition. Analyze, strategize, and pitch your way through a real-world fintech challenge inspired by India's digital financial transformation.",
    link: "/event/crack-the-case",
    type: "upcoming",
    image: "/slider/image1.jpg",
  },
  {
    id: "student-networking",
    title: "Student Networking Session",
    date: "15th July 2025",
    venue: "Conference Hall",
    description: "Connect with fellow students, alumni, and industry professionals. Build meaningful relationships and expand your professional network in an interactive networking environment.",
    link: "/event/student-networking",
    type: "past",
    image: "/slider/image2.jpg",
  },
  {
    id: "workato-hackathon",
    title: "Workato AI Placements Hackathon",
    date: "20th June 2025",
    venue: "Computer Lab",
    description: "A competitive hackathon focused on AI and automation solutions. Work with cutting-edge technologies and showcase your skills to potential employers from Workato.",
    link: "/event/workato-hackathon",
    type: "past",
    image: "/slider/image3.jpg",
  },
  {
    id: "research-webinar",
    title: "Webinar on Research Intern",
    date: "10th May 2025",
    venue: "Online",
    description: "Learn about research internship opportunities, application processes, and how to prepare for research roles. Expert insights from successful research interns and professors.",
    link: "/event/research-webinar",
    type: "past",
    image: "/slider/image4.jpg",
  },
  {
    id: "placement-session",
    title: "Placement & Internship and Startup Awareness Session",
    date: "3rd May 2025",
    venue: "A105, Admin Block",
    description: "Learn directly from recruiters and alumni about resume building, internships, job portals, and placement strategies that will shape your future. Featuring Mohammed faheed.",
    link: "/event-placement",
    type: "past",
    image: "/slider/image5.jpg",
  },
  {
    id: "inauguration",
    title: "Inauguration of InovX REC",
    date: "April 3, 2025",
    venue: "REC Campus",
    description: "Join us for the grand inauguration of our club InovX REC. This milestone event marks the beginning of our journey to foster innovation, creativity, and technological excellence within our community.",
    link: "/event/inauguration",
    type: "past",
    image: "/slider/image6.jpg",
  },
  // Add more past events here as needed
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
          
          {/* Timeline Vertical Scroller */}
          <div className="relative mx-auto max-w-6xl py-16">
            <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 h-full -translate-x-1/2 z-0 rounded-full hidden md:block"></div>
            <div className="relative z-10 space-y-24">
              {timelineEvents.map((event, idx) => {
                const isUpcoming = event.type === 'upcoming';
                const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
                const isLeft = idx % 2 === 0;
                return (
                  <div key={event.id} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                      <motion.div
                        className={`w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${isUpcoming ? 'bg-red-500 animate-blink' : 'bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse'}`}
                        layoutId={`dot-${event.id}`}
                      />
                    </div>
                    
                    {/* Event Card */}
                    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} md:${isLeft ? 'justify-start' : 'justify-end'} justify-center`}>
                      <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 60 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: idx * 0.1, type: 'spring', stiffness: 60 }}
                        className={`w-full max-w-md ${isLeft ? 'mr-auto pr-12' : 'ml-auto pl-12'} md:${isLeft ? 'mr-auto pr-12' : 'ml-auto pl-12'} mx-auto md:mx-0`}
                      >
                        <div className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-2xl shadow-2xl overflow-hidden">
                          <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                          <div className="px-7 py-6">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-2xl font-bold mb-0">{event.title}</h3>
                              {isUpcoming && (
                                <span className="ml-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow">Upcoming</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-500 mb-2">{event.date} | {event.venue}</div>
                            <p className="mb-3 text-gray-700 dark:text-gray-200">{event.description}</p>
                            {event.link && (
                              <a href={event.link} className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition">Learn More</a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Connecting Line */}
                    {idx < timelineEvents.length - 1 && (
                      <div className="absolute left-1/2 top-full w-1 h-24 bg-gradient-to-b from-blue-400 to-purple-400 -translate-x-1/2 hidden md:block"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event Image Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Gallery
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
