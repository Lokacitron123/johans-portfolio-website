"use client";
import React from "react";
import { motion } from "framer-motion";

export const Divider = () => {
  return (
    <motion.div
      className='bg-gray-300/90 my-24 w-28 h-1 rounded-full hidden sm:block '
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
      }}
    />
  );
};
