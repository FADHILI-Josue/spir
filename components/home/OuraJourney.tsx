'use client'
import { ringOnRing } from '@/assets'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'

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
    return <div className='relative flex h-[100vh] w-full flex-col items-center justify-center bg-[#E6DED3]' ref={topRef}>
        {/* {scroll} */}
        <div className="absolute left-32 z-30 space-y-8 self-start">
            <h1 className='max-w-md text-6xl  font-light leading-tight text-white'> Begin your Spir journey <em className='font-serif'>today</em>.</h1>
            <Button className='text-md rounded-full bg-white px-10 py-7 font-normal text-black hover:bg-[#D0ECF5]'>Shop Now</Button>
        </div>
        <div className='h-[99%] w-[96%]  overflow-hidden'>
            {/* <Image src={ringOnRing} style={{transform: `translate(-2.5rem, -60px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.54'}} alt='ring of oura' /> */}
            {/* <Image src={ringOnRing} style={{transform: `translate(-2.5rem, 50px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.54'}} alt='ring of oura' /> */}
            <Image src={ringOnRing} style={{ transform: `translate(-2rem, ${scroll}px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.5', zIndex: '-10' }} alt='ring of Spir' />
        </div>
    </div>
}

export default OuraJourney