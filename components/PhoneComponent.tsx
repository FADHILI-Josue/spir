'use client'
import useIsLargeScreen from '@/hooks/isLargeScreen'
import { useWindowSize } from '@/hooks/useWindowSize'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import { ImageComp } from './ImageComp'
import { useConfig } from '@/context/configProvider'

interface PhoneComponentProps {

}

const PhoneComponent: FC<PhoneComponentProps> = ({ }) => {
    const stickyRef = useRef<HTMLDivElement>(null);
    const { image, phoneOpen } = useConfig()
    // const largeScreen = useWindowSize()?.height! >= 1024;
    const largeScreen = useIsLargeScreen();
    return (<>
        {largeScreen && phoneOpen ?
            <div className='sticky top-0 z-10 flex h-fit w-full flex-col items-center bg-white'>
                <div ref={stickyRef} className={cn("border absolute w-[25%] border-black p-5 bg-black top-0 flex items-center justify-center rounded-[3rem] h-screen")} style={{ boxShadow: '10px 5px 10px rgb(0 0 0 / 0.3)' }}>
                    <ImageComp initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                
                        transition={{ duration: 1 }}
                        ref={stickyRef}
                        src={image} alt='spir phone image' />
                    {/* <Image src={image}  alt='oura home phone image' className='h-full w-full object-contain fade-in-out transition-opacity duration-500' /> */}
                </div>
            </div>
            : null
        }
    </>
    )
}

export default PhoneComponent