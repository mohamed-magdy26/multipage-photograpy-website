// import images
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import manImage from '../img/home/man.jpg';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorProvider';

const Home = () => {
  const { handleMouseEnter, handleMouseLeave } =
    useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: [0.17, -0.97, 0.83, 0.67], duration: 1 }}
      className="section"
    >
      <div className="container mx-auto relative px-4">
        {/* Text & image wrapper */}
        <div className="flex flex-col gap-10 pt-[100px] items-center md:flex-row md:pt-28 lg:pt-0 lg:justify-end ">
          {/* Text content wrapper */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: '0' }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col gap-2 z-20 lg:absolute lg:top-48 lg:left-20 items-center md:items-start"
          >
            <h1 className="h1 md:text-5xl lg:text-8xl">
              photographer <br /> & film maker
            </h1>
            <p className="text-xl lg:text-2xl font-primary">
              Los Angeles, USA
            </p>
            <Link to="/contact" className="btn py-3 px-10">
              Hire Me
            </Link>
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={manImage}
              alt=""
              className="max-w-full width-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
