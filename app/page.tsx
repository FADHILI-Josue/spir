import MainTemplate from '@/templates/MainTemplate'
import HomeBanner from '../components/home/HomeBanner'
import Navbar from '../components/Navbar'
import { Button } from '@/components/ui/button'
import Images from '../components/home/Images'
import Marquee from 'react-fast-marquee'
import { balance_seekers, devotions } from '@/costants'
import Image from 'next/image'
import { Dot, Phone } from 'lucide-react'

import PhoneComponent from '@/components/PhoneComponent'
import BestForBodySection from '../components/home/BestForBodySection'
import YourComponent from '@/components/Cop'
import Sleeptight from '@/components/home/sleep-tight'
import Activity from '@/components/home/activity'
import Readiness from '@/components/home/Readiness'
import AccurateFinger from '@/components/home/AccurateFinger'
import { cn } from '@/lib/utils'
import OuraJourney from '@/components/home/OuraJourney'
import Link from 'next/link'
import Footer from '@/components/home/Footer'

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      <MainTemplate isMain>
        <div className='bg-white text-sm z-20 w-full flex justify-center items-center py-3'>
          <p className='text-slate-800 font-semibold'> <a href="#" className='underline'>Shop now</a> and use your HSA/FSA funds at check out.</p>
        </div>
        <Navbar />
        <HomeBanner />
        <div className="flex flex-col mt-[70vh] items-center w-full rounded-t-[3rem] bg-stone-200 z-0" >
          <div className='w-full flex justify-around mt-20 mb-10'>
            <span className='text-slate-900 text-5xl max-w-md leading-tight'>Your health. Your style. Your way.</span>
            <div className="flex flex-col justify-between">
              <p className='text-gray-900 max-w-md'>Sleek, comfortable, accurate. Oura Ring fits seamlessly into your life, all night and all day.</p>
              <Button className='w-fit py-2 rounded-full px-4' variant={'outline'} size={'lg'}>Shop Now</Button>
            </div>
          </div>
          {/* IMAGES */}
          <div className='w-full sticky -z-10 top-0'>
            <Images />
          </div>
          <Marquee speed={100} className='w-full bg-white pt-10 pb-14 gap-2'>
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
          <div className='w-full flex flex-col items-center bg-[#E6DED3] space-y-6 pb-16'>
            <h1 className='text-5xl font-light'>Trusted by experts.</h1>
            <p className='max-w-2xl text-stone-900 text-xl text-center'>Oura partners with experts across the field to conduct research and advise in development of features.</p>
            <Button variant={'outline'} size={'lg'} className={'rounded-full px-8 py-[1.7rem] text-md'}>Shop Now</Button>
          </div>
          <div className='w-full bg-[#E6DED3]'>to add image carousel</div>
          <div className='w-full bg-[#E6DED3] flex flex-col items-center space-y-8 pb-20'>
            <h1 className='text-6xl tracking-normal text-center leading-none max-w-4xl font-extralight'>We exist to <em className='font-serif'>empower</em> everyone to realize health as a daily practice.</h1>
            <Button variant={'outline'} size={'lg'} className='rounded-full p-6 border-stone-400 text-stone-700'>Learn More About Oura</Button>
          </div>
          <div className='w-full flex flex-col items-center bg-[#E6DED3]  px-36'>
            <div className="grid w-full grid-cols-3 gap-20">
              {devotions.map((e, i) => <div key={i} className='space-y-5'>
                <Image src={e.image} alt={e.title} />
                <h2 className='font-medium text-lg'>{e.title}</h2>
                <p className='text-md'>{e.desc}</p>
              </div>)}
            </div>
          </div>
          <OuraJourney />
          <div className='w-full flex flex-col items-center px-32 bg-[#E6DED3]'>
            <Link href={'https://ouraring.com/blog/how-accurate-is-oura'} className="w-full text-stone-900 border-y py-5 my-20 border-slate-400">
            * <span className='underline'>ouraring.com/blog/how-accurate-is-oura</span>
            </Link>

          </div>
          <Footer />
        </div>
      </MainTemplate>
    </main>
  )
}
