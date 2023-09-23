'use client'
import { phoneimage } from '@/assets'
import useIsLargeScreen from '@/hooks/isLargeScreen'
import { useWindowSize } from '@/hooks/useWindowSize'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

interface PhoneComponentProps {

}

const PhoneComponent: FC<PhoneComponentProps> = ({ }) => {
    const stickyRef = useRef<HTMLDivElement>(null);
    // const largeScreen = useWindowSize()?.height! >= 1024;
    const largeScreen = useIsLargeScreen();
    return (<>
        {largeScreen ?
            <div className='w-full flex flex-col top-0 z-10 items-center h-fit bg-white sticky'>
                <div ref={stickyRef} className={cn("border absolute border-black p-5 bg-black top-0 flex items-center justify-center rounded-[3rem] h-screen")} style={{ boxShadow: '5px 5px 5px black' }}>
                    <Image src={phoneimage} alt='oura home phone image' className='h-full object-contain' />
                </div>
            </div>
            : null
        }
    </>
    )
}

export default PhoneComponent