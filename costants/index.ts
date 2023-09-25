import { architechuralTodayLogo, expertsGotlieb, expertsRobbins, facebook, fingersOnWater, instagram, manCalling, manWalking, mattWalker, pinterest, tiktok, twitter, usaTodayLogo, washingtonLogo, youtube } from "@/assets";
import { DevotionItem, INavbarLink, IbalanceSeeker, footerItem } from "@/utils/types";
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

export const IMAGES: StaticImageData[] = [
    mattWalker,
    expertsGotlieb,
    expertsRobbins
]