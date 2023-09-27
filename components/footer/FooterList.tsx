'use client'
import { arrowDown, arrowUp } from "@/assets";
import { cn } from "@/lib/utils";
import { footerItem } from "@/utils/types";
import { ArrowDownAzIcon, ArrowUp01Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const FooterList: FC<footerItem> = ({ title, members }) => {
    const [open, setOpen] = useState<boolean>(false);


    return (
        <div className="w-full border-b border-zinc-500" onClick={() => setOpen(!open)}>
            <div className="flex w-full items-center justify-between text-stone-500">
                <span>{title}</span>
                {open ? <Image src={arrowUp} alt="arrow donw svg" className="w-3 my-4 h-3" /> : <Image src={arrowDown} alt="arrow up svg" className="w-3 my-4 h-3" />}
            </div>
            {open && <p className=" w-full flex flex-col gap-3 border-t border-neutral-200 p-3 text-neutral-400">
                {members.map((e, i) => <Link href={e.link} key={i} className='text-[0.9em] text-main'>{e.title}</Link>)}
            </p>}
        </div>
    )
}

export default FooterList