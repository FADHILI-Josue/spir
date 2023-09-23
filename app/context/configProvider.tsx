'use client'
import { homePhone } from '@/assets';
import { StaticImageData } from 'next/image';
import React, { createContext, useState, useContext } from 'react';

// Define the context
interface ConfigContextType {
  color: string;
  setColor: (newColor: string) => void;
  image: StaticImageData,
  setImage: (newImage: StaticImageData) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

interface Iprops {
    children: React.ReactNode
}
// Define the ColorProvider component
const ConfigProvider: React.FC<Iprops> = ({ children }) => {
  const [color, setColor] = useState<string>('white');
  const [image, setImage] = useState<StaticImageData>(homePhone);


  return (
    <ConfigContext.Provider value={{ color, setColor, image, setImage }}>
      {children}
    </ConfigContext.Provider>
  );
};

const useConfig = (): ConfigContextType => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }

  return context;
};

export { ConfigProvider, useConfig };
