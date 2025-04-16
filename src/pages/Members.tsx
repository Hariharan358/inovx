import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const membersData = [
  {
    name: "Vignesh",
    role: "President",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "barath@inovx.com",
    linkedin: "https://linkedin.com/in/barath",
    github: "https://github.com/barath",
    year: "2024",
    department: "Computer Science"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "jane@inovx.com",
    linkedin: "https://linkedin.com/in/janesmith",
    github: "https://github.com/janesmith",
    year: "2024",
    department: "Information Technology"
  },
  {
    name: "Alex Johnson",
    role: "Technical Lead",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "alex@inovx.com",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    year: "2024",
    department: "Computer Science"
  },
  {
    name: "Sarah Williams",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "sarah@inovx.com",
    linkedin: "https://linkedin.com/in/sarahwilliams",
    github: "https://github.com/sarahwilliams",
    year: "2024",
    department: "Business Administration"
  },
  {
    name: "Michael Brown",
    role: "Design Lead",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "michael@inovx.com",
    linkedin: "https://linkedin.com/in/michaelbrown",
    github: "https://github.com/michaelbrown",
    year: "2024",
    department: "Design"
  },
  {
    name: "Emily Davis",
    role: "Content Manager",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "emily@inovx.com",
    linkedin: "https://linkedin.com/in/emilydavis",
    github: "https://github.com/emilydavis",
    year: "2024",
    department: "Media Studies"
  }
];

const Members = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the talented individuals behind InovX who are driving innovation forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-blue-500 dark:border-blue-400"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {member.department} • {member.year}
                </p>
                <div className="flex space-x-4">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Members; 