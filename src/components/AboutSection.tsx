
import React from "react";
import { Code, ChartBar, Briefcase, Users } from "lucide-react";

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Nexus</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a student-led departmental club bridging the gap between technical skills and business acumen, preparing the next generation of tech entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To foster innovation and entrepreneurship by providing students with the technical skills, business knowledge, and networking opportunities needed to succeed in today's competitive tech industry.
            </p>
            <div className="code-block">
              <span className="code-keyword">function</span> <span className="code-line">createInnovation</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span className="code-keyword">const</span> <span className="code-line">skills</span> = ["coding", "business", "leadership"];
              <br />
              &nbsp;&nbsp;<span className="code-keyword">const</span> <span className="code-line">community</span> = buildCommunity(students, industry);
              <br />
              &nbsp;&nbsp;<span className="code-keyword">return</span> skills.map(<span className="code-line">skill</span> =&gt; {"{"} 
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> community.innovate(skill);
              <br />
              &nbsp;&nbsp;{"}"});
              <br />
              {"}"}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To become the premier platform for nurturing technical and entrepreneurial talent, empowering students to create innovative solutions that address real-world challenges.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple">✓</div>
                <span className="ml-3 text-gray-600">Industry partnerships with leading tech companies</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple">✓</div>
                <span className="ml-3 text-gray-600">Access to funding and venture capital connections</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple">✓</div>
                <span className="ml-3 text-gray-600">Co-working spaces and resources for startup development</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple">✓</div>
                <span className="ml-3 text-gray-600">Mentorship from successful entrepreneurs and alumni</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 club-card">
              <div className="h-12 w-12 rounded-lg bg-club-purple/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
