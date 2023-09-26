// ScrollComponent.tsx
'use client'
import React, { useState, useEffect, useMemo, useLayoutEffect } from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useConfig } from '@/context/configProvider';
import { homePhone, readinessphone, runningPhone, sleepPhone } from '@/assets';

const ScrollComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scroll, setscroll] = useState(0);




  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setscroll(currentScrollPos)
      setIsVisible(false)
      setIsVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ss = useMemo(() => {
    if (scroll < 100) setIsVisible(false)
  }, [scroll])

  return (
    <div
      className={`fixed top-0 right-0 h-20 flex items-center px-20 justify-between backdrop-blur-sm bg-white/75 w-full z-30 p-4 transition-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <Logo />
      <Button variant={'outline'} size={'lg'} className='rounded-full'>Shop Now</Button>
    </div>
  );
};

export default ScrollComponent;
