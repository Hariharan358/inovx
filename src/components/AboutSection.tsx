import React, { useState, useEffect } from "react";
import { Code, ChartBar, Briefcase, Users } from "lucide-react";
import ScrollFloat from "../blocks/TextAnimations/ScrollFloat/ScrollFloat";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");

  // Set theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const features = [
    {
      icon: <Code className="h-6 w-6 text-club-purple" />,
      title: "Technical Development",
      description:
        "Hands-on workshops, coding bootcamps, and hackathons to build your technical skills in various programming languages and frameworks.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-club-purple" />,
      title: "Business Skills",
      description:
        "Learn about entrepreneurship, marketing, finance, and business strategy through workshops, case studies, and real-world projects.",
    },
    {
      icon: <ChartBar className="h-6 w-6 text-club-purple" />,
      title: "Startup Incubation",
      description:
        "Get mentorship, resources, and funding opportunities to turn your innovative ideas into successful startups with real-world impact.",
    },
    {
      icon: <Users className="h-6 w-6 text-club-purple" />,
      title: "Networking",
      description:
        "Connect with industry professionals, alumni entrepreneurs, and like-minded peers to build your professional network.",
    },
  ];

  return (
    <>
      <section id="about" className="py-16 px-4 bg-white dark:bg-black transition-colors">
        <div className="max-w-7xl mx-auto">
          {/* Centering ScrollFloat */}
          <div className="relative flex items-center justify-center mb-10 text-center">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              "We Hatch Better Ideas"
            </ScrollFloat>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center px-4">
            We are a student-led departmental club bridging the gap between technical skills and business acumen, preparing the next generation of tech entrepreneurs.
          </p>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="card bg-gray-100 dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-sm border border-black dark:border-gray-600">
              <h3 className="card__title text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                To foster innovation and entrepreneurship by providing students with the technical skills, business knowledge, and networking opportunities needed to succeed in today's competitive tech industry.
              </p>
              <div className="code-block bg-gray-100 dark:bg-gray-800 text-black dark:text-green-300 p-4 md:p-6 rounded-lg font-mono text-xs md:text-sm overflow-auto border border-gray-300 dark:border-gray-600">
                <pre>
                <code>
  function createInnovation() &#123;
  <br />
  &nbsp;&nbsp;const skills = ["coding", "business", "leadership"];
  <br />
  &nbsp;&nbsp;const community = buildCommunity(students, industry);
  <br />
  &nbsp;&nbsp;return skills.map(skill = &#123;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;return community.innovate(skill);
  <br />
  &nbsp;&nbsp;&#125;);
  <br />
  &#125;
</code>

                </pre>
              </div>
            </div>

            <div className="card bg-gray-100 dark:bg-gray-900 p-6 md:p-8 rounded-lg shadow-sm border border-black dark:border-gray-600">
              <h3 className="card__title text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become the premier platform for nurturing technical and entrepreneurial talent, empowering students to create innovative solutions.
              </p>
              <p className="mt-8 font-poppins">
              "To empower the next generation of tech entrepreneurs by fostering a dynamic ecosystem that blends technical expertise, business strategy, and innovation. Our goal is to provide students with the tools, mentorship, and networks to transform creative ideas into impactful solutions that shape the future of technology and business"
              </p>
            </div>
          </div>

          {/* Features Section with animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2, // Stagger the animations
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                }}
                className="card bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 text-center"
              >
                <div className="h-12 w-12 mx-auto rounded-lg bg-club-purple/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="card__title text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style >{`
        /* Card Styles */
        .card {
          width: 100%; /* Increase the width */
          padding: 20px;
          background: #fff;
          border: 6px solid #000;
          box-shadow: 12px 12px 0 #000;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .dark .card {
          background: #1f2937;
          border: 6px solid #4b5563;
          box-shadow: 12px 12px 0 #4b5563;
        }

        .card:hover {
          transform: translate(-5px, -5px);
          box-shadow: 17px 17px 0 #000;
        }

        .dark .card:hover {
          box-shadow: 17px 17px 0 #4b5563;
        }

        .card__title {
          font-size: 32px;
          font-weight: 900;
    
          text-transform: uppercase;
          margin-bottom: 15px;
          display: block;
          position: relative;
          overflow: hidden;
        }

        .card__title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 90%;
          height: 3px;
         
        }

        .card:hover .card__title::after {
          transform: translateX(0);
        }

        .card__content {
          font-size: 16px;
          line-height: 1.4;
          color: #000;
          margin-bottom: 20px;
        }

        .dark .card__content {
          color: #e5e7eb;
        }

        .card__form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .card__form input {
          padding: 10px;
          border: 3px solid #000;
          font-size: 16px;
          font-family: inherit;
          transition: transform 0.3s;
          width: calc(100% - 26px); /* Adjust for padding and border */
        }

        .dark .card__form input {
          border: 3px solid #4b5563;
          background: #374151;
          color: #e5e7eb;
        }
        }

        .card__form input:focus {
          outline: none;
          transform: scale(1.05);
          background-color: #000;
          color: #ffffff;
        }

        .dark .card__form input:focus {
          background-color: #4b5563;
          color: #ffffff;
        }

        .card__button {
          border: 3px solid #000;
          background: #000;
          color: #fff;
          padding: 10px;
          font-size: 18px;
          left: 20%;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s;
          width: 50%;
          height: 100%;
        }

        .dark .card__button {
          border: 3px solid #4b5563;
          background: #4b5563;
        }

        .card__button::before {
          content: "Sure?";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 105%;
          background-color: #5ad641;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .card__button:hover::before {
          transform: translateY(0);
        }

        .card__button:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default AboutSection;
