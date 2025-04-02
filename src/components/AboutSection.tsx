import React, { useState, useEffect } from "react";
import { Code, ChartBar, Briefcase, Users, Sun, Moon } from "lucide-react";
import ScrollFloat from '../blocks/TextAnimations/ScrollFloat/ScrollFloat';

const AboutSection = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const features = [
    {
      icon: <Code className="h-6 w-6 text-club-purple" />,
      title: "Technical Development",
      description: "Hands-on workshops, coding bootcamps, and hackathons to build your technical skills in various programming languages and frameworks."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-club-purple" />,
      title: "Business Skills",
      description: "Learn about entrepreneurship, marketing, finance, and business strategy through workshops, case studies, and real-world projects."
    },
    {
      icon: <ChartBar className="h-6 w-6 text-club-purple" />,
      title: "Startup Incubation",
      description: "Get mentorship, resources, and funding opportunities to turn your innovative ideas into successful startups with real-world impact."
    },
    {
      icon: <Users className="h-6 w-6 text-club-purple" />,
      title: "Networking",
      description: "Connect with industry professionals, alumni entrepreneurs, and like-minded peers to build your professional network."
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Theme Toggle */}
        <div className="flex justify-between items-center mb-16">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
              About Inovx
            </h2>
          </ScrollFloat>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="text-gray-900" /> : <Sun className="text-yellow-400" />}
          </button>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
          We are a student-led departmental club bridging the gap between technical skills and business acumen, preparing the next generation of tech entrepreneurs.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To foster innovation and entrepreneurship by providing students with the technical skills, business knowledge, and networking opportunities needed to succeed in today's competitive tech industry.
            </p>
            <div className="code-block bg-blue-900 text-white p-6 rounded-lg font-mono text-sm overflow-auto">
              <pre>
                <code>
                  <span className="code-keyword">function</span> <span className="code-line">createInnovation</span>() {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="code-keyword">const</span> <span className="code-line">skills</span> = ["coding", "business", "leadership"];
                  <br />
                  &nbsp;&nbsp;<span className="code-keyword">const</span> <span className="code-line">community</span> = buildCommunity(students, industry);
                  <br />
                  &nbsp;&nbsp;<span className="code-keyword">return</span> skills.map(<span className="code-line">skill</span> =&gt; {'{'} 
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> community.innovate(skill);
                  <br />
                  &nbsp;&nbsp;{'}'});
                  <br />
                  {'}'}
                </code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To become the premier platform for nurturing technical and entrepreneurial talent, empowering students to create innovative solutions.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 rounded-lg bg-club-purple/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;