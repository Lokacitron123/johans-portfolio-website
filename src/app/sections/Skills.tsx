"use client";

import React from "react";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/ui/Heading";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Stagering effect due to the multiplication from each rendered li and its index value
    },
  }),
};

export const Skills = () => {
  return (
    <section className='w-full text-center m-24 md:m-36'>
      <SectionHeading title='Skills' />

      <div className='flex flex-col md:flex-row gap-6'>
        <div className='flex flex-col justify-center gap-5 text-start'>
          <p>
            During my two years at Medieinstitutet vocational school, I had the
            opportunity to familiarize myself with many tools and frameworks,
            ranging from the MERN stack to creating themes in WordPress and
            learning best practices for agile project methodologies. I have
            acquired a strong foundation and understanding of web development
            and a drive for continious learning which I believe is reflected in
            the range of my skillset.
          </p>
          <br />

          <p className='relative w-fit mx-auto'>
            See some of my projects.{" "}
            <span className='absolute w-full -bottom-1 left-0 h-0.5  bg-red-600/90' />
          </p>

          <Link
            href='/contact'
            className='relative max-w-fit bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group mx-auto'
          >
            <span className='absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0' />
            <span className='relative'>Projects</span>
          </Link>
        </div>
        <ul className='flex flex-wrap justify-center gap-2 text-lg '>
          {skillsData.map((skill, index) => (
            <motion.li
              key={index}
              className='text-gray-50 bg-gray-900 dark:text-gray-900 dark:bg-gray-50 border border-black/[0.1] rounded-xl px-3 py-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
