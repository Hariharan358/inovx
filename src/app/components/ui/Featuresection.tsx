'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  step: string;
  content: string;
  image: string;
}

interface FeatureSectionProps {
  features: Feature[];
  title?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features, title = 'How to get Started' }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 3.33); 
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length]);

  return (
    <div className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white p-4 md:p-6 flex items-center justify-center rounded-xl shadow-md">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-gray-900 dark:text-gray-100">{title}</h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 md:gap-6"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stepper Circle */}
              <motion.div
                className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  index === currentFeature ? 'bg-blue-500 scale-110' : 'bg-gray-300 dark:bg-gray-700'
                } border-2 ${
                  index === currentFeature ? 'border-blue-400' : 'border-gray-300 dark:border-gray-600'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {index <= currentFeature ? (
                  <span className="text-white text-base font-bold">✓</span>
                ) : (
                  <span className="text-gray-700 dark:text-gray-200 text-base font-semibold">{index + 1}</span>
                )}
              </motion.div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{feature.step}</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
