"use client";

import { SectionHeading } from "@/app/components/ui/Heading";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.article
      className='font-bold'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading title='About' />
      <p className='mb-3 text-start max-w-[500px] '>
        I recently graduated from the vocational school, Medieinstitutet, where
        I studied full-stack web development for 2 years. During my studies, I
        had the opportunity to familiarize myself with various technologies,
        ranging from creating full-stack projects and working with APIs, both
        homemade as well as third-party, to working with WordPress and PHP,
        agile development, and putting it into practice in internships.
      </p>
      <br />
      <p className='mb-3 text-left max-w-[500px]'>
        When I am not tinkering on a project or learning various tools I enjoy
        practising Karate, reading books or develop
      </p>
    </motion.article>
  );
}
