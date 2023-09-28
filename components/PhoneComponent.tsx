'use client'
import {useIsLargeScreen} from '@/hooks/isxScreen'
import { useWindowSize } from '@/hooks/useWindowSize'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import { ImageComp } from './ImageComp'
import { useConfig } from '@/context/configProvider'

interface PhoneComponentProps {

}

const PhoneComponent: FC<PhoneComponentProps> = ({ }) => {
    const stickyRef = useRef<HTMLDivElement>(null);
    const { image, phoneOpen } = useConfig()
    const [opacity, setopacity] = useState(0);
    useEffect(() => {
      // When the children prop changes, initiate animation
      setopacity(0);
  
      // After a delay, set the new children and fade it in
      setTimeout(() => {
        setopacity(1);
      }, 100);
    }, [image]);
    // const largeScreen = useWindowSize()?.height! >= 1024;
    const largeScreen = useIsLargeScreen();
    return (<>
        {largeScreen && phoneOpen ?
            <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: opacity }}
            transition={{ duration: 1 }} // Adjust duration as needed
            className="sticky top-0 z-10 flex h-fit w-full flex-col items-center transition-all duration-200 bg-white"
        >
            <div ref={stickyRef} className={cn("border absolute w-[25%] border-black p-5 bg-black top-0 flex items-center justify-center rounded-[3rem] h-screen")} style={{ boxShadow: '10px 5px 10px rgb(0 0 0 / 0.3)' }}>
                <ImageComp
                    ref={stickyRef}
                    src={image} alt='spir phone image'
                />
            </div>
        </motion.div>
            : null
        }
    </>
    )
}

export default PhoneComponent