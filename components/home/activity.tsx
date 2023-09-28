'use client'
import { SleepingMan, fitness, homePhone, readinessphone, runningPhone, sleepPhone } from '@/assets';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Sleepicon from '../ui/sleepicon';
import FireIcon from '../ui/FireIcon';
import { useConfig } from '@/context/configProvider';
import { useSectionInView } from '@/hooks/ActiveSection';
import {useIsLargeScreen} from '@/hooks/isxScreen';
import PhoneForMobile from '../PhoneForMobile';


interface ActivitySectionProps {

}

const Activity: FC<ActivitySectionProps> = ({ }) => {
    const [reachTop, setreachTop] = useState(false);


    const topRef = useRef<HTMLButtonElement | null>(null);
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
            setImage(readinessphone)
            setColor('#E6DED3')
            return true
        }
        setImage(runningPhone)
        setColor('#D0ECF5')
        return false
    }, [reachTop])
    const { ref } = useSectionInView("fitness");
    const isLargeScreen = useIsLargeScreen()

    return <div className={cn('w-full z-0 flex flex-col lg:flex-row  lg:justify-between pb-20 lg:pb-44 items-center')} style={{ backgroundColor: color, transition: 'all 1s' }} ref={ref}>
        <div className='flex-col items-center lg:max-w-[50%] large:flex'>
            <Image src={fitness} alt='sleeping man' />
            {!isLargeScreen && <div className='h-[60vh] md:h-[80vh] -translate-y-[21%]'>
                <PhoneForMobile image={runningPhone} />
            </div>}
        </div>
        <div className='ml-16 flex flex-col gap-4 lg:max-w-[25%] mx-10 md:mx-28'>
            <div className="flex items-center gap-3">
                <FireIcon color={color === '#D0ECF5' ? '#101926' : '#D0ECF5'} />
                <span className={cn(color === '#D0ECF5' ? 'text-stone-700' : 'text-[#D0ECF5]')}>Activity</span>
            </div>
            <h1 className={cn('leading-tight text-3xl font-extralight', color === '#D0ECF5' ? 'text-slate-900' : 'text-white')}>Bring your fitness into focus.</h1>
            <h1 className={cn('', color === '#D0ECF5' ? 'text-stone-700' : 'text-white')}>
                Whether you’re running a marathon or running an errand, Spir tracks your movement, steps, heart rate, and recovery. Discover your ideal balance between activity and recovery to reach your personal fitness goals.
            </h1>
            <Button variant={'outline'} size={'lg'} ref={topRef} className={cn('rounded-full w-fit my-4', 'text-[#101926] border-slate-600 hover:bg-[#101926] hover:text-white')}>More About Activity</Button>
        </div>
    </div>
}

export default Activity