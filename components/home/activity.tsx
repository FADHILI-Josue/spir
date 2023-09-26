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


    return <div className={cn('w-full z-0 flex justify-between pr-20 pb-44 items-center')} style={{ backgroundColor: color, transition: 'all 1s' }} ref={ref}>
        <div className='max-w-[50%]'>
            <Image src={fitness} alt='sleeping man' />
        </div>
        <div className='ml-10 max-w-[25%] flex flex-col gap-4'>
            <div className="flex items-center gap-3">
                <FireIcon color={color === '#D0ECF5' ? '#101926' : '#D0ECF5'} />
                <span className={cn(color === '#D0ECF5' ? 'text-stone-700' : 'text-[#D0ECF5]')}>Activity</span>
            </div>
            <h1 className={cn('leading-tight text-3xl', color === '#D0ECF5' ? 'text-stone-900' : 'text-white')}>Bring your fitness into focus.</h1>
            <h1 className={cn('', color === '#D0ECF5' ? 'text-stone-700' : 'text-white')}>
                Whether you’re running a marathon or running an errand, Spir tracks your movement, steps, heart rate, and recovery. Discover your ideal balance between activity and recovery to reach your personal fitness goals.
            </h1>
            <Button variant={'outline'} size={'lg'} ref={topRef} className={cn('rounded-full w-fit my-4', 'text-[#101926] border-slate-600 hover:bg-[#101926] hover:text-white')}>More About Activity</Button>
            {/* ref={topRef} to the last element */}
        </div>
    </div>
}

export default Activity