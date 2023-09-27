import { architechuralTodayLogo, expertsGotlieb, expertsRobbins, facebook, fingersOnWater, instagram, manCalling, manWalking, mattWalker, pinterest, tiktok, twitter, usaTodayLogo, washingtonLogo, youtube } from "@/assets";
import { DevotionItem, INavbarLink, IbalanceSeeker, Testimonial, footerItem } from "@/utils/types";
import { StaticImageData } from "next/image";
import React from "react";

export const navbarLinks: INavbarLink[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Spir Experience",
        href: "/Spir-experience",
    },
    {
        name: "The Pulse Blog",
        href: "/blog",
    },
    {
        name: "Spir for Business",
        href: "/bussiness",
    }

]

export const balance_seekers:IbalanceSeeker[] = [
    {
        image: washingtonLogo,
        desc: '"I’ve gotten some of the most immediately useful sleep insight from the latest Spir ring, which crams a bunch of sensors into a classy ring design"'
    },
    {
        image: usaTodayLogo,
        desc: '"An absolute marvel of modern wearable technology"'
    },

    {
        image: architechuralTodayLogo,
        desc: '"The sleek, ultra-lightweight wearable is so much more than a conventional sleep tracker"'
    }

]

export const devotions:DevotionItem[] = [
    {
        image: manWalking,
        title: 'Our mission',
        desc: 'Spir was founded in Oulu, Finland with a singular focus: to improve the way we live our lives. We want everyone to realize health as a daily practice — and as a foundation for a balanced life.'
    },
    {
        image: fingersOnWater,
        title: 'Our approach',
        desc: 'We will always support your goals, whatever they are, on your journey of discovering what’s within. We aim to inspire awareness of the intimate connection between mind and body.'
    },
    {
        image: manCalling,
        title: 'Our commitment',
        desc: 'Spir takes data privacy seriously. We only use your data to power your experience and deliver your personal insights. We do not sell your data to third parties or use your data to sell advertising to other companies.'
    }
]

export const footerData:footerItem[] = [
    {
        title: 'Company',
        members: [
            {
                title: 'About Us',
                link: '#'
            },
            {
                title: 'Leadership',
                link: '#'
            },
            {
                title: 'Medical Advisory Board',
                link: '#'
            },
            {
                title: 'Research & Validation',
                link: '#'
            },
            {
                title: 'Press',
                link: '#'
            },
            {
                title: 'Careers',
                link: '#'
            }
        ]
    },
    {
        title: 'Solutions',
        members: [
            {
                title: 'Spir for Business',
                link: '#'
            },
            {
                title: 'Reproductive Health',
                link: '#'
            },
            {
                title: 'Developers',
                link: '#'
            }
        ]
    },
    {
        title: 'Support',
        members: [
            {
                title: 'Getting Started',
                link: '#'
            },
            {
                title: 'Membership',
                link: '#'
            },
            {
                title: 'My Account',
                link: '#'
            },
            {
                title: 'Spir on the Web',
                link: '#'
            },
            {
                title: 'Sizing',
                link: '#'
            },
            {
                title: 'Best Buy® U.S. Store Locator',
                link: '#'
            },
            {
                title: 'Help',
                link: '#'
            },
            {
                title: 'Contact',
                link: '#'
            },
            {
                title: 'Extra Charger',
                link: '#'
            }
        ]
    },
    
]
export const loweFooterData: {title: string, link: string}[]  = [
    {
        title: 'Terms & Conditions',
        link: '#'
    },
    {
        title: 'Privacy policy',
        link: '#'
    },
    {
        title: 'IP Notice',
        link: '#'
    },
    {
        title: 'Accessibility',
        link: '#'
    }
]
export const footerIcons:StaticImageData[]= [
    instagram,
    twitter,
    facebook,
    youtube,
    tiktok,
    pinterest
]

export const Testimonials: Testimonial[] = [
    {
        author_name: 'Dr. Matthew Walker, PhD',
        author_desc: 'Professor of Neuroscience, New York Times Bestseller and author of, “Why We Sleep”, and Scientific Advisor to Oura',
        Image: mattWalker,
        quote: 'One cannot understand their health, nor make changes and see how those changes make a difference, unless the measuring tool is of acceptable accuracy, and consistently accurate.'
    },
    {
        author_name: 'Dr. Rebecca Robbins, PhD',
        author_desc: "Instructor in Medicine at Harvard Medical School, Associate Scientist at Brigham and Women's Hospital, and Advisor to Oura",
        Image: expertsRobbins,
        quote: 'Monitoring your sleep can help you stay on track toward other health and lifestyle goals, particularly when you are also fine-tuning your daily routine to optimize sleep. Tracking can give you a sense of how those changes impact your sleep, if other aspects of your day are held constant.'
    },
    {
        author_name: 'Neta Gotlieb, PhD',
        author_desc: "Lead Clinical Research Scientist at Oura, researching and developing solutions focused on women's health",
        Image: expertsGotlieb,
        quote: "Women's and reproductive health have historically been under served by medicine, science, and tech, which has created a significant knowledge gap in this space. As we grow in our understanding of reproductive physiology and its relation to other systems in our body, we open a window to better understanding our overall health so that we can make more informed choices."
    }
]