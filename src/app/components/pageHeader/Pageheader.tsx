"use client";

import React from "react";
import profilePic from "../../../../public/profilePic.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowBigDown,
  ArrowBigRight,
  ArrowRight,
  Github,
  Linkedin,
} from "lucide-react";

export default function Pageheader() {
  return (
    <section className='w-full  flex flex-col md:flex-row justify-between items-center m-24 md:m-36'>
      <motion.div
        className='min-w-50 relative'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={profilePic}
          width={400}
          height={400}
          quality={95}
          priority={true}
          alt='Profile picture of Johan, the owner and developer of this website.'
          className='h-48 w-48 md:h-64 md:w-64 rounded-full object-cover   shadow-xl'
        />
        {/* Background div */}
        <div className='absolute h-48 w-48 md:h-64 md:w-64 rounded-full bg-red-600/90 -z-10 -top-2 right-2' />
      </motion.div>
      <motion.div
        className='mt-10 flex flex-col gap-3'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className='font-bold text-3xl md:text-5xl text-center'>
          Johan <span className='text-red-600/90'>Lindell</span>
        </h1>
        <p className='text-center max-w-lg'>
          I am a fullstack developer that strives to create engaging, accessible
          and scaleable digital experiences using tools like, but not
          exclusively, MERN and Next.js.
        </p>
        <nav
          className='flex flex-col sm:flex-row justify-center items-center gap-3 px-4  mt-10 text-lg font-medium  '
          aria-label='Navigation Menu with Contact, CV Download, and Social Media Links'
        >
          <Link
            href='/contact'
            className='relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group'
          >
            <span className='absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0' />
            <span className='relative'>Contact Me</span>
          </Link>

          <a
            className='group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full w-fit outline-none    border border-black/10'
            href='/CV.pdf'
            download
          >
            Download CV
            <ArrowBigDown className='opacity-70 group-hover:translate-y-1 transition' />
          </a>
        </nav>
      </motion.div>
    </section>
  );
}
