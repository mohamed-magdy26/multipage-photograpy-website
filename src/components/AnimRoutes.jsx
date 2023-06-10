// import pages
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import About from '../pages/About';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    // using AnimatePresence to animate page transitions
    <AnimatePresence initial mode="wait">
      {/* key={location.pathname}  location={location} allows Animation on Exit(UnMounting) */}
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
