import { StaticImageData } from "next/image";

export interface INavbarLink {
    name: string,
    href: string,
}

export interface IbalanceSeeker {
    image: StaticImageData,
    desc: string
}

export interface DevotionItem {
    image: StaticImageData,
    title: string,
    desc: string
}

export interface footerItem {
    title: string,
    members: {
        link: string,
        title: string
    }[]
}

type SectionName = "bestForBody" | "sleepTight" | "fitness" | "readiness"

export interface Testimonial {
    Image: StaticImageData,
    quote: string,
    author_name: string,
    author_desc: string
}