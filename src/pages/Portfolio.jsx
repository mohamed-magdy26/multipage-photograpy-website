import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import image1 from '../img/portfolio/6.png';
import image2 from '../img/portfolio/5.png';
import image3 from '../img/portfolio/2.webp';
import image4 from '../img/portfolio/3.jpg';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorProvider';

const Portfolio = () => {
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
      <div className="container mx-auto px-4 relative  h-full">
        <div className="flex flex-col lg:flex-row md:gap-32 items-center md:justify-start lg:justify-center  gap-x-10 gap-y-4 h-full pt-20">
          {/* text */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex max-w-sm flex-col gap-y-4 items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="h1">Portfolio</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing
              Lorem ipsum dolor sit, elit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.
            </p>
            <Link to="/contact" className="px-4 py-2 btn">
              Hire Me
            </Link>
          </div>
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: '80%' }}
            animate={{ opacity: 1, y: 0 }}
     	exit={{ opacity: 0, y: '80%' }}
            transition={transition1}
            className="grid grid-cols-2 md:gap-2 max-w-[450px] overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={image1}
                className="hover:scale-110 h-full w-full transition-all duration-500 object-cover"
                alt=""
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={image2}
                className="hover:scale-110 h-full w-full   transition-all duration-500 object-cover"
                alt=""
              />
            </div>
            <div className="overflow-hidden ">
              <img
                src={image3}
                className="hover:scale-110 h-full w-full transition-all duration-500 object-cover"
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={image4}
                className=" hover:scale-110 h-full w-full transition-all duration-500 object-cover"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
