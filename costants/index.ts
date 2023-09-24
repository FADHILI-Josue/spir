import { architechuralTodayLogo, fingersOnWater, manCalling, manWalking, usaTodayLogo, washingtonLogo } from "@/assets";
import { DevotionItem, INavbarLink, IbalanceSeeker } from "@/utils/types";

export const navbarLinks: INavbarLink[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Oura Experience",
        href: "/oura-experience",
    },
    {
        name: "The Pulse Blog",
        href: "/blog",
    },
    {
        name: "Oura for Business",
        href: "/bussiness",
    }

]

export const balance_seekers:IbalanceSeeker[] = [
    {
        image: washingtonLogo,
        desc: '"I’ve gotten some of the most immediately useful sleep insight from the latest Oura ring, which crams a bunch of sensors into a classy ring design"'
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
        desc: 'Oura was founded in Oulu, Finland with a singular focus: to improve the way we live our lives. We want everyone to realize health as a daily practice — and as a foundation for a balanced life.'
    },
    {
        image: fingersOnWater,
        title: 'Our approach',
        desc: 'We will always support your goals, whatever they are, on your journey of discovering what’s within. We aim to inspire awareness of the intimate connection between mind and body.'
    },
    {
        image: manCalling,
        title: 'Our commitment',
        desc: 'Oura takes data privacy seriously. We only use your data to power your experience and deliver your personal insights. We do not sell your data to third parties or use your data to sell advertising to other companies.'
    }
]