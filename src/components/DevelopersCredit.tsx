import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gova from './Members/GOVA.jpg';
import rakesh from './Members/rakesh.jpg';
import hari from './Members/harii.jpg';
import santhosh from './Members/santhosh.jpg';
import thejas from './Members/thejas.jpg';
import { useEffect, useState } from 'react';

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

<<<<<<< HEAD
=======
const Wrapper = styled.div<{ isDark: boolean }>`
  background: ${props => props.isDark 
    ? 'linear-gradient(120deg, #0f172a, #1e293b)' 
    : 'linear-gradient(120deg, #f9fafc, #e2e8f0)'
  };
  padding: 4rem 1rem;
  transition: background 0.3s ease;
`;
const LinkedIn = styled.a`
  font-size: 0.95rem;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  display: inline-flex;  /* changed from inline-block to inline-flex */
  align-items: center;   /* vertically center icon and text */
  padding-bottom: 2px;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #2563eb;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #1d4ed8;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Title = styled.h2<{ isDark: boolean }>`
  text-align: center;
  font-size: 2.75rem;
  font-weight: 800;
  color: ${props => props.isDark ? '#f8fafc' : '#0f172a'};
  margin-bottom: 3.5rem;
  transition: color 0.3s ease;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Always 5 columns */
  gap: 2rem; /* Moderate gap */
  max-width: 1300px; /* Wider to fit larger cards */
  margin: 0 auto;
`;

const Card = styled.div<{ isDark: boolean }>`
  background: ${props => props.isDark 
    ? 'rgba(30, 41, 59, 0.8)' 
    : 'rgba(255, 255, 255, 0.15)'
  };
  border: 1px solid ${props => props.isDark 
    ? 'rgba(148, 163, 184, 0.3)' 
    : 'rgba(255, 255, 255, 0.3)'
  };
  backdrop-filter: blur(12px);
  border-radius: 24px; /* Larger radius */
  padding: 2.2rem 1.2rem; /* Larger padding */
  text-align: center;
  box-shadow: ${props => props.isDark 
    ? '0 8px 30px rgba(0, 0, 0, 0.3)' 
    : '0 8px 30px rgba(0, 0, 0, 0.05)'
  };
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.isDark 
      ? '0 12px 40px rgba(0, 0, 0, 0.4)' 
      : '0 12px 40px rgba(0, 0, 0, 0.1)'
    };
  }

  &:hover::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.05));
    pointer-events: none;
    z-index: 1;
  }
`;

const Avatar = styled.img`
  width: 110px; /* Larger avatar */
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 1.2rem auto;
  border: 4px solid #60a5fa;
  transition: all 0.3s ease;

  ${Card}:hover & {
    border-color: #3b82f6;
    box-shadow: 0 0 14px rgba(96, 165, 250, 0.5);
  }
`;

const Name = styled.h3<{ isDark: boolean }>`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${props => props.isDark ? '#f1f5f9' : '#1f2937'};
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
`;


>>>>>>> 637bb9f4c16af57aa90d53752d6135bd6032a8ed
const DevelopersCredit = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
<<<<<<< HEAD
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
=======
    <Wrapper isDark={isDark}>
      <Title isDark={isDark}>Developed By</Title>
      <Grid>
        {developers.map((dev, index) => (
          <Card key={index} isDark={isDark} onClick={() => window.open(dev.linkedinUrl, '_blank')}>
            {dev.imageUrl && <Avatar src={dev.imageUrl} alt={dev.name} />}
            <Name isDark={isDark}>{dev.name}</Name>
            <LinkedIn href={dev.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ marginRight: '6px' }} />LinkedIn
            </LinkedIn>
          </Card>
        ))}
      </Grid>
    </Wrapper>
>>>>>>> 637bb9f4c16af57aa90d53752d6135bd6032a8ed
  );
};

export default DevelopersCredit;
