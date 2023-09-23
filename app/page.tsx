import MainTemplate from '@/templates/MainTemplate'
import HomeBanner from './components/home/HomeBanner'
import Navbar from './components/Navbar'
import { Button } from '@/components/ui/button'
import Images from './components/home/Images'
import Marquee from 'react-fast-marquee'
import { balance_seekers } from '@/costants'
import Image from 'next/image'
import { Dot } from 'lucide-react'

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
          <div className='w-full sticky top-0'>
            <Images />
          </div>
            <Marquee speed={100} className='w-full bg-white pt-10 pb-14 gap-2'>
              {balance_seekers.map((e, i) => <div className='flex items-center gap-2'>
                <Dot className='h-10 w-10 text-slate-900' />
                <Image key={i} src={e.image} alt='balance seeker' className='h-10' />
                <p className='text-2xl text-stone-800'>{e.desc}</p>
              </div>)}
            </Marquee>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>
          <div>alskfjaslkdfj</div>

        </div>
      </MainTemplate>
    </main>
  )
}
