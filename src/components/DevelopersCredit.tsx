import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
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
    linkedinUrl: "https://www.linkedin.com/in/rakesh-r-91a324274",
    imageUrl: rakesh
  },
  {
    name: "Thejas",
    linkedinUrl: "https://www.linkedin.com/in/thejas-r-6a0543295",
    imageUrl: thejas
  }
];

// CSS Variables for theming
const GlobalStyle = createGlobalStyle`
  :root {
    --bg-gradient-start: rgb(255, 255, 255);
    --bg-gradient-end: rgb(255, 255, 255);
    --card-gradient-start: #03a9f4;
    --card-gradient-end: #ff0058;
    --text-color: #1f2937;
    --card-overlay: rgba(0, 0, 0, 0.6);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-gradient-start: #0f172a;
      --bg-gradient-end: #0f172a;
      --card-gradient-start: #0ea5e9;
      --card-gradient-end: #ec4899;
      --text-color: #f3f4f6;
      --card-overlay: rgba(0, 0, 0, 0.7);
    }
  }
`;

const Container = styled.div`
  padding: 4rem 0;
  transition: colors 0.3s ease;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 254px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
    filter: blur(30px);
  }

  b {
    position: absolute;
    inset: 6px;
    background: rgba(15, 23, 42, 0.6);
    z-index: 2;
    border-radius: 0.75rem;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  z-index: 3;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.5s;
  border: 3px solid rgba(255, 255, 255, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
  }
  
  ${Card}:hover & {
    transform: translateY(-40px) scale(0.5);
    border-color: rgba(255, 255, 255, 0.5);
    
    img {
      opacity: 0.9;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  transition: 0.5s;
  width: 100%;
  padding-bottom: 1rem;
  
  ${Card}:hover & {
    transform: scale(1);
    bottom: 25px;
  }
`;

const Name = styled.h3`
  position: relative;
  color: #fff;
  font-weight: 500;
  line-height: 1em;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(15, 23, 42, 0.3);
`;

const SocialLinks = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  list-style: none;
  padding: 0;
`;

const SocialLink = styled.li`
  a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(15, 23, 42, 0.2);
    fill: currentColor;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
    
    &:hover {
      fill: currentColor;
      color: rgba(255, 255, 255, 1);
      background: rgba(15, 23, 42, 0.4);
      transform: translateY(-2px);
    }
  }
`;

const DevelopersCredit = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial color scheme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white dark:bg-[#0f172a] transition-colors">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Developed By
        </Title>
        <Grid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {developers.map((developer, index) => (
            <Card
              key={index}
              variants={cardVariants}
            >
              <b />
              <ImageContainer>
                {developer.imageUrl ? (
                  <img src={developer.imageUrl} alt={developer.name} />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    {developer.name.charAt(0)}
                  </div>
                )}
              </ImageContainer>
              <Content>
                <Name>
                  {developer.name}
                </Name>
                <SocialLinks>
                  <SocialLink>
                    <a href={developer.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <svg className="fa-brands fa-linkedin-in" width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </a>
                  </SocialLink>
                </SocialLinks>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default DevelopersCredit; 