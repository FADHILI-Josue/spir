'use client'
import { ringOnRing } from '@/assets'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

interface OuraJourneyProps {

}

const OuraJourney: FC<OuraJourneyProps> = ({ }) => {
    const [scroll, setScroll] = useState<number>(0)
    const topRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                setScroll(rect.top/2);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <div className='w-full h-[100vh] flex items-center justify-center bg-[#E6DED3] relative' ref={topRef}>
        <div className='w-[96%] h-[99%] overflow-hidden'>
            <Image src={ringOnRing} style={{transform: `translate(-0rem, ${scroll}px)`, objectFit: 'contain', width: '100%', height: '100%', scale: '1.3'}} alt='ring of oura' />
        </div>
    </div>
}

export default OuraJourney