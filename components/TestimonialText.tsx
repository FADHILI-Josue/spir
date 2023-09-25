import React, { useState, useEffect } from 'react';

interface TestimonialTextProps {
  text: string;
}

const TestimonialText: React.FC<TestimonialTextProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // When the text prop changes, initiate animation
    setIsVisible(false);

    // After a delay, set the new text and fade it in
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, [text]);

  return (
    <div className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {text}
    </div>
  );
};

export default TestimonialText;
