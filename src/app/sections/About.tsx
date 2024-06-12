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
      <SectionHeading title='About Me' />
      <p className='mb-3 '>
        I&apos;m a full-stack web developer graduate who discovered my interest
        in coding when I was first introduced to HTML and CSS in a UX/UI design
        course back in the fall of 2020. Fast forward a bit, I decided that
        after that initial experience, I would pursue a career in coding. Now,
        as a proud graduate, I&apos;m eager to apply my skills and creativity to
        make the web a better place. I envision myself designing and building
        applications that not only look great but also add real value.
      </p>
      <p className='mb-3'>
        With a blend of technical skills, creativity, and a passion for
        continuous learning, I&apos;m ready to make a meaningful impact in the
        world of web development.
      </p>

      <p className='mb-3 '>
        When I&apos;m not absorbed in learning new concepts, tools, or creating
        web projects, I like to spend my time practicing karate, reading books,
        or gaming.
      </p>
    </motion.article>
  );
}
