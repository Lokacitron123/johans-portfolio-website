import React from "react";
import Image from "next/image";
import PlayWrightPic from "../../../../public/playwright.png";
import Link from "next/link";

interface ProjectCardTwoProps {
  skills: string[];
}

export default function ProjectCardTwo({ skills }: ProjectCardTwoProps) {
  return (
    <div className='flex flex-col justify-center items-center p-8 md:flex-row gap-10 '>
      <div className='flex flex-col justify-center items-center '>
        <Image
          src={PlayWrightPic}
          alt='PlayWright Logo'
          width={400}
          height={400}
          quality={95}
          className=''
        />
        <div>
          <h4 className='text-center text-2xl mt-3'>Skills</h4>
          <ul className='mt-5 flex flex-wrap justify-center gap-2 text-lg max-w-96'>
            {skills.map((skill, index) => (
              <li
                key={index}
                className='text-gray-50 bg-gray-900 dark:text-gray-900 dark:bg-gray-50 border border-black/[0.1] rounded-xl px-2 py-2'
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className='h-full w-2 rounded-md bg-red-600/90 block' /> */}
      <div className='max-w-96 flex flex-col gap-5 '>
        <h3 className='text-4xl text-center'>Project Name</h3>
        <p>This Project was made ...</p>
        <div className='flex items-center justify-center'>
          <Link
            href='https://github.com/Lokacitron123'
            className='relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group'
          >
            <span className='absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0' />
            <span className='relative'>Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
