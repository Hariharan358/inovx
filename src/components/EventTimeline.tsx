import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Award, Rocket, Sparkles, Star, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  icon: React.ReactNode;
  color: string;
  gradient: string;
  images: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "AGENTIC AI",
    date: "October 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Seminar Hall",
    description: "Join us for a groundbreaking exploration of Agentic AI technologies that are reshaping the future of innovation. This comprehensive event features expert talks, hands-on workshops, and live demonstrations of cutting-edge AI systems. Discover how autonomous AI agents are transforming industries, from healthcare to finance, and learn practical skills to implement these technologies in your own projects. Network with industry leaders, participate in interactive sessions, and be part of the AI revolution that's defining tomorrow's digital landscape.",
    status: 'ongoing',
    icon: <Rocket className="h-5 w-5" />,
    color: "from-blue-500 to-purple-600",
    gradient: "from-blue-400 via-purple-500 to-pink-500",
    images: [
      "/events/ai.jpg",
      "/slider/image1.jpg",
      "/slider/image2.jpg",
      "/slider/image3.jpg"
    ]
  },
  {
    id: 2,
    title: "Club Inauguration",
    date: "April 3, 2025",
    time: "10:00 AM",
    location: "Main Seminar Hall",
    description: "Grand opening ceremony with special guests Dhana Prabu Sekar and A2D Nandhakumar. Experience the beginning of innovation and entrepreneurship journey.",
    status: 'upcoming',
    icon: <Award className="h-5 w-5" />,
    color: "from-green-500 to-teal-600",
    gradient: "from-green-400 via-teal-500 to-cyan-500",
    images: [
      "/slider/image1.jpg",
      "/slider/image2.jpg",
      "/slider/image3.jpg",
      "/slider/image4.jpg"
    ]
  },
  {
    id: 3,
    title: "Technical Workshop",
    date: "April 10, 2025",
    time: "2:00 PM",
    location: "Computer Lab 1",
    description: "Hands-on coding workshop focusing on modern web development technologies. Learn React, Node.js, and cloud deployment.",
    status: 'upcoming',
    icon: <Award className="h-5 w-5" />,
    color: "from-green-500 to-teal-600",
    gradient: "from-green-400 via-teal-500 to-cyan-500",
    images: [
      "/slider/image5.jpg",
      "/slider/image6.jpg",
      "/slider/image1.jpg",
      "/slider/image2.jpg"
    ]
  },
  {
    id: 4,
    title: "Business Pitch Competition",
    date: "April 17, 2025",
    time: "3:30 PM",
    location: "Auditorium",
    description: "Students present their innovative business ideas to industry experts. Showcase your entrepreneurial spirit and win exciting prizes.",
    status: 'upcoming',
    icon: <Users className="h-5 w-5" />,
    color: "from-orange-500 to-red-600",
    gradient: "from-orange-400 via-red-500 to-pink-500",
    images: [
      "/slider/image3.jpg",
      "/slider/image4.jpg",
      "/slider/image5.jpg",
      "/slider/image6.jpg"
    ]
  },
  {
    id: 5,
    title: "Networking Event",
    date: "April 24, 2025",
    time: "6:00 PM",
    location: "Conference Room",
    description: "Connect with alumni entrepreneurs and industry professionals. Build your network and discover new opportunities.",
    status: 'upcoming',
    icon: <Users className="h-5 w-5" />,
    color: "from-purple-500 to-pink-600",
    gradient: "from-purple-400 via-pink-500 to-rose-500",
    images: [
      "/slider/image1.jpg",
      "/slider/image2.jpg",
      "/slider/image3.jpg",
      "/slider/image4.jpg"
    ]
  }
];

