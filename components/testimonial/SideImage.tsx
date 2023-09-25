import Image, { StaticImageData } from 'next/image';
import React from 'react';

const SideImage = ({ imageUrl, altText }: {imageUrl: StaticImageData, altText: string}) => {
  return (
    <div className="relative inline-block">
      <Image
        className="w-full h-auto transition-opacity duration-300 ease-in-out transform hover:opacity-100"
        src={imageUrl}
        alt={altText}
      />
      <div className="absolute inset-0 bg-white opacity-60 hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
    </div>
  );
};

export default SideImage;
