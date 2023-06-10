import { Link } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../img/header/logo.png';
// import components
import Socials from './Socials';
import MobileNav from './MobileNav';
import { CursorContext } from '../context/CursorProvider';

const Header = () => {
  const { handleMouseEnter, handleMouseLeave } =
    useContext(CursorContext);
  return (
    <header className="fixed w-full z-30 h-[80px] lg:h-[100px] flex items-center px-2 lg:px-20 gap-12">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between w-full">
          {/* Logo */}
          <Link to="/" className="max-w-[150px]">
            <img src={logo} alt="" />
          </Link>
          {/* navList initially hidden - show on desktop */}
          <nav
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="hidden lg:flex justify-between gap-x-6 font-semibold items-center"
          >
            <Link
              className="text-slate-900 transition hover:text-primary"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-slate-900 transition hover:text-primary"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-slate-900 transition hover:text-primary"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-slate-900 transition hover:text-primary"
              to="/contact"
            >
              Contact
            </Link>
            {/* Socials */}
            <Socials showOnMobile={false} />
          </nav>
          <MobileNav />
        </div>
        {/* an alternative to navlist show menu button and new navlinks */}
      </div>
    </header>
  );
};

export default Header;
