import React from "react";
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import ImageSlider from "@/components/ImageSlider";
import EventTimeline from "@/components/EventTimeline";
import { Calendar, Clock, Users } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import carck from "../components/Members/crack.jpg"
import webinar from "../components/eventimg/webinar_bargay.png"
import placement from "../components/eventimg/placemnt.jpg"
import student from "../components/eventimg/buvi.jpg"

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
    image: carck,
  },
  {
    id: "student-networking",
    title: "Student Networking Session",
    date: "25th July 2025",
    venue: "A105, Admin Block",
    description: "Connect with fellow students, alumni, and industry professionals. Build meaningful relationships and expand your professional network in an interactive networking environment.",
    link: "/events/student-networking",
    type: "past",
    image: student,
  },
  {
    id: "workato-hackathon",
    title: "Workato AI Placements Hackathon",
    date: "9th & 10th July, 2025",
    venue: "Computer Lab",
    description: "A competitive hackathon focused on AI and automation solutions. Work with cutting-edge technologies and showcase your skills to potential employers from Workato.",
    link: "/events/workato-hackathon",
    type: "past",
    image: "/events/IMG_7717.JPG",
  },
  {
    id: "research-webinar",
    title: "Webinar on Research Intern",
    date: "10th May 2025",
    venue: "Online",
    description: "Learn about research internship opportunities, application processes, and how to prepare for research roles. Expert insights from successful research interns and professors.",
    link: "/events/research-webinar",
    type: "past",
    image: webinar,
  },
  {
    id: "placement-session",
    title: "Placement & Internship and Startup Awareness Session",
    date: "3rd May 2025",
    venue: "A105, Admin Block",
    description: "Learn directly from recruiters and alumni about resume building, internships, job portals, and placement strategies that will shape your future. Featuring Mohammed faheed.",
    link: "events/event-placement",
    type: "past",
    image: placement,
  },
  {
    id: "inauguration",
    title: "Inauguration of InovX REC",
    date: "April 3, 2025",
    venue: "REC Campus",
    description: "Join us for the grand inauguration of our club InovX REC. This milestone event marks the beginning of our journey to foster innovation, creativity, and technological excellence within our community.",
    link: "/events/inovx",
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
      className="mobile-safe min-h-screen bg-white dark:bg-black transition-colors"
    >
      <Navbar />
      
      <motion.div 
        className="pt-16 md:pt-20 pb-12 md:pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mobile-container mx-auto">
          <motion.h1 
<<<<<<< HEAD
            className="mobile-heading font-bold text-center mb-4 text-gray-900 dark:text-white"
=======
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white"
>>>>>>> 637bb9f4c16af57aa90d53752d6135bd6032a8ed
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Events
          </motion.h1>
          
          <motion.p 
<<<<<<< HEAD
            className="mobile-text text-gray-600 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto"
=======
            className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg md:text-xl"
>>>>>>> 637bb9f4c16af57aa90d53752d6135bd6032a8ed
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover our upcoming and past events, workshops, and meetups designed to foster innovation and learning.
          </motion.p>
          
<<<<<<< HEAD
          {/* Inauguration Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8 md:mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 md:p-8 rounded-xl shadow-md relative overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400/10 dark:bg-blue-400/5 rounded-full -translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/10 dark:bg-purple-400/5 rounded-full translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
            
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Inauguration Event - April 3, 2025
              </span>
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative"
            >
              <p className="mobile-text text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
                Join us for the grand inauguration of our club InovX REC on <span className="font-semibold text-blue-600 dark:text-blue-400">April 3, 2025</span>. We are honored to have 
                <motion.span 
                  className="font-semibold text-blue-600 dark:text-blue-400 inline-block mx-1"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Dhana Prabu Sekar
                </motion.span>, our esteemed alumni and successful entrepreneur, and 
                <motion.span 
                  className="font-semibold text-purple-600 dark:text-purple-400 inline-block mx-1"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  A2D Nandhakumar
                </motion.span>, the renowned tech influencer, as our chief guests. 
                This milestone event marks the beginning of our journey to foster innovation, creativity, and technological excellence within our community.
              </p>
              
              {/* Event details card */}
              <motion.div 
                className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-inner border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">April 3, 2025</p>
=======
          {/* Enhanced Timeline */}
          <div className="relative mx-auto max-w-7xl py-16">
            {/* --- Decorative Background Elements --- */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {/* Gradient Blobs */}
              <div className="absolute top-[-80px] left-[-120px] w-96 h-96 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-[-100px] right-[-100px] w-[28rem] h-[28rem] bg-gradient-to-tr from-pink-400/20 via-yellow-300/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slower"></div>
              {/* Subtle Lines */}
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200/30 via-purple-200/20 to-pink-200/30 -translate-x-1/2"></div>
              {/* Floating Icons */}
              <svg className="absolute left-1/4 top-24 w-10 h-10 text-blue-300/30 animate-float-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l1.41-1.41M6.34 6.34L4.93 4.93" /></svg>
              <svg className="absolute right-1/4 bottom-32 w-8 h-8 text-pink-300/30 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" /></svg>
            </div>
            {/* --- End Decorative Background Elements --- */}
            {/* Central vertical timeline line (progress style, animated) */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 h-full -translate-x-1/2 z-0 rounded-full hidden lg:block origin-top"
            />
            <div className="relative z-10 space-y-20 lg:space-y-40">
              {timelineEvents.map((event, idx) => {
                const isUpcoming = event.type === 'upcoming';
                const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
                const isLeft = idx % 2 === 0;
                return (
                  <div key={event.id} className="relative">
                    
                    
                                         {/* Event Card Container */}
                     <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} justify-center`}>
                       <motion.div
                         ref={ref}
                         initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 60 }}
                         animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                         transition={{ duration: 0.8, delay: idx * 0.15, type: 'spring', stiffness: 50 }}
                         className={`w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ${isLeft ? 'mr-auto pr-8 lg:pr-48' : 'ml-auto pl-8 lg:pl-48'} mx-auto lg:mx-0`}
                       >
                                                 <motion.div 
                           animate={{ y: [0, -5, 0] }}
                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                           className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-105 relative group"
                         >
                           {/* Glow Effect */}
                           <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                          {/* Image Container */}
                          <div className="relative">
                            <img src={event.image} alt={event.title} className="w-full h-48 md:h-56 lg:h-64 object-cover" />
                            {/* Badge Overlay */}
                            <div className="absolute top-4 right-4 flex flex-col space-y-2">
                              {event.id === "crack-the-case" && (
                                <span className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg animate-pulse">
                                  LIVE
                                </span>
                              )}
                              {isUpcoming && (
                                <span className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                                  Upcoming
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="px-6 md:px-8 py-6 md:py-8">
                            <div className="mb-4">
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-white leading-tight">
                                {event.title}
                              </h3>
                              <div className="flex items-center text-sm md:text-base text-gray-500 dark:text-gray-400 mb-3">
                                <span className="font-medium">{event.date}</span>
                                <span className="mx-2">•</span>
                                <span>{event.venue}</span>
                              </div>
                            </div>
                            
                            <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                              {event.description}
                            </p>
                            
                            {event.link && (
                              <a 
                                href={event.link} 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                              >
                                Learn More
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
>>>>>>> 637bb9f4c16af57aa90d53752d6135bd6032a8ed
                    </div>
                    
                    
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
      <EventTimeline/>
      <EventsSection />
      
      <Footer />
    </motion.div>
  );
};

export default Events;
