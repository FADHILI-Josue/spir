'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }:{toggle: any}) => (
  <button onClick={toggle}>
    <svg width="23" className="fill-green-500" height="23" viewBox="0 0 23 23">
      <Path
      className="fill-red-600"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        style={{fill: 'blue'}}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
        style={{fill: 'blue'}}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        style={{fill: 'blue'}}
      />
    </svg>
  </button>
);

 const MenuIcon:React.FC<{isOpen:boolean, toggleOpen: ()=>void}> = ({isOpen, toggleOpen}) => {
  const containerRef = React.useRef(null);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={300}
      ref={containerRef}
      className={cn("translate-x-16 w-fit z-50", {'text-red-500':isOpen})}
    >
      <MenuToggle toggle={() => toggleOpen()}/>
    </motion.div>
  );
};


export default MenuIcon

