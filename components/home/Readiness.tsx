'use client'
import { SleepingMan, homePhone, readiness, readinessphone, runningPhone, sleepPhone } from '@/assets';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Sleepicon from '../ui/sleepicon';
import LeavesIcon from '../ui/leavesIcon';
import { useConfig } from '@/context/configProvider';
import { ImageComp } from '../ImageComp';
import {useIsLargeScreen} from '@/hooks/isxScreen';
import PhoneForMobile from '../PhoneForMobile';


interface ReadinessSectionProps {

}

const Readiness: FC<ReadinessSectionProps> = ({ }) => {
    const [reachTop, setreachTop] = useState(false);


    const topRef = useRef<HTMLDivElement | null>(null);
    const { setImage, setColor, color, setPhoneOpen } = useConfig()
    useEffect(() => {
        const handleScroll = () => {
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                setreachTop(rect.top <= 50);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const top = useMemo(() => {
        if (reachTop) {
            // setImage(runningPhone)
            setPhoneOpen(false)
            // setColor('#D0ECF5')
            return true
        }
        setImage(readinessphone)
        setColor('#E6DED3')
        setPhoneOpen(true)
        return false
    }, [reachTop])
    const isLargeScreen = useIsLargeScreen()

    return <div className='relative z-0 flex w-full flex-col items-center'>
        {isLargeScreen && <div className={cn("border absolute w-[25%] z-30 border-black p-5 bg-black top-[12%] flex items-center justify-center rounded-[3rem] h-screen")} style={{ boxShadow: '5px 5px 5px black' }}>
            <ImageComp initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}

                transition={{ duration: 1 }}
                src={readinessphone} alt='Spir phone image' />

            {/* <Image src={image}  alt='oura home phone image' className='h-full w-full object-contain fade-in-out transition-opacity duration-500' /> */}
        </div>}
        <div className={cn('w-full z-0 flex flex-col lg:flex-row justify-between lg:pl-20 pb-20 lg:pb-44 items-center')} style={{ backgroundColor: color, transition: 'all 1s' }}>
            <div className='flex flex-col gap-4 lg:ml-10 lg:max-w-[27%] large:order-last mx-10 md:mx-28'>
                <div className="flex items-center gap-3">
                    <LeavesIcon color={'#101926'} />
                    <span className={cn('text-stone-700')}>sleep</span>
                </div>
                <h1 className={cn('leading-tight text-3xl text-stone-700')}>Know why you feel how you feel.</h1>
                <h1 className={cn('text-stone-700')} ref={topRef}>
                    The Readiness Score provides a holistic picture of your health using over 20 biometric signals. Spir senses if you’re feeling refreshed or stressed, and tells you if today is a day to push yourself or take it easy. With our research-grade temperature sensors, it can even tell you when you might be getting sick — sometimes even before you know it.            </h1>
                <Button variant={'outline'} size={'lg'} className={cn('rounded-full w-fit my-4', 'text-stone-700 border-slate-600 hover:bg-slate-900 hover:text-white')}>More About Readiness</Button>
                <div className='w-full'>
                    <div className="flex flex-[1] flex-col space-y-3">
                        <h1 className={cn('text-4xl font-extralight', 'text-[#101926]')}>88%</h1>
                        <p className={cn('text-md max-w-[10rem] lg:max-w-[7.3rem]', 'text-[#101926]')}>of Spir Members saw an improvement in their overall health.</p>
                    </div>
                </div>
                {/* ref={topRef} to the last element */}
            </div>
            <div className='flex flex-col items-center lg:max-w-[50%]'>
                <Image src={readiness} alt='readiness photo' />
                {!isLargeScreen && <div className='h-[60vh] md:h-[80vh] -translate-y-[21%]'>
                    <PhoneForMobile image={readinessphone} />
                </div>}
            </div>
        </div>
    </div>
}

export default Readiness