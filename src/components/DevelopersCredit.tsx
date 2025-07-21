import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
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

const Wrapper = styled.div`
  background: linear-gradient(120deg, #f9fafc, #e2e8f0);
  padding: 4rem 1rem;
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

const Title = styled.h2`
  text-align: center;
  font-size: 2.75rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 3.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  max-width: 1150px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 1.2rem auto;
  border: 4px solid #60a5fa;
  transition: all 0.3s ease;

  ${Card}:hover & {
    border-color: #3b82f6;
    box-shadow: 0 0 12px rgba(96, 165, 250, 0.5);
  }
`;

const Name = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
`;


const DevelopersCredit = () => {
  return (
    <Wrapper>
      <Title>Developed By</Title>
      <Grid>
        {developers.map((dev, index) => (
          <Card key={index} onClick={() => window.open(dev.linkedinUrl, '_blank')}>
            {dev.imageUrl && <Avatar src={dev.imageUrl} alt={dev.name} />}
            <Name>{dev.name}</Name>
            <LinkedIn href={dev.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ marginRight: '6px' }} />LinkedIn
            </LinkedIn>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default DevelopersCredit;
