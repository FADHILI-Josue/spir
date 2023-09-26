'use client'
import { homePhone } from '@/assets';
import { useCycle } from 'framer-motion';
import { StaticImageData } from 'next/image';
import React, { createContext, useState, useContext } from 'react';

// Define the context
interface ConfigContextType {
  color: string;
  setColor: (newColor: string) => void;
  image: StaticImageData,
  setImage: (newImage: StaticImageData) => void;
  phoneOpen: boolean,
  setPhoneOpen: (value:boolean) => void,
  isOpen: boolean,
  toggleOpen: () => void
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

interface Iprops {
    children: React.ReactNode
}
// Define the ColorProvider component
const ConfigProvider: React.FC<Iprops> = ({ children }) => {
  const [color, setColor] = useState<string>('#E6DED3');
  const [image, setImage] = useState<StaticImageData>(homePhone);
  const [phoneOpen, setPhoneOpen] = useState<boolean>(true);
  const [isOpen, toggleOpen] = useCycle(false, true);


  return (
    <ConfigContext.Provider value={{ color, setColor, image, setImage, phoneOpen, setPhoneOpen, isOpen, toggleOpen }}>
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
