import React from "react";
import { ArrowRight, Code, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="relative overflow-hidden text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/0223.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <span className="bg-club-purple h-2 w-2 rounded-full mr-2"></span>
                Department of Computer Science and Business Systems
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Where <span className="text-club-purple">Technology</span> Meets{" "}
                <span className="text-club-teal">Business</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg"
              >
                Join a community of innovators, developers, and entrepreneurs
                building the next generation of tech startups.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-club-purple hover:bg-club-purple/90">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-club-blue hover:bg-club-purple/90">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Business, Coding, and Community Blocks */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Code block design */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute -top-6 -left-6 bg-club-purple/20 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-xl"
                >
                  <Code className="h-6 w-6 text-club-purple mb-1" />
                  <h3 className="text-lg font-semibold mb-1">Coding</h3>
                  <p className="text-sm text-gray-300">Build your technical skills</p>
                </motion.div>

                {/* Business block design */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="absolute -bottom-6 -left-2 bg-club-teal/20 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-xl"
                >
                  <Briefcase className="h-6 w-6 text-club-teal mb-1" />
                  <h3 className="text-lg font-semibold mb-1">Business</h3>
                  <p className="text-sm text-gray-300">Develop entrepreneurial skills</p>
                </motion.div>

                {/* Community block design */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 shadow-xl"
                >
                  <Users className="h-8 w-8 text-white mb-2" />
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-200">
                    Connect with like-minded innovators and build meaningful networks.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
