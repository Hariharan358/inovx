
import React from "react";
import { ArrowRight, Code, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-club-blue to-club-blue/90 text-white">
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-10"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="bg-club-purple h-2 w-2 rounded-full mr-2"></span>
                College Departmental Club
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Where <span className="text-club-purple">Technology</span> Meets <span className="text-club-teal">Business</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                Join a community of innovators, developers, and entrepreneurs building the next generation of tech startups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-club-purple hover:bg-club-purple/90">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 md:mt-16">
                <div className="text-center">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-gray-300">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-sm text-gray-300">Startups</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-sm text-gray-300">Events</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Code block design */}
                <div className="absolute -top-6 -left-6 bg-club-purple/20 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <Code className="h-6 w-6 text-club-purple mb-1" />
                  <h3 className="text-lg font-semibold mb-1">Coding</h3>
                  <p className="text-sm text-gray-300">Build your technical skills</p>
                </div>
                
                {/* Business block design */}
                <div className="absolute -bottom-6 -left-2 bg-club-teal/20 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <Briefcase className="h-6 w-6 text-club-teal mb-1" />
                  <h3 className="text-lg font-semibold mb-1">Business</h3>
                  <p className="text-sm text-gray-300">Develop entrepreneurial skills</p>
                </div>
                
                {/* Community block design */}
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 shadow-xl animate-slide-up" style={{ animationDelay: '0.9s' }}>
                  <Users className="h-8 w-8 text-white mb-2" />
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-200">Connect with like-minded innovators and build meaningful networks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white h-12">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
