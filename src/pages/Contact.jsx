import { motion } from 'framer-motion';
import { useContext } from 'react';
import womanImage from '../img/contact/man.png';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorProvider';

const Contact = () => {
  const { handleMouseEnter, handleMouseLeave } =
    useContext(CursorContext);
  return (
    <section className="section">
      <div className="container mx-auto h-full ">
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '100%' }}
          transition={transition1}
          className="!hidden lg:!flex absolute bottom-0 left-0 right-0 top-52 -z-10 bg-slate-100"
        />
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '100%' }}
          transition={transition1}
          className="flex flex-col h-full md:flex-row gap-x-10 items-center justify-start pt-20"
        >
          {/* Bg */}
          {/* Text and form */}
          <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex-1 px-4 lg:pt-32 lg:px-10 text-center md:text-left"
          >
            <h1 className="h1">Contact Me</h1>
            <p>I would love to get suggestions from you</p>
            <form className="mt-1 flex flex-col lg:items-start items-center gap-y-1">
              <div className="flex gap-x-2 w-full">
                <input
                  className="w-full bg-transparent outline-none border-b
                  border-b-primary pl-2 h-[60px] font-secondary placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="w-full bg-transparent outline-none border-b
                  border-b-primary pl-2 h-[60px] font-secondary placeholder:text-[#757879]"
                  type="email"
                  placeholder="Your Email Address"
                />
              </div>
              <input
                className="w-full bg-transparent outline-none border-b
                  border-b-primary pl-2 h-[60px] font-secondary placeholder:text-[#757879]"
                type="email"
                placeholder="Your Message"
              />
              <button type="submit" className=" btn mt-2 px-10 py-2">
                Send IT
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="lg:flex-1 md:pt-60">
            <motion.img
              initial={{ opacity: 0, y: '80%' }}
              animate={{ opacity: 1, y: '-20%' }}
              exit={{ opacity: 0, y: '80%' }}
              transition={transition1}
              src={womanImage}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
