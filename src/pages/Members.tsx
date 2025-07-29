import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Users, Calendar, Clock } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import hari from '../components/Members/hari.jpg';
import santosh from '../components/Members/santhosh.jpg';
import rakesh from '../components/Members/rakesh.jpg';
import thejas from '../components/Members/thejas.jpg';
import gova from '../components/Members/GOVA.jpg';


const teamsData = [
  {
    name: "Core Team",
    count: 5,
    members: [
      {
        name: "Vignesh S",
        role: "President",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        linkedin: "https://linkedin.com/in/vignesh-s"
      },
      {
        name: "Vicramaan S",
        role: "Vice President",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        linkedin: "https://linkedin.com/in/vicramaan-s"
      },
      {
        name: "Mythili C",
        role: "Secretary",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        linkedin: "https://linkedin.com/in/mythili-c"
      },
      {
        name: "Thaniya Pratyaini S",
        role: "Treasurer",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        linkedin: "https://linkedin.com/in/thaniya-pratyaini"
      },
      {
        name: "Bala Murugan J",
        role: "OP Manager",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        linkedin: "https://linkedin.com/in/bala-murugan"
      }
    ]
  },
  {
    name: "Technical Team",
    count: 7,
    members: [
      {
        name: "Govarthan",
        role: "Technical lead",
        image: gova,
        linkedin: "https://linkedin.com/in/govarthan-v"
      },
      {
        name: "Hariharan K",
        role: "Technical Lead",
        image: hari,
        linkedin: "https://www.linkedin.com/in/hariharan-kannan-9a160b2a2/"
      },
      {
        name: "Santosh S",
        role: "Technical Associate",
        image: santosh,
        linkedin: "https://www.linkedin.com/in/santhosh-srinivasan"
      },
      {
        name: "Rakesh R",
        role: "Hardware Architect",
        image: rakesh,
        linkedin: "https://www.linkedin.com/in/rakesh-r-91a324274"
      },
      {
        name: "Akash",
        role: "Software Associate",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        linkedin: "https://linkedin.com/in/akash"
      },
      {
        name: "Thejas R",
        role: "Technical Lead",
        image: thejas,
        linkedin: "https://www.linkedin.com/in/thejas-r-6a0543295",
        year: "2024",
        department: "Computer Science"
      },
      
      {
        name: "Subash",
        role: "Software Associate",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        linkedin: "https://linkedin.com/in/subash"
      }
    ]
  },
  {
    name: "Design and Graphics Team",
    count: 5,
    members: [
      {
        name: "Nithin S",
        role: "Design Lead",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        linkedin: "https://linkedin.com/in/nithin-s",
        year: "2024",
        department: "Design"
      },
      {
        name: "Shreyasri A",
        role: "Design Lead",
        image: "https://randomuser.me/api/portraits/women/14.jpg",
        linkedin: "https://linkedin.com/in/shreyasri-a",
        year: "2024",
        department: "Design"
      },
      {
        name: "Pranav R",
        role: "Design Associate",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        linkedin: "https://linkedin.com/in/pranav-r",
        year: "2024",
        department: "Design"
      },
      {
        name: "Barath S",
        role: "Editor",
        image: "https://randomuser.me/api/portraits/men/16.jpg",
        linkedin: "https://linkedin.com/in/barath-s",
        year: "2024",
        department: "Design"
      },
      {
        name: "Mukil",
        role: "Editor",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        linkedin: "https://linkedin.com/in/mukil",
        year: "2024",
        department: "Design"
      }
    ]
  },
  {
    name: "Event Management Team",
    count: 5,
    members: [
      {
        name: "Sharath",
        role: "Event Lead",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        linkedin: "https://linkedin.com/in/sharath",
        year: "2024",
        department: "Event Management"
      },
      {
        name: "Thiluck",
        role: "Event Lead",
        image: "https://randomuser.me/api/portraits/men/19.jpg",
        linkedin: "https://linkedin.com/in/thiluck",
        year: "2024",
        department: "Event Management"
      },
      {
        name: "Pooja Sree K",
        role: "Event Lead",
        image: "https://randomuser.me/api/portraits/women/20.jpg",
        linkedin: "https://linkedin.com/in/pooja-sree",
        year: "2024",
        department: "Event Management"
      },
      {
        name: "Kobika V",
        role: "Event Associate",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        linkedin: "https://linkedin.com/in/kobika-v",
        year: "2024",
        department: "Event Management"
      },
      {
        name: "Architha M",
        role: "Event Associate",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        linkedin: "https://linkedin.com/in/architha-m",
        year: "2024",
        department: "Event Management"
      }
    ]
  },
  {
    name: "Management and Public Relations",
    count: 6,
    members: [
      {
        name: "Sheba Cherian",
        role: "Management Lead",
        image: "https://randomuser.me/api/portraits/women/23.jpg",
        linkedin: "https://linkedin.com/in/sheba-cherian",
        year: "2024",
        department: "Management"
      },
      {
        name: "Varsha Leena",
        role: "Management Lead",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
        linkedin: "https://linkedin.com/in/varsha-leena",
        year: "2024",
        department: "Management"
      },
      {
        name: "Afrin Fathima",
        role: "Business Relations",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        linkedin: "https://linkedin.com/in/afrin-fathima",
        year: "2024",
        department: "Business"
      },
      {
        name: "Shivya D",
        role: "Business Relations",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        linkedin: "https://linkedin.com/in/shivya-d",
        year: "2024",
        department: "Business"
      },
      {
        name: "Jilla Varsha",
        role: "Partnership Associate",
        image: "https://randomuser.me/api/portraits/women/27.jpg",
        linkedin: "https://linkedin.com/in/jilla-varsha",
        year: "2024",
        department: "Business"
      },
      {
        name: "Arjitha AS",
        role: "Community Engagement",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        linkedin: "https://linkedin.com/in/arjitha-as",
        year: "2024",
        department: "Community"
      }
    ]
  },
  {
    name: "Media and Content",
    count: 6,
    members: [
      {
        name: "Subramaniam",
        role: "Media Lead",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        linkedin: "https://linkedin.com/in/subramaniam",
        year: "2024",
        department: "Media"
      },
      {
        name: "Sahana S",
        role: "PR Lead",
        image: "https://randomuser.me/api/portraits/women/30.jpg",
        linkedin: "https://linkedin.com/in/sahana-s",
        year: "2024",
        department: "Media"
      },
      {
        name: "Swetha",
        role: "PR Lead",
        image: "https://randomuser.me/api/portraits/women/31.jpg",
        linkedin: "https://linkedin.com/in/swetha",
        year: "2024",
        department: "Media"
      },
      {
        name: "Naran",
        role: "Videography",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        linkedin: "https://linkedin.com/in/naran",
        year: "2024",
        department: "Media"
      },
      {
        name: "Yuvaraj V",
        role: "Photography",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        linkedin: "https://linkedin.com/in/yuvaraj-v",
        year: "2024",
        department: "Media"
      },
      {
        name: "Rohith",
        role: "Content Writer",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        linkedin: "https://linkedin.com/in/rohith",
        year: "2024",
        department: "Media"
      }
    ]
  }
];

const Members = () => {
  return (
    <div className="mobile-safe min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
      <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="mobile-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Our Team
            </h1>
            <p className="mobile-text text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Meet the talented individuals behind InovX who are driving innovation forward.
            </p>
            
          </motion.div>

          {teamsData.map((team, teamIndex) => (
          <motion.div 
              key={team.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: teamIndex * 0.1 }}
              className="mb-12 sm:mb-16"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 blur-md opacity-50" />
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="relative">
                    <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      {team.name}
                    </h2>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <span className="relative px-5 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-flex items-center self-start sm:auto border border-blue-500/20 dark:border-blue-400/20 shadow-sm backdrop-blur-sm">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2 animate-pulse" />
                    {team.count} Members
                  </span>
                </div>
              </div>

              <div className="mobile-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {team.members.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 backdrop-blur-sm border border-gray-100/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50"
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 blur-sm group-hover:blur-md transition-all duration-300" />
                  <img
                    src={member.image}
                    alt={member.name}
                          className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 text-center line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mb-3 text-center line-clamp-2">
                        {member.role}
                      </p>
                      <div className="flex space-x-4">
                        {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                  >
                            <Linkedin className="h-5 w-5" />
                  </a>
                        )}
                      </div>
                </div>
              </motion.div>
            ))}
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