// ScrollComponent.tsx
'use client'
import React, { useState, useEffect, useMemo, useLayoutEffect } from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useConfig } from '@/context/configProvider';
import { homePhone, readinessphone, runningPhone, sleepPhone } from '@/assets';
import useIsLargeScreen from '@/hooks/isLargeScreen';
import MenuIcon from './MenuIcon';
import TopBar from './TopBar';
import { useCycle } from 'framer-motion';

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
  const isLargeScreen = useIsLargeScreen()
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <div
      className={`fixed right-0 top-0 z-10 flex h-20 w-full items-center justify-between bg-white/30 p-4 px-20 backdrop-blur-2xl transition-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <TopBar isOpen={isOpen} />

      <div className='large:-traslate-x-10 items-center justify-start large:flex'>
        {!isLargeScreen && <MenuIcon isOpen={isOpen} toggleOpen={toggleOpen} />}
        <Logo />

      </div>
      <Button variant={'outline'} size={'lg'} className='rounded-full'>Shop Now</Button>
    </div>
  );
};

export default ScrollComponent;
