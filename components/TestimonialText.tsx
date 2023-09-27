'use client'
import React, { useState, useEffect, ReactNode } from 'react';

interface TestimonialTextProps {
  children: ReactNode;
}

const TestimonialText: React.FC<TestimonialTextProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // When the children prop changes, initiate animation
    setIsVisible(false);

    // After a delay, set the new children and fade it in
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, [children]);

  return (
    <p className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </p>
  );
};

export default TestimonialText;
