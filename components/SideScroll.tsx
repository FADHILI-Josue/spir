'use client'
import React, { useEffect, useMemo, useState } from 'react';

interface MovingRectangleProps {
  size: number;
}

const MovingRectangle: React.FC<MovingRectangleProps> = ({ size }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <> {
      isVisible ?
      <div className='fixed flex gap-3 flex-col items-center bottom-32 right-10 z-10'>
        <p style={{writingMode: 'vertical-lr'}}>Scroll to discover</p>
    <div className="border border-stone-600 rounded-full w-5 h-12 flex items-center justify-center bg-[#C1BBB7] ">
      <div className='w-full h-[80%] my-2 rounded-full flex overflow-hidden items-center justify-center'>
        <div className="bg-black h-1/4 w-1/4 move rounded-full"></div>
      </div>
      </div>
    </div> : null
    }
    </>
  );
};

export default MovingRectangle;
