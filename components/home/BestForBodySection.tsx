'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { FC, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';


interface BestForBodySectionProps {

}

const BestForBodySection: FC<BestForBodySectionProps> = ({ }) => {
    const { ref, inView, entry } = useInView({
        threshold: 1,
    });
    useEffect(()=>{
        console.log(entry?.intersectionRatio)
        entry?.intersectionRatio == 1 && console.log('yooooo')
    }, [entry?.intersectionRatio])


    const refa = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
          const rect = refa?.current?.getBoundingClientRect();
          console.log(rect);
        //   setIsSticky(rect?.top = rect?.current?.offsetHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return <>
        <h1 className={cn('ml-10 leading-tight mt-24 max-w-[26%] text-5xl', entry?.intersectionRatio! < 1 && 'bg-slate-600')} ref={ref} >
            Do what's best for your body with <em>three daily scores.</em>
        </h1>
        <div className='max-w-[30%] mt-[20%]'>
            <p className='leading-snug text-stone-800 text-lg mb-8'>Sleep, Readiness, and Activity. Your scores tell you how your body feels and what your body needs, every second of every day. You'll know when you need more sleep, when you might be getting sick, when it's time to push yourself — and more — with a personalized experience on the Oura App.</p>
            <Button variant={'outline'} className='rounded-full'>Oura Experience</Button>
        </div>
    </>
}

export default BestForBodySection