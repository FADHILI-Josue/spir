'use client'
import React, { useState, useEffect, useRef } from 'react';

const YourComponent: React.FC = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [reachTop, setreachTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setreachTop(rect.top <= 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={stickyRef}>
      {reachTop ? <div>Sticky Content</div> : <div>Regular Content</div>}
    </div>
  );
};

export default YourComponent;