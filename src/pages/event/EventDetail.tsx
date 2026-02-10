import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Award, Rocket, Sparkles, Star, ExternalLink } from "lucide-react";
import banner from "../../components/Members/banner.jpg"
import crack from "../event/images/WhatsApp Image 2025-08-13 at 18.11.54_f40cb6f3.jpg"

const eventData = {
  "titanium-26": {
    title: "Titanium '26 Techception",
    image: "/events/titanium.jpg",
    date: "12 February 2026",
    time: "9:00 AM Onwards",
    venue: "A-NEW 103",
    status: "Live Event",
    about: "Sprint style technical treasure hunt for problem solvers. Teams progress through a series of rounds by decoding clues, solving logic and coding challenges, where each correct interpretation unlocks the next stage. With limited hints, participants uncover a hidden theme and product idea, and finally transforms their insights into a product concept with workflow, UI design, and a short pitch.",
    description: "All that you need to know about Techception -Titanium\n\nSprint style technical treasure hunt for problem solvers. Teams progress through a series of rounds by decoding clues, solving logic and coding challenges, each correct interpretation unlocks the next stage.\n\nPayment:\nMake Payment of Rs 200/ per team through the Titanium official site.",
    highlights: [
      {
        icon: <Rocket className="h-6 w-6" />,
        title: "The Tech Sprint",
        description: "Round 1: A mix of dumb charades and reasoning to reveal a hidden tech concept."
      },
      {
        icon: <Award className="h-6 w-6" />,
        title: "The Decode Battle",
        description: "Round 2: Solve shuffled tasks to get clues about the logic of the product."
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "The Tech Fix",
        description: "Round 3: Convert your solution into a basic product idea and pitch it."
      }
    ],
    schedule: [
      {
        time: "09:00 AM - 09:20 AM",
        event: "Round 1: The Tech Sprint (IDEA)",
        description: "A mix of dumb charades and reasoning! Each member receives a clue about a hidden tech concept. All clues together reveal one product or theme. The first team to crack it gets to choose their theme for the next round."
      },
      {
        time: "09:30 AM - 10:20 AM",
        event: "Round 2: The Decode Battle (LOGIC)",
        description: "Solve a set of four shuffled tasks to get clues about logic of the product: 1-Solve a tech riddle 2-Debug a code snippet 3- Solve a case study of a failed tech startup 4- Solve a program without Inbuilt Functions. Teams solve riddles and get product related hints."
      },
      {
        time: "10:30 AM - 12:00 PM",
        event: "Round 3: The Tech Fix (PRODUCT)",
        description: "Round 3 focuses on product development, where teams convert their solution into a basic product idea, create a visual design or workflow, and pitch it — explaining the problem, solution, and impact clearly."
      }
    ],
    speakers: [],
    registrationLink: "https://titaniumfest.com/events/61"
  },
  "crack-the-case": {
    title: "Crack the Case",
    image: banner,
    date: "5th & 6th August 2025",
    venue: "Main Seminar Hall, B Block",
    about: `Crack the Case is a national-level, business strategy case competition where student teams take on a real-world fintech challenge inspired by India's digital financial transformation. Analyze, strategize, and pitch your way through a high-stakes scenario built around innovation, inclusion, and disruption.`,
    chiefGuest: {
      name: "Ms. Rajalakshmi Srinivasan",
      title: "Director – Product Management, Zoho Corporation",
      bio: "Ms. Rajalakshmi is a leading voice in product innovation, women in tech, and youth mentorship. Her session will provide deep insights into building a long-term, impactful career in the tech-business intersection."
    }
  },
};

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return <div className="text-center py-20">Event not found.</div>;
  }

  // Special layout for Titanium event
  if (id === "titanium-26" && 'status' in event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 transition-colors relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 relative z-10">
          {/* Back Button */}
          <motion.button
            className="mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-2"
            onClick={() => navigate(-1)}
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <span>←</span> Back to Events
          </motion.button>

          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 text-sm font-semibold mb-6 animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              {event.status}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {event.title}
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-6 text-lg text-gray-600 dark:text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>{event.venue}</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              {event.about}
            </p>

            {/* Register Button */}
            <motion.a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:from-red-700 hover:via-pink-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-5 w-5" />
              Register Now
            </motion.a>
          </motion.div>

          {/* Event Image */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={event.image}
                alt="Titanium '26 Event Poster"
                className="relative w-full max-w-5xl mx-auto h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Event Description */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About the Event</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </motion.div>

          {/* Event Highlights */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{highlight.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Event Schedule</h2>
            <div className="space-y-6">
              {event.schedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.event}</h3>
                      {item.description && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> {/* Speakers */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Featured Speakers</h2>
            <div className="grid grid-cols-1 center mx-9 px-8  gap-8">
              {event.speakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{speaker.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{speaker.title}</p>
                  <p className="text-gray-600 dark:text-gray-300">{speaker.bio}</p>
                  <a href="https://www.linkedin.com/in/sriram-aiexpert/"><button className="bg-blue-400 text-white px-3 py-1 rounded-md">Linkedin</button></a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Join the AI Revolution?</h2>
              <p className="text-xl mb-6 opacity-90">Don't miss this opportunity to be part of the future of artificial intelligence.</p>
              <motion.a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-5 w-5" />
                Register Now - Limited Seats Available
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Default layout for other events
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors relative overflow-hidden">
      <div className="max-w-4xl mx-auto py-12 px-4 relative z-10">
        <button className="mb-6 text-blue-600 hover:underline" onClick={() => navigate(-1)}>&larr; Back</button>

        {/* Event Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">{event.date} | {event.venue}</div>
          <p className="text-lg text-gray-700 dark:text-gray-200">{event.about}</p>
        </div>

        {/* Event Image */}
        <div className="mb-8">
          <img
            src={crack}
            alt="Crack the Case Event - Students attending the presentation in seminar hall"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Chief Guest Section */}
        {'chiefGuest' in event && (
          <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="/woman-portrait.png"
              alt="Chief Guest portrait"
              className="w-32 h-32 md:w-40 mr-3 p-1 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-md mb-4 md:mb-0"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-300">Chief Guest</h2>
              <div className="text-xl font-semibold mb-1">{event.chiefGuest.name}</div>
              <div className="text-gray-700 dark:text-gray-200 mb-2">{event.chiefGuest.title}</div>
              <div className="text-gray-700 dark:text-gray-200">{event.chiefGuest.bio}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
