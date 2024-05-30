import React from "react";
import PlayWrightPic from "../../../../public/playwright.png";
import Image from "next/image";
import { Github } from "lucide-react";

export default function ProjectCard() {
  return (
    <section className=''>
      <div className='flex flex-col rounded-md overflow-hidden'>
        <div className='relative group'>
          <Image
            src={PlayWrightPic}
            alt='PlayWright Logo'
            width={400}
            height={400}
            quality={95}
            className='group-hover:opacity-50 transition-opacity duration-300'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <p className='text-white p-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit, rem pariatur! Quidem omnis iusto odit, facere quasi
              rerum hic numquam tempora iure. Fugiat deleniti quos labore animi
              voluptas doloribus itaque?
            </p>
          </div>
        </div>
        <div className='w-full flex justify-between p-3 bg-gray-50 text-gray-950'>
          <h3>Testing with PlayWright</h3>
          <a href='https://github.com/Lokacitron123'>
            {" "}
            <Github />
          </a>
        </div>
      </div>
    </section>
  );
}
