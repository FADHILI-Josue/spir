'use client'
import { useConfig } from '@/app/context/configProvider'
import useIsLargeScreen from '@/hooks/isLargeScreen'
import { useWindowSize } from '@/hooks/useWindowSize'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import { ImageComp } from './ImageComp'

interface PhoneComponentProps {

}

const PhoneComponent: FC<PhoneComponentProps> = ({ }) => {
    const stickyRef = useRef<HTMLDivElement>(null);
    const { image } = useConfig()
    // const largeScreen = useWindowSize()?.height! >= 1024;
    const largeScreen = useIsLargeScreen();
    return (<>
        {largeScreen ?
            <div className='w-full flex flex-col top-0 z-10 items-center h-fit bg-white sticky'>
                <div ref={stickyRef} className={cn("border absolute w-[25%] border-black p-5 bg-black top-0 flex items-center justify-center rounded-[3rem] h-screen")} style={{ boxShadow: '5px 5px 5px black' }}>
                    <ImageComp initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        ref={stickyRef}
                        src={image} alt='oura phone image' />
                    {/* <Image src={image}  alt='oura home phone image' className='h-full w-full object-contain fade-in-out transition-opacity duration-500' /> */}
                </div>
            </div>
            : null
        }
    </>
    )
}

export default PhoneComponent