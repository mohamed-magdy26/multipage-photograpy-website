import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import manImg from '../img/about/man.jpg';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorProvider';

const About = () => {
  const { handleMouseEnter, handleMouseLeave } =
    useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
      <div className="container h-full mx-auto px-2 ">
        <div className="flex flex-col pt-16 md:pt-0 lg:pt-20 lg:px-10 justify-start items-center h-full md:gap-x-10 lg:gap-x-16 gap-y-2 md:flex-row ">
          {/* Image */}
          <div className="flex-1 order-2 mx-auto md:order-none max-h-96 lg:max-h-none ">
            <img
              src={manImg}
              alt=""
              loading="lazy"
              className="object-cover h-full max-w-full"
            />
          </div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-60%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-60%' }}
            transition={transition1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex-1 flex md:text-left text-center md:max-w-none justify-center gap-2 lg:gap-6 md:items-start items-center flex-col"
          >
            <h1 className="h1 text-5xl lg:text-8xl">About Me</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Lorem ipsum dolor sit. blanditiis neque laborum
              vero.
            </p>
            <p>
              elit. Quam culpa minima, blanditiis neque laborum vero.
              Lorem
            </p>
            <Link to="/portfolio" className="px-4 py-2 btn">
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
