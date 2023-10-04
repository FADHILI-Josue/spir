import MainTemplate from '@/templates/MainTemplate'
import HomeBanner from '../components/home/HomeBanner'
import Navbar from '../components/Navbar'
import { Button } from '@/components/ui/button'
import Images from '../components/home/Images'
import Marquee from 'react-fast-marquee'
import { balance_seekers, devotions } from '@/costants'
import Image from 'next/image'
import { Dot } from 'lucide-react'

import PhoneComponent from '@/components/PhoneComponent'
import BestForBodySection from '../components/home/BestForBodySection'
import Sleeptight from '@/components/home/sleep-tight'
import Activity from '@/components/home/activity'
import Readiness from '@/components/home/Readiness'
import AccurateFinger from '@/components/home/AccurateFinger'
import { cn } from '@/lib/utils'
import OuraJourney from '@/components/home/OuraJourney'
import Link from 'next/link'
import Footer from '@/components/home/Footer'
import Testimonial from '@/components/Testimonial'
import ScrollHeader from '@/components/ScrollHeader'
import MovingRectangle from '@/components/SideScroll'
import Intro from '@/components/home/Intro'

export default function Home() {
  return (
    <main className='relative w-full large:overflow-hidden'>
        
      <MovingRectangle size={23} />
      <MainTemplate isMain>
        <ScrollHeader />
        <div className='relative z-20 flex w-full items-center justify-center bg-white py-3 text-sm'>
          <p className='font-semibold text-slate-800'> <a href="#" className='underline'>Shop now</a> and use your HSA/FSA funds at check out.</p>
        </div>
        <Navbar />
        <HomeBanner />
        <div className="items z-0 mt-[70vh] flex w-full flex-col rounded-t-[2rem] bg-[#E6DED3]" >
          <Intro />
          <div className='sticky top-0 -z-10 flex w-full flex-col items-center'>
            <Images />
          </div>
          <Marquee speed={100} className='w-full gap-2 bg-white pb-14 pt-10'>
            {balance_seekers.map((e, i) => <div key={i} className='flex items-center gap-2'>
              <Dot className='h-10 w-10 text-slate-900' />
              <Image key={i} src={e.image} alt='balance seeker' className='h-10' />
              <p className='text-2xl text-stone-800'>{e.desc}</p>
            </div>)}
          </Marquee>
          <PhoneComponent />
          <BestForBodySection />
          <Sleeptight />
          <Activity />
          <Readiness />
          <AccurateFinger />
          <div className='flex w-full px-4 md:mx-0 flex-col items-center space-y-6 bg-[#E6DED3] pb-16'>
            <h1 className='text-3xl md:text-5xl font-light'>Trusted by experts.</h1>
            <p className='max-w-2xl md:ext-center text-xl text-stone-900'>Spir partners with experts across the field to conduct research and advise in development of features.</p>
            <Button variant={'outline'} size={'lg'} className={' rounded-full px-8 py-[1.7rem]'}>Shop Now</Button>
          </div>
          <div className='w-full bg-[#E6DED3]'>
            <Testimonial />
          </div>
          <div className='flex w-full flex-col items-center space-y-8 bg-[#E6DED3] pb-20 px-10 md:px-20 lg:px-0'>
            <h1 className='max-w-4xl text-center text-3xl md:text-[2.4rem] font-extralight leading-none tracking-normal lg:text-6xl'>We exist to <em className='font-sans'>empower</em> everyone to realize health as a daily practice.</h1>
            <Button variant={'outline'} size={'lg'} className='rounded-full border-stone-400 p-6 text-stone-700'>Learn More About Spir</Button>
          </div>
          <div className='flex w-full flex-col items-center bg-[#E6DED3] px-10 md:px-24 pb-20  lg:px-36'>
            <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-3">
              {devotions.map((e, i) => <div key={i} className='space-y-5'>
                <Image src={e.image} alt={e.title} className='w-full'/>
                <h2 className='text-lg font-medium'>{e.title}</h2>
                <p className=''>{e.desc}</p>
              </div>)}
            </div>
          </div>
          <OuraJourney />
          <div className='flex w-full flex-col items-center bg-[#E6DED3] px-10 md:px-32'>
            <Link href={'#'} className="my-20 w-full border-y border-slate-400 py-5 text-stone-900">
              * <span className='underline'>spir.com/blog/how-accurate-is-spir</span>
            </Link>

          </div>
          <Footer />
        </div>
      </MainTemplate>
    </main>
  )
}
