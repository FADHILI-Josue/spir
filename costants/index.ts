import { architechuralTodayLogo, usaTodayLogo, washingtonLogo } from "@/assets";
import { INavbarLink, IbalanceSeeker } from "@/utils/types";

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