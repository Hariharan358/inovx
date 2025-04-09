import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider = ({ images, interval = 5000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 800); // Match transition duration
      }
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isTransitioning]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 800); // Match transition duration
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 800); // Match transition duration
    }
  };

  return (
    <div 
      className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto overflow-hidden rounded-2xl" 
      style={{ 
        aspectRatio: isLargeScreen ? '5184/3200' : '5184/3456'
      }}
    >
      <div
        className="flex transition-all duration-800 ease-in-out h-full"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
            style={{ flex: '0 0 100%' }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl transition-opacity duration-800"
              style={{ 
                opacity: isTransitioning && (index === currentIndex || index === (currentIndex - 1 + images.length) % images.length) ? 0.7 : 1,
                transition: 'opacity 0.8s ease-in-out'
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={goToPrevious}
        disabled={isTransitioning}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={goToNext}
        disabled={isTransitioning}
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 800);
              }
            }}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 