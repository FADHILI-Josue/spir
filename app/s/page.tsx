'use client'
import React, { useState } from 'react';

const RotatingStrings = () => {
  const [strings, setStrings] = useState(['String 1', 'String 2', 'String 3']);

  const rotateStrings = () => {
    setStrings(prevStrings => [
      prevStrings[1], // Second becomes first
      prevStrings[2], // Third becomes second
      prevStrings[0]  // First becomes last
    ]);
  };

  return (
    <div>
      <div>
        {strings.map((str, index) => (
          <div key={index}>{str}</div>
        ))}
      </div>
      <button onClick={rotateStrings}>Rotate Strings</button>
    </div>
  );
};

export default RotatingStrings;
