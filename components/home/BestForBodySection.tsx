'use client'
import { useConfig } from '@/app/context/configProvider';
import { homePhone, sleepPhone } from '@/assets';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';


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

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const rect = refa?.current?.getBoundingClientRect();
    //       console.log(rect);
    //     //   setIsSticky(rect?.top = rect?.current?.offsetHeight);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);


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

    useEffect(() => {
        if (reachTop) {
            setImage(sleepPhone)
            setColor('#101926')
        }
        else {
            setImage(homePhone)
            setColor('white')
        }
    }, [reachTop])

    return <div className={cn('w-full z-0 flex justify-between px-20 pb-44 items-center')} style={{ backgroundColor: color, transition: 'all 1s' }}>
        <h1 className={cn('ml-10 leading-tight mt-24 max-w-[26%] text-5xl', color !== 'white' && 'text-white')} ref={topRef}>
            Do what's best for your body with <em>three daily scores.</em>
        </h1>
        <div className='max-w-[30%] mt-[20%]'>
            <p className={cn('leading-snug text-stone-800 text-lg mb-8', color !== 'white' && 'text-white')}>Sleep, Readiness, and Activity. Your scores tell you how your body feels and what your body needs, every second of every day. You'll know when you need more sleep, when you might be getting sick, when it's time to push yourself — and more — with a personalized experience on the Oura App.</p>
            <Button variant={'outline'} size={'lg'} className={cn('rounded-full', color !== 'white' && 'text-blue-300 border-slate-600')}>Oura Experience</Button>
        </div>
    </div>
}

export default BestForBodySection