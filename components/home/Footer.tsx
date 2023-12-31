import { FC } from 'react'
import EmailInput from '../EmailInput'
import Link from 'next/link'
import { footerData, footerIcons, loweFooterData } from '@/costants'
import Image from 'next/image'
import { accepted } from '@/assets'
import Logo from '../Logo'
import FooterList from '../footer/FooterList'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <div className='w-full bg-[#E6DED3]'>
        <div className='mb-20 grid w-full grid-cols-1 px-10 lg:grid-cols-5 lg:px-32'>
            <div className="col-span-2 self-start">
                <div className=''><Logo /></div>
                <h3 className='mb-12 mt-20 md:max-w-[70%] text-xl text-main'>Receive the latest articles, tips, and offers from Spir</h3>
                <EmailInput />
                <p className='my-5 text-sm text-main'>We care about protecting your data. <br />Read more in our <Link href={'https://spir.com/privacy-policy'} className='underline'>Privacy policy.</Link></p>
            </div>
            <div className='flex w-full cursor-pointer flex-col lg:hidden'>

                {footerData.map((e, i) => <div key={i} className="flex flex-col items-start space-y-4 large:w-full">
                    <FooterList {...e} />
                </div>)}
            </div>
        {footerData.map((e, i) => <div key={i} className="hidden flex-col items-start space-y-4 lg:flex">
            <h3 className='text-neutral-500'>{e.title}</h3>
            {e.members.map((e, i) => <Link href={e.link} key={i} className='text-[0.9em] text-main'>{e.title}</Link>)}
        </div>)}
        </div>
        <div className="mx-8 flex md:items-center flex-col md:flex-row justify-between lg:ml-32 lg:mr-5">
            <div className="flex items-center gap-5">

                <div className="iconfootercontainer">
                    <svg className='iconfooter' role="img" viewBox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg>
                </div>
                <div className="iconfootercontainer">
                    <svg role="img" viewBox="0 0 16 16" width="1rem" xmlns="http://www.w3.org/2000/svg" fill="black" className='iconfooter'>
                        <title>X (formerly known as Twitter)</title>
                        <path d="M0.837831 0.0463867L6.39553 7.47756L0.802734 13.5194H2.06145L6.95793 8.22968L10.9142 13.5194H15.1976L9.32721 5.67025L14.5329 0.0463867H13.2742L8.76481 4.91813L5.12128 0.0463867H0.837831ZM2.68886 0.973558H4.65669L13.3463 12.5921H11.3785L2.68886 0.973558Z" fill="currentColor"></path>
                    </svg>
                </div>

                <div className="iconfootercontainer">
                    <svg className='iconfooter' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor"><title>Facebook</title><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </div>


                <div className="iconfootercontainer">
                    <svg className='iconfooter' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                </div>
                <div className="iconfootercontainer">
                    <svg className='iconfooter' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                </div>
                <div className="iconfootercontainer">
                    <svg className='iconfooter' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1rem" fill="currentColor"><title>Pinterest</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path></svg>
                </div>
            </div>
            <div className=' mt-10 md:mt-0 '>
                <Image src={accepted} alt='accepted' />
            </div>
        </div>
        <div className="mx-8 my-10 flex flex-col md:flex-row justify-between lg:ml-32 lg:mr-5 large:gap-2">
            <div className="text-sm text-stone-500 order-last md:order-1">
                <p>© 2023 Spîr Health Oy. All Rights Reserved.</p>
                <p>Spîr are trademarks of Spîr Health Oy and may not be used without permission.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-main">
                {loweFooterData.map((e, i) => <Link key={i} href={e.link}>{e.title}</Link>)}
            </div>
        </div>
    </div>
}

export default Footer