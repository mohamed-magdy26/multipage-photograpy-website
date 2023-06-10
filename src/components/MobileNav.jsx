import React, { useState } from 'react';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Socials from './Socials';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  open: {
    x: 0,
    transition: { ease: [0.2, -0.5, 0.4, 0.6] },
  },
};

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-primary lg:hidden">
      {/* menu button */}
      <div
        className="text-3xl cursor-pointer lg:hidden"
        onClick={() => setMenuOpen(true)}
      >
        <CgMenuRight />
      </div>
      {/* mobile links */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={menuOpen ? 'open' : 'hidden'}
        className="flex flex-col py-5 absolute right-0 top-0 bg-white w-2/3 max-w-xs justify-center items-center h-screen gap-y-6 font-primary text-3xl"
      >
        <IoMdClose
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer hover:-rotate-6 active:scale-90 active:rotate-180 transition absolute top-8 text-3xl left-6"
        />
        <Link className="hover:text-yellow-500 transition" to="/">
          Home
        </Link>
        <Link
          className="hover:text-yellow-500 transition"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:text-yellow-500 transition"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="hover:text-yellow-500 transition"
          to="/contact"
        >
          Contact
        </Link>

        <Socials showOnMobile />
      </motion.div>
    </nav>
  );
};

export default MobileNav;
