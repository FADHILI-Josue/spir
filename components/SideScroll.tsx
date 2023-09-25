import React from 'react';

interface MovingRectangleProps {
  size: number;
}

const MovingRectangle: React.FC<MovingRectangleProps> = ({ size }) => {
  return (
    <div className="fixed bottom-32 border border-stone-600 rounded-full right-10 w-5 h-12 flex items-center justify-center bg-[#C1BBB7] z-50">
      <div className='w-full h-[80%] my-2 rounded-full flex overflow-hidden items-center justify-center'>
        <div className="bg-black h-1/4 w-1/4 move rounded-full"></div>
      </div>
    </div>
  );
};

export default MovingRectangle;
