import { createContext, useEffect, useMemo, useState } from 'react';

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorBg, setCursorBg] = useState('default');

  const mobileIsActive = window.innerWidth < 1000;

  const handleMouseEnter = () => {
    setCursorBg('text');
  };

  const handleMouseLeave = () => {
    setCursorBg('default');
  };

  useEffect(() => {
    if (mobileIsActive) {
      setCursorBg('mobile');
    } else {
      const getCursorPos = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener('mousemove', getCursorPos);

      return () => {
        window.removeEventListener('mousemove', getCursorPos);
      };
    }
    return () => {};
  });

  const cursorVariants = useMemo(
    () => ({
      default: {
        x: cursorPos.x - 16,
        y: cursorPos.y - 16,
        backgroundColor: '#0e111288',
      },
      text: {
        width: '150px',
        height: '150px',
        x: cursorPos.x - 75,
        y: cursorPos.y - 75,
        backgroundColor: '#fff',
        mixBlendMode: 'difference',
      },
      mobile: {
        display: 'none',
        width: '0',
        height: '0',
        backgroundColor: '#fff',
        opacity: 0,
      },
    }),
    [cursorPos],
  );

  const values = {
    cursorVariants,
    cursorBg,
    handleMouseEnter,
    handleMouseLeave,
  };
  return (
    <CursorContext.Provider value={values}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
