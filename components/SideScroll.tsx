'use client'
import {useIsLargeScreen} from '@/hooks/isxScreen';
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

  const isLargeScreen = useIsLargeScreen()

  return (
    <> {
      isVisible && isLargeScreen ?
      <div className='fixed bottom-32 right-10 z-10 flex flex-col items-center gap-3'>
        <p style={{writingMode: 'vertical-lr'}}>Scroll to discover</p>
    <div className="flex h-12 w-5 items-center justify-center rounded-full border border-stone-600 bg-[#C1BBB7] ">
      <div className='my-2 flex h-[80%] w-full items-center justify-center overflow-hidden rounded-full'>
        <div className="move h-1/4 w-1/4 rounded-full bg-black"></div>
      </div>
      </div>
    </div> : null
    }
    </>
  );
};

export default MovingRectangle;
