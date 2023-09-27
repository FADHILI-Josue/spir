'use client'
import { cn } from "@/lib/utils";
import { footerItem } from "@/utils/types";
import { ArrowDownAzIcon, ArrowUp01Icon } from "lucide-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const FooterList: FC<footerItem> = ({ title, members }) => {
    const [open, setOpen] = useState<boolean>(false);


    return (
        <div className="border-b w-full border-zinc-500" onClick={() => setOpen(!open)}>
            <div className="flex items-center text-stone-500">
                {open ? <ArrowDownAzIcon className="my-4 mx-2" /> : <ArrowUp01Icon className="my-4 mx-2" />}<span>{title}</span>
            </div>
            {open && <p className=" border-t w-full border-neutral-200 p-3 text-neutral-400">
                {members.map((e, i) => <Link href={e.link} key={i} className='text-[0.9em] text-main'>{e.title}</Link>)}
            </p>}
        </div>
    )
}

export default FooterList