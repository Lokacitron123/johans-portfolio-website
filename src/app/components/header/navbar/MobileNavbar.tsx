"use client";

import { links } from "@/lib/data";
import React from "react";
import LinkItem from "./LinkItem";
import { motion } from "framer-motion";
import SocialMenu from "./SocialMenu";

type MobileNavbarProps = {
  toggleMobileNav: () => void;
};

export default function MobileNavbar({ toggleMobileNav }: MobileNavbarProps) {
  return (
    <motion.nav
      key='mobileNav' // Required by AnimatePresence to track presence in tree
      variants={{
        open: {
          y: "0%",
          transition: { when: "beforeChildren", staggerChildren: 0.03 },
        },
        closed: {
          y: "-100%",
          transition: { when: "afterChildren", staggerChildren: 0.01 },
        },
      }}
      initial='closed'
      animate='open'
      exit='closed' // plays before the component unmounts thanks to AnimatePresence wrapper
      className='fixed inset-0 flex flex-col justify-center items-center text-center lg:hidden gap-4 bg-gray-900'
    >
      <ul className='flex flex-col uppercase text-4xl gap-5'>
        {links.map((link, index) => (
          <motion.li
            key={index}
            variants={{
              open: { y: "0%", opacity: 1 },
              closed: { y: "25%", opacity: 0 },
            }}
            onClick={toggleMobileNav}
          >
            <LinkItem name={link.name} link={link.link} />
          </motion.li>
        ))}
      </ul>
      <motion.div
        className='bg-gray-300/90 my-12 w-28 h-1 rounded-full'
        variants={{
          open: { y: "0%", opacity: 1 },
          closed: { y: "25%", opacity: 0 },
        }}
      />
      <SocialMenu />
    </motion.nav>
  );
}
