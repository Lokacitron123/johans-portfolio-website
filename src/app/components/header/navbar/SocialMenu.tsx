"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ThemeSwitchBtn } from "../../buttons/ThemeSwitchBtn";

type SocialMenuProps = {
  toggleMobileNav?: () => void;
};

export default function SocialMenu({ toggleMobileNav }: SocialMenuProps) {
  return (
    <motion.div
      className='flex gap-3'
      variants={{
        open: { y: "0%", opacity: 1 },
        closed: { y: "25%", opacity: 0 },
      }}
    >
      <ul aria-label='social links' className='flex gap-3'>
        <Link
          href={"https://www.linkedin.com/in/johan-lindell-b08222251/"}
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full w-fit outline-none focus:scale-[1.15]  hover:text-gray-950 hover:scale-[1.15]   active:scale-105 transition border border-black/10'
        >
          <Linkedin aria-label='LinkedIn Profile Link' />
        </Link>
        <Link
          href={"https://github.com/Lokacitron123"}
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full w-fit outline-none focus:scale-[1.15]  hover:text-gray-950 hover:scale-[1.15]   active:scale-105 transition border border-black/10'
        >
          <Github aria-label='GitHub Profile Link' />
        </Link>
      </ul>
      <ThemeSwitchBtn />
    </motion.div>
  );
}
