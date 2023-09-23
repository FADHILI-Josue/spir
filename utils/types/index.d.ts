import { StaticImageData } from "next/image";

export interface INavbarLink {
    name: string,
    href: string,
}

export interface IbalanceSeeker {
    image: StaticImageData,
    desc: string
}