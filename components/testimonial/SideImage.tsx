import Image, { StaticImageData } from 'next/image';
import React from 'react';

const SideImage = ({ imageUrl, altText }: {imageUrl: StaticImageData, altText: string}) => {
  return (
    <div className="relative inline-block">
      <Image
        className="h-auto w-full transition-opacity duration-300 ease-in-out hover:opacity-100"
        src={imageUrl}
        alt={altText}
      />
      <div className="absolute inset-0 bg-white opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-0"></div>
    </div>
  );
};

export default SideImage;