const EventTimeline = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 dark:bg-green-400';
      case 'ongoing':
        return 'bg-blue-500 dark:bg-blue-400';
      case 'upcoming':
        return 'bg-gray-400 dark:bg-gray-500';
      default:
        return 'bg-gray-400 dark:bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'ongoing':
        return 'Ongoing';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Upcoming';
    }
  };

  const openEventModal = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    setIsAutoPlaying(true);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    setCurrentImageIndex(0);
    setIsAutoPlaying(false);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
      setIsAutoPlaying(false); // Pause auto-play when manually navigating
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
      setIsAutoPlaying(false); // Pause auto-play when manually navigating
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeEventModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (selectedEvent && isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedEvent.images.length - 1 ? 0 : prev + 1
        );
      }, 3000); // Change image every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [selectedEvent, isAutoPlaying]);

  useEffect(() => {
    if (selectedEvent) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedEvent, currentImageIndex]);

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="h-8 w-8 text-blue-500 dark:text-blue-400" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Event Timeline
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Follow our journey through exciting events and milestones. Each step brings us closer to innovation and success.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-4 mt-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
            style={{ y }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-50"></div>
          </motion.div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-12`}
                onHoverStart={() => setHoveredEvent(event.id)}
                onHoverEnd={() => setHoveredEvent(null)}
              >
                {/* Enhanced Timeline Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-600 z-10 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  animate={hoveredEvent === event.id ? { scale: 1.1 } : { scale: 1 }}
                >
                  <div className={`w-4 h-4 rounded-full ${getStatusColor(event.status)} shadow-lg`}></div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Event Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <motion.div 
                    className="relative group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card Background with Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 dark:border-gray-600/50">
                      {/* Event Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className={`p-3 rounded-xl bg-gradient-to-r ${event.gradient} text-white shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {event.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                              {event.title}
                            </h3>
                            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                              event.status === 'completed' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : event.status === 'ongoing'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                            }`}>
                              {getStatusText(event.status)}
                            </span>
                          </div>
                        </div>
                        
                        {/* Floating Star */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="text-yellow-400 dark:text-yellow-300"
                        >
                          <Star className="h-5 w-5" />
                        </motion.div>
                      </div>

                      {/* Event Details */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                          <Clock className="h-4 w-4 text-green-500" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4 text-red-500" />
                          <span className="font-medium">{event.location}</span>
                        </div>
                      </div>

                      {/* Event Description */}
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Enhanced Action Button */}
                      {event.id === 1 ? (
                        <motion.a
                          href="https://forms.gle/NafpoKpMwnBfLtw8A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:from-red-700 hover:via-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl block text-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex items-center justify-center gap-2">
                            Register Now
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.div>
                          </span>
                        </motion.a>
                      ) : (
                        <motion.button 
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => openEventModal(event)}
                        >
                          <span className="flex items-center justify-center gap-2">
                            Learn More
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.div>
                          </span>
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
            <span className="text-sm font-medium">More events coming soon...</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeEventModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedEvent.date} • {selectedEvent.time}
                  </p>
                </div>
                <button
                  onClick={closeEventModal}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

                             {/* Image Gallery */}
               <div className="relative h-96 bg-gray-100 dark:bg-gray-800">
                 <motion.img
                   key={currentImageIndex}
                   src={selectedEvent.images[currentImageIndex]}
                   alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                   className="w-full h-full object-cover"
                   initial={{ opacity: 0, scale: 1.1 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.5, ease: "easeInOut" }}
                 />

                 {/* Navigation Arrows */}
                 <button
                   onClick={prevImage}
                   className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                 >
                   <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                 </button>
                 <button
                   onClick={nextImage}
                   className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                 >
                   <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                 </button>

                 {/* Auto-play Controls */}
                 <div className="absolute top-4 left-4 flex gap-2">
                   <button
                     onClick={toggleAutoPlay}
                     className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                   >
                     {isAutoPlaying ? (
                       <Pause className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                     ) : (
                       <Play className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                     )}
                   </button>
                 </div>

                 {/* Image Counter */}
                 <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                   {currentImageIndex + 1} / {selectedEvent.images.length}
                 </div>

                 {/* Progress Bar */}
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                   <motion.div
                     className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                     initial={{ width: 0 }}
                     animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                     transition={{ duration: 3, ease: "linear", repeat: isAutoPlaying ? Infinity : 0 }}
                   />
                 </div>
               </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedEvent.gradient} text-white`}>
                    {selectedEvent.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {selectedEvent.location}
                    </h3>
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                      selectedEvent.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : selectedEvent.status === 'ongoing'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {getStatusText(selectedEvent.status)}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedEvent.description}
                </p>

                {/* Special AGENTIC AI Event Details */}
                {selectedEvent.id === 1 && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Event Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">Expert Keynote Sessions</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">2</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">Hands-on AI Workshops</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                            <span className="text-pink-600 dark:text-pink-400 font-bold text-sm">3</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">Live AI Demonstrations</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <span className="text-green-600 dark:text-green-400 font-bold text-sm">4</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">Industry Networking</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">5</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">AI Project Showcase</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                            <span className="text-red-600 dark:text-red-400 font-bold text-sm">6</span>
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">Career Opportunities</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Register Button for AGENTIC AI */}
                    <motion.a
                      href="https://forms.gle/NafpoKpMwnBfLtw8A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:from-red-700 hover:via-pink-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl block text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Register for AGENTIC AI Event
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </span>
                    </motion.a>
                  </div>
                )}

                                 {/* Image Thumbnails */}
                 <div className="flex gap-2 mt-6 overflow-x-auto">
                   {selectedEvent.images.map((image, index) => (
                     <button
                       key={index}
                       onClick={() => {
                         setCurrentImageIndex(index);
                         setIsAutoPlaying(false); // Pause auto-play when manually selecting
                       }}
                       className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                         index === currentImageIndex
                           ? 'border-blue-500 dark:border-blue-400'
                           : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                       }`}
                     >
                       <img
                         src={image}
                         alt={`Thumbnail ${index + 1}`}
                         className="w-full h-full object-cover"
                       />
                     </button>
                   ))}
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventTimeline; 