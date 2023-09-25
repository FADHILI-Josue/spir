import { FC } from 'react'
import Carousel from './testimonial/carousel'
import SideImage from './testimonial/SideImage'
import { fitness } from '@/assets'

interface TestimonialProps {
  
}

const Testimonial: FC<TestimonialProps> = ({}) => {
  return <div className='w-full grid grid-cols-3'>
    {/* <Carousel /> */}
    {/* <SideImage imageUrl={fitness} altText='hello world'/> */}
    <div className=""></div>
    <div className="">
        <Carousel />
    </div>
    <div className=""></div>
  </div>
}

export default Testimonial