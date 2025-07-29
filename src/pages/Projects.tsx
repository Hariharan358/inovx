import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, X} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import project from './projects/project.png';
import { Github } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Smart Irrigation and Crop Health Monitoring System",
      shortDescription: "IoT-based system for automated irrigation and crop monitoring",
      description: "An advanced IoT-based system that revolutionizes agricultural practices through automated irrigation and comprehensive crop health monitoring. The system utilizes ESP8266 microcontrollers, DHT11 temperature and humidity sensors, and soil moisture sensors to create a smart farming solution.",
      features: [
        "Real-time monitoring of soil moisture levels",
        "Automated irrigation based on sensor data",
        "Temperature and humidity tracking",
        "Cloud-based data visualization via ThingSpeak",
        "Mobile app integration for remote monitoring",
        "Energy-efficient design with solar power option"
      ],
      technologies: ["ESP8266", "DHT11", "Soil Moisture Sensor", "ThingSpeak", "IoT", "Arduino", "C++"],
      githubLink: "https://github.com/RakeshR-3110/Smart-Irrigation-and-Crop-Health-Monitoring-System",
      image: project,
      icon: <Code2 className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      credits: {
        name: "Rakesh R",
        linkedin: "https://www.linkedin.com/in/rakesh-r-91a324274"
      }
    }
  ];

  return (
    <div className="mobile-safe min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="mobile-heading font-bold text-gray-900 dark:text-white mb-4">
              Our Projects
            </h1>
            <p className="mobile-text text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our latest projects and contributions to the tech community.
            </p>
          </motion.div>

          <AnimatePresence>
            {selectedProject ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-96 object-contain bg-gray-100 dark:bg-gray-700 p-8 rounded-t-xl"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedProject.color} p-2 text-white`}>
                        {selectedProject.icon}
                      </div>
                      {selectedProject.githubLink && (
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                        </a>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedProject.description}
                    </p>
                    {selectedProject.credits && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Credits
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Developed by{" "}
                          <a
                            href={selectedProject.credits.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            {selectedProject.credits.name}
                          </a>
                        </p>
                      </div>
                    )}
                    {selectedProject.features && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Features
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain bg-gray-100 dark:bg-gray-700 p-4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${project.color} p-2 text-white`}>
                            {project.icon}
                          </div>
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-gray-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.shortDescription || project.description}
                      </p>
                      {project.credits && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Developed by{" "}
                            <a
                              href={project.credits.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                              {project.credits.name}
                            </a>
                          </p>
                        </div>
                      )}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Collaborate?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're always open to new project ideas and collaborations.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-block"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects; 