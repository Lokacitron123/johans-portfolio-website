"use client";

import React from "react";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

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
    <section className='max-w-lg text-center mb-28 sm:mb-40'>
      <ul className='flex flex-wrap justify-center gap-2 text-lg '>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='text-gray-50 bg-gray-900 dark:text-gray-900 dark:bg-gray-50 border border-black/[0.1] rounded-xl px-5 py-3'
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
    </section>
  );
};
