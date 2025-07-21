import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import EventPlacementPage from "./components/EventPlacementPage";

// Page content animation wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    style={{ minHeight: "100vh" }}
  >
    {children}
  </motion.div>
);

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// Curtain overlay animation during route changes
const CurtainOverlay = ({ isVisible }: { isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed inset-0 z-[9999]"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ backgroundColor: "#87CEEB" /* sky blue */ }}
      />
    )}
  </AnimatePresence>
);

// AnimatedRoutes triggers curtain during route change
const AnimatedRoutes = ({ setShowCurtain }: { setShowCurtain: (v: boolean) => void }) => {
  const location = useLocation();

  useEffect(() => {
    setShowCurtain(true);
    const timeout = setTimeout(() => setShowCurtain(false), 600);
    return () => clearTimeout(timeout);
  }, [location, setShowCurtain]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/members" element={<PageWrapper><Members /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/event-placement" element={<PageWrapper><EventPlacementPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const queryClient = new QueryClient();

const App = () => {
  const [showCurtain, setShowCurtain] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CurtainOverlay isVisible={showCurtain} />
          <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white">
            {/* You can add your Navigation and Footer here if needed */}
            <main className="flex-1">
              <AnimatedRoutes setShowCurtain={setShowCurtain} />
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
