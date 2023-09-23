'use client'
import { useConfig } from '@/app/context/configProvider';
import { SleepingMan, fitness, homePhone, runningPhone, sleepPhone } from '@/assets';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import Sleepicon from '../ui/sleepicon';
import FireIcon from '../ui/FireIcon';


interface ActivitySectionProps {

}

const Activity: FC<ActivitySectionProps> = ({ }) => {
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

    return <div className={cn('w-full z-0 flex justify-between pr-20 pb-44 items-center')} style={{ backgroundColor: color, transition: 'all 1s' }}>
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
                Whether you’re running a marathon or running an errand, Oura tracks your movement, steps, heart rate, and recovery. Discover your ideal balance between activity and recovery to reach your personal fitness goals.
            </h1>
            <Button variant={'outline'} size={'lg'} className={cn('rounded-full w-fit my-4', 'text-blue-300 border-slate-600 hover:bg-[#D0ECF5] hover:text-slate-800')}>More About Sleep</Button>
            {/* ref={topRef} to the last element */}
        </div>
    </div>
}

export default Activity