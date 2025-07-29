import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gova from './Members/GOVA.jpg';
import rakesh from './Members/rakesh.jpg';
import hari from './Members/hari.jpg';
import santhosh from './Members/santhosh.jpg';
import thejas from './Members/thejas.jpg';

interface Developer {
  name: string;
  linkedinUrl: string;
  imageUrl?: string;
}

const developers: Developer[] = [
  {
    name: "Hariharan K",
    linkedinUrl: "https://www.linkedin.com/in/hariharan-kannan-9a160b2a2/",
    imageUrl: hari
  },
  {
    name: "Govarthan V",
    linkedinUrl: "https://www.linkedin.com/in/govarthan-v",
    imageUrl: gova
  },
  {
    name: "Santhosh",
    linkedinUrl: "https://www.linkedin.com/in/santhosh-srinivasan",
    imageUrl: santhosh
  },
  {
    name: "Rakesh R",
    linkedinUrl: "http://www.linkedin.com/in/rakeshr311005",
    imageUrl: rakesh
  },
  {
    name: "Thejas",
    linkedinUrl: "https://www.linkedin.com/in/thejas-r-6a0543295",
    imageUrl: thejas
  }
];

const DevelopersCredit = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Developed By
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.open(dev.linkedinUrl, '_blank')}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-gray-700">
                {dev.imageUrl && (
                  <div className="relative mb-4">
                    <img 
                      src={dev.imageUrl} 
                      alt={dev.name} 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto border-3 border-blue-400 dark:border-blue-500 transition-all duration-300 group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                
                <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {dev.name}
                </h3>
                
                <a
                  href={dev.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin className="mr-1 md:mr-2 text-sm md:text-base" />
                  <span className="relative">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopersCredit;
