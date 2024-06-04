import React from "react";

type SectionHeadingProps = {
  title: string;
};

export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className='mt-8 mb-16'>
      <h2 className='relative text-3xl md:text-5xl font-bold capitalize  text-center'>
        <span className='relative z-10'>{title}</span>
        <span className='absolute w-[150px] bg-red-600/90 left-1/2 transform  -translate-x-1/5 top-1/2  -translate-y-1/5 h-8' />
      </h2>
    </div>
  );
};
