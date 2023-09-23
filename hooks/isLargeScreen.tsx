'use client'
import { useState, useEffect } from 'react';

const useIsLargeScreen = () => {
  const [win, setwin] = useState<Window | undefined>(typeof window !== 'undefined' ? window : undefined);
  const [isLargeScreen, setIsLargeScreen] = useState(win ? win.innerWidth >= 1024 : false);
  
  useEffect(() => {
    if (win) {
      const handleResize = () => {
        setIsLargeScreen(win.innerWidth >= 1024);
      };
  
      win.addEventListener('resize', handleResize);
  
      return () => {
        win.removeEventListener('resize', handleResize);
      };
    }
  }, [win]);

  return isLargeScreen;
};

export default useIsLargeScreen;
