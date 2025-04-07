export const theme = {
  colors: {
    primary: {
      light: '#60A5FA', // blue-400
      DEFAULT: '#3B82F6', // blue-500
      dark: '#2563EB', // blue-600
    },
    secondary: {
      light: '#A78BFA', // purple-400
      DEFAULT: '#8B5CF6', // purple-500
      dark: '#7C3AED', // purple-600
    },
    accent: {
      light: '#F472B6', // pink-400
      DEFAULT: '#EC4899', // pink-500
      dark: '#DB2777', // pink-600
    },
    background: {
      light: '#F9FAFB', // gray-50
      DEFAULT: '#FFFFFF',
      dark: '#F3F4F6', // gray-100
    },
    text: {
      primary: '#1F2937', // gray-800
      secondary: '#4B5563', // gray-600
      light: '#9CA3AF', // gray-400
    }
  },
  animations: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" }
    },
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" }
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.3 }
    },
    stagger: {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      },
      item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        }
      }
    }
  },
  gradients: {
    primary: 'from-blue-500 to-purple-500',
    secondary: 'from-purple-500 to-pink-500',
    accent: 'from-pink-500 to-blue-500',
    dark: 'from-gray-800 to-gray-900',
    light: 'from-gray-50 to-white'
  }
}; 