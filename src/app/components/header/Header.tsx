"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import MobileNavbar from "./navbar/MobileNavbar";
import SocialMenu from "./navbar/SocialMenu";

export function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className='sticky top-0 px-5 bg-gray-900 text-gray-50 z-50'>
      <nav className='flex justify-between items-center py-8 lg:py-4 px-2 relative z-10 '>
        <div className='flex items-center gap-3 '>
          <Link href={"/"}>
            <p className='font-bold text-3xl'>
              Johan <span className='text-red-600/90'>Lindell</span>
            </p>
          </Link>
        </div>
        {/* Normal nav */}
        <div className='lg:flex hidden gap-12 text-md '>
          <ul className='flex gap-5'>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.link} className='relative group'>
                  <span className='relative'>{link.name}</span>
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 mt-2 group-hover:w-full transition-all ease-out duration-300 bg-red-600/90' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Burger toggle */}
        <div className='lg:hidden'>
          <motion.button
            initial='hide'
            animate={mobileNav ? "show" : "hide"}
            onClick={toggleMobileNav}
            className='flex flex-col space-y-1  '
          >
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: 45,
                  y: 5,
                },
              }}
              className='w-6 bg-white h-px block'
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  opacity: 1,
                },
                show: {
                  opacity: 0,
                },
              }}
              className='w-6 bg-white h-px block'
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: -45,
                  y: -5,
                },
              }}
              className='w-6 bg-white h-px block'
            ></motion.span>
          </motion.button>
        </div>
        <div className='hidden lg:block'>
          <SocialMenu toggleMobileNav={toggleMobileNav} />
        </div>
      </nav>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <MobileNavbar toggleMobileNav={toggleMobileNav} />
          </MotionConfig>
        )}
      </AnimatePresence>
    </header>
  );
}
