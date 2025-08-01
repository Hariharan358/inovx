import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.7]);
  
  const [nameRef, nameInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [box1Ref, box1InView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [box2Ref, box2InView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900/20 transition-colors"
    >
      <Navbar />
      
      {/* Background Portrait - Bottom Right Corner */}
      <motion.div 
        style={{ y, opacity }}
        className="fixed bottom-0 right-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] xl:w-[900px] xl:h-[900px] pointer-events-none z-0"
      >
        <div className="relative w-full h-full">
                     {/* Glow Effect */}
           <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/40 via-pink-400/30 to-orange-400/40 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Portrait Container */}
          <div className="relative w-full h-full">
            <img 
              src="/woman-portrait.png" 
              alt="Rajalakshmi Srinivasan" 
              className="w-full h-full object-cover rounded-full"
            />
            
                         {/* Decorative Elements */}
             <div className="absolute -top-8 -right-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
             <div className="absolute -bottom-6 -left-6 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full animate-pulse"></div>
             
             {/* Dotted Lines */}
             <div className="absolute -top-16 -left-16 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border-2 border-dotted border-purple-400/50 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Name Section */}
            <motion.div
              ref={nameRef}
              initial={{ opacity: 0, x: -50 }}
              animate={nameInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Rajalakshmi Srinivasan
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
            </motion.div>

            {/* Title */}
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
            >
              Director - Product Management, Site24x7
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-8"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years with Zoho</div>
              </div>
            </motion.div>

            {/* Info Boxes */}
            <div className="space-y-6">
              {/* Box 1 */}
              <motion.div
                ref={box1Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={box1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-6 rounded-2xl shadow-lg border border-yellow-200 dark:border-yellow-800"
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-2">
                  What did you want to be while growing up?
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300">
                  An IAS Officer.
                </div>
              </motion.div>

              {/* Box 2 */}
              <motion.div
                ref={box2Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={box2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 p-6 rounded-2xl shadow-lg border border-pink-200 dark:border-pink-800"
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-2">
                  Your go-to comfort food?
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300">
                  Tea, while in India, and hot chocolate during travel.
                </div>
              </motion.div>
            </div>

            {/* Connecting Lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative"
            >
              <div className="absolute top-0 left-8 w-0.5 h-32 bg-gradient-to-b from-purple-400 to-pink-400"></div>
              <div className="absolute top-16 left-0 w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <div className="absolute top-32 left-8 w-0.5 h-16 bg-gradient-to-b from-purple-400 to-pink-400"></div>
            </motion.div>
          </div>

          {/* Right Column - Additional Content */}
          <div className="space-y-8">
            {/* Expertise Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Expertise & Achievements
              </h2>
              <ul className="space-y-4">
                {[
                  "25+ years at Zoho Corporation",
                  "Expert in product innovation and management",
                  "Advocate for women in tech and youth mentorship",
                  "Renowned speaker on tech-business intersection"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800"
            >
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
                About
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ms. Rajalakshmi is a leading voice in product innovation, women in tech, and youth mentorship. 
                Her session will provide deep insights into building a long-term, impactful career in the tech-business intersection.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Profile; 