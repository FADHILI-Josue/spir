'use client'
import { SleepingMan, homePhone, runningPhone, sleepPhone } from '@/assets';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Sleepicon from '../ui/sleepicon';
import { useConfig } from '@/context/configProvider';
import { useSectionInView } from '@/hooks/ActiveSection';
import PhoneForMobile from '../PhoneForMobile';
import {useIsLargeScreen} from '@/hooks/isxScreen';


interface BestForBodySectionProps {

}

const Sleeptight: FC<BestForBodySectionProps> = ({ }) => {
    const [reachTop, setreachTop] = useState(false);


    const topRef = useRef<HTMLDivElement | null>(null);
    const { setImage, setColor, color } = useConfig()
    useEffect(() => {
        const handleScroll = () => {
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                setreachTop(rect.top + topRef?.current?.clientHeight <= 50);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const top = useMemo(() => {
        if (reachTop) {
            setImage(runningPhone)
            setColor('#D0ECF5')
            return true
        }
        setImage(sleepPhone)
        setColor('#101926')
        return false
    }, [reachTop])

    const { ref } = useSectionInView("sleepTight", 0.5);
    const isLargeScreen = useIsLargeScreen()

    return <div className={cn('w-full z-0 flex flex-col lg:flex-row lg:justify-between lg:pl-20 pb-20 lg:pb-44 lg:items-center')} ref={ref} style={{ backgroundColor: color, transition: 'all 1s' }}>
        <div className='flex flex-col gap-4 lg:ml-10 lg:max-w-[27%] large:order-last px-10 md:mx-28'>
            <div className="flex items-center gap-3">
                <Sleepicon color={color === '#E6DED3' ? 'black' : '#D0ECF5'} />
                <span className={cn(color === '#E6DED3' ? 'text-stone-700' : 'text-[#D0ECF5]')}>sleep</span>
            </div>
            <h1 className={cn('leading-tight text-3xl font-thin', color === 'white' ? 'text-stone-700' : 'text-white')}>Sleep tight with the industry leading sleep tracker.</h1>
            <h1 className={cn('', color === '#E6DED3' ? 'text-stone-700' : 'text-white')}>
                Better health, brighter moods, more energy — it all starts with sleep. Wake up to in-depth analysis about your deep sleep, light sleep, REM sleep, blood oxygen levels, and more. Small adjustments to your daily routine can improve your sleep and transform how you feel.
            </h1>
            <Button variant={'outline'} size={'lg'} className={cn('rounded-full w-fit my-4', 'text-blue-300 border-slate-600 hover:bg-[#D0ECF5] hover:text-slate-800')}>More About Sleep</Button>
            <div className='flex w-full justify-between gap-4'>
                {
                    ([
                        {desc: 'of Spir Members saw an improvement in their sleep quality', rate:86},
                        {desc: 'HRV Accuracy', rate:98}
                    ] as const).map((e, i)=> <div key={i} className="flex flex-[1] flex-col space-y-3 large:gap-4">
                    <h1 className={cn('text-4xl',color === '#101926'? 'text-white': 'text-[#101926]')}>{e.rate}%</h1>
                    <p className={cn('text-md large:max-w-[10rem]',color === '#101926'? 'text-white': 'text-[#101926]')} ref={i==1 ? topRef : null}>{e.desc}</p>
                </div>)
                }
            </div>
        </div>
        <div className='flex flex-col items-center lg:max-w-[50%]'>
                <Image src={SleepingMan} alt='sleeping man' className=''/>
                {!isLargeScreen && <div className='h-[60vh] md:h-[80vh] -translate-y-[21%]'>
                    <PhoneForMobile image={sleepPhone} />
                </div>}
        </div>
    </div>
}

export default Sleeptight