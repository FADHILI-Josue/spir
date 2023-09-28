'use client'
import { ringOnRing } from '@/assets'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import {useIsLargeScreen} from '@/hooks/isxScreen'

interface OuraJourneyProps {

}

const OuraJourney: FC<OuraJourneyProps> = ({ }) => {
    const [scroll, setScroll] = useState<number>(0)
    const topRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                setScroll(-(rect.top / 5) + 60);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const isLargeScreen = useIsLargeScreen()
    return <div className='relative flex h-[70vh] lg:h-[100vh] flex-col items-center justify-center bg-[#E6DED3]' ref={topRef}>
        {/* {scroll} */}
        <div className="absolute left-10 z-30 space-y-8 self-start md:left-32">
            <h1 className='max-w-md text-3xl font-light  leading-tight text-white lg:text-6xl'> Begin your Spir journey <em className='font-serif'>today</em>.</h1>
            <Button className='text-md rounded-full bg-white px-10 py-7 font-normal text-black hover:bg-[#D0ECF5]'>Shop Now</Button>
        </div>
        <div className='h-[99%] large:w-full w-[96%] overflow-hidden'>
            {/* <Image src={ringOnRing} style={{transform: `translate(-2.5rem, -60px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.54'}} alt='ring of oura' /> */}
            {/* <Image src={ringOnRing} style={{transform: `translate(-2.5rem, 50px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.54'}} alt='ring of oura' /> */}
            <Image src={ringOnRing} style={{ transform: `translate(${isLargeScreen?'-2rem': '0rem'}, ${isLargeScreen ? scroll: scroll}px)`, objectFit: 'cover', width: '100%', height: '100%', scale: `${isLargeScreen? '1.5rem': '-1rem'}`, zIndex: '-10' }} className='h-[70vh] lg:h-screen sm:translate-x-0' alt='ring of Spir' />
        </div>
    </div>
}

export default OuraJourney