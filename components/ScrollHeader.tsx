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
      className={`fixed right-0 top-0 z-30 flex h-20 w-full items-center justify-between bg-white/75 p-4 px-20 backdrop-blur-sm transition-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <Logo />
      <Button variant={'outline'} size={'lg'} className='rounded-full'>Shop Now</Button>
    </div>
  );
};

export default ScrollComponent;
