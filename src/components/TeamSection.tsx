
import React from "react";
import { 
  Linkedin, 
  Twitter, 
  Mail 
} from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      bio: "Computer Science senior with a passion for AI and entrepreneurship.",
      linkedin: "#",
      twitter: "#",
      email: "alex@example.com"
    },
    {
      name: "Samantha Lee",
      role: "VP of Technology",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      bio: "Full-stack developer and open-source contributor studying Software Engineering.",
      linkedin: "#",
      twitter: "#",
      email: "samantha@example.com"
    },
    {
      name: "Marcus Chen",
      role: "VP of Business",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
      bio: "Business Administration major with experience in startup consulting.",
      linkedin: "#",
      twitter: "#",
      email: "marcus@example.com"
    },
    {
      name: "Priya Patel",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      bio: "Marketing and Communications student with a talent for organizing impactful events.",
      linkedin: "#",
      twitter: "#",
      email: "priya@example.com"
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership team is composed of passionate students dedicated to fostering innovation and entrepreneurship on campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-b from-club-purple/0 to-club-purple rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                      <Linkedin className="h-4 w-4 text-club-purple" />
                    </a>
                    <a href={member.twitter} className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                      <Twitter className="h-4 w-4 text-club-purple" />
                    </a>
                    <a href={`mailto:${member.email}`} className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                      <Mail className="h-4 w-4 text-club-purple" />
                    </a>
                  </div>
                </div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-40 h-40 object-cover rounded-full shadow-md" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-club-purple font-medium">{member.role}</p>
              <p className="text-gray-600 text-center mt-2">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Advisors & Mentors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                    <span className="text-gray-400 text-2xl">👤</span>
                  </div>
                  <p className="font-medium text-gray-900">Advisor {index + 1}</p>
                  <p className="text-sm text-gray-500">Industry Expert</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
