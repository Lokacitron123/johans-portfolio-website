"use client";

import { SectionHeading } from "@/app/components/ui/Heading";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.article
      className='w-full mx-auto m-24 md:m-36'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading title='About' />
      <p className='mb-3  '>
        I&apos;m a fresh full-stack web developer graduate with a deep passion
        for the world of JavaScript, utilizing tools like React and Next.js
        React to create web applications. The unique combination of creativity,
        logic, technology and never running out of new things to discover,
        drives my excitement and passion for web development.
      </p>
      <br />
      <p className='mb-3  '>
        When I&apos;m not absorbed in learning new concepts, tools or creating
        web projects I like to spend my time practising karate, reading books or
        gaming.
      </p>
    </motion.article>
  );
}
