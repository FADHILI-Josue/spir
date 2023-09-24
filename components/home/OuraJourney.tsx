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
    return <div className='w-full h-[100vh] flex flex-col relative items-center justify-center bg-[#E6DED3]' ref={topRef}>
        {/* {scroll} */}
        <div className="absolute left-32 z-30 self-start space-y-8">
            <h1 className='max-w-md text-6xl  font-light text-white leading-tight'> Begin your Oura journey <em className='font-serif'>today</em>.</h1>
            <Button className='text-black bg-white hover:bg-[#D0ECF5] rounded-full py-7 text-md px-10 font-normal'>Shop Now</Button>
        </div>
        <div className='w-[96%] h-[99%]  overflow-hidden'>
            {/* <Image src={ringOnRing} style={{transform: `translate(-2.5rem, -60px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.54'}} alt='ring of oura' /> */}
            {/* <Image src={ringOnRing} style={{transform: `translate(-2.5rem, 50px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.54'}} alt='ring of oura' /> */}
            <Image src={ringOnRing} style={{ transform: `translate(-2rem, ${scroll}px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.5', zIndex: '-10' }} alt='ring of oura' />
        </div>
    </div>
}

export default OuraJourney