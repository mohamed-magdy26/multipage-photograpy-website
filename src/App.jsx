// import router
import { BrowserRouter as Router } from 'react-router-dom';
// import framer motion
import { motion } from 'framer-motion';
// import Components
import { useContext } from 'react';
import { CursorContext } from './context/CursorProvider';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

const App = () => {
  const { cursorVariants, cursorBg } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Custom Cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className="w-[32px] h-[32px] pointer-events-none rounded-full bg-black fixed top-0 left-0 z-50"
      />
    </>
  );
};

export default App;
