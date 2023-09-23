'use client'
import { useState, useEffect } from 'react';

const useIsLargeScreen = () => {
  const [win, setwin] = useState<Window | undefined>(undefined);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  
  useEffect(() => {
    if(window == undefined) return
    else (setwin(window));
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isLargeScreen;
};

export default useIsLargeScreen;
