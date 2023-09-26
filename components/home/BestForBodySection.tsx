'use client'
import { homePhone, sleepPhone } from '@/assets';
import { Button } from '@/components/ui/button'
import { useConfig } from '@/context/configProvider';
import { useSectionInView } from '@/hooks/ActiveSection';
import useIsLargeScreen from '@/hooks/isLargeScreen';
import { cn } from '@/lib/utils';
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import PhoneForMobile from '../PhoneForMobile';


interface BestForBodySectionProps {

}

const BestForBodySection: FC<BestForBodySectionProps> = ({ }) => {
    // const { ref, inView, entry } = useInView({
    //     threshold: 1,
    // });
    // useEffect(()=>{
    //     console.log(entry?.intersectionRatio)
    //     entry?.intersectionRatio == 1 && console.log('yooooo')
    // }, [entry?.intersectionRatio])


    // const refa = useRef<HTMLDivElement>(null)
    const [reachTop, setreachTop] = useState(false);
    const { ref } = useSectionInView("bestForBody");


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

    useEffect(() => {
        if (reachTop) {
            setImage(sleepPhone)
            setColor('#101926')
        }
        else {
            setImage(homePhone)
            setColor('#E6DED3')
        }
    }, [reachTop])

    const isLargeScreen = useIsLargeScreen()

    return <div className={cn('w-full z-0 flex flex-col lg:flex-row justify-between large:px-32 lg:px-20 pb-20 lg:pb-44 items-center')} style={{ backgroundColor: color, transition: 'all 1s' }} ref={ref}>
        <h1 className={cn('lg:ml-10 leading-tight mt-24 lg:max-w-[26%] font-light text-4xl lg:text-5xl', color !== '#E6DED3' && 'text-white')} ref={isLargeScreen? topRef: null}>
            Do what's best for your body with <em className='font-sans'>three daily scores.</em>
        </h1>
        <div className='mt-11 lg:mt-[20%] lg:max-w-[30%] lg:text-white'>
            <p className={cn('leading-snug text-stone-800 text-lg mb-8', color !== '#E6DED3' && 'text-black')}>Sleep, Readiness, and Activity. Your scores tell you how your body feels and what your body needs, every second of every day. You'll know when you need more sleep, when you might be getting sick, when it's time to push yourself — and more — with a personalized experience on the Spir App.</p>
            <Button variant={'outline'} size={'lg'} className={cn('rounded-full text-black', color !== '#E6DED3' && 'text-blue-300 border-slate-600')}>Spir Experience</Button>
        </div>
        {!isLargeScreen && 
        <div ref={!isLargeScreen ? topRef : null} className='h-[80vh] mt-16'>
        <PhoneForMobile image={homePhone} />
        </div>}
    </div>
}

export default BestForBodySection