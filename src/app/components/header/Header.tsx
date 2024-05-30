import { links } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import profilePic from "../../../public/profilePic.png";
import { Github, Linkedin } from "lucide-react";
import { ThemeSwitchBtn } from "../buttons/ThemeSwitchBtn";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

export function Header() {
  return (
    <header className='flex justify-evenly items-center flex-col md:flex-row sticky top-0 p-5 bg-gray-900 text-gray-50 z-50'>
      <div className='flex items-center gap-3'>
        <Link href={"/"}>
          <p className='font-bold text-2xl'>
            Johan <span className='text-red-600/90'>Lindell</span>
          </p>
        </Link>
      </div>
      <nav>
        <ul className='flex gap-5'>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.link} className='relative group'>
                <span className='relative'>{link.name}</span>
                <span className='absolute bottom-0 left-0 w-0 h-0.5 mt-2 group-hover:w-full transition-all ease-out duration-300 bg-red-600/90' />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul aria-label='social links' className='flex gap-3'>
        <Link
          href={"https://www.linkedin.com/in/johan-lindell-b08222251/"}
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full w-fit outline-none focus:scale-[1.15]  hover:text-gray-950 hover:scale-[1.15]   active:scale-105 transition border border-black/10'
        >
          <Linkedin aria-label='LinkedIn Profile Link' />
        </Link>
        <Link
          href={"https://github.com/Lokacitron123"}
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full w-fit outline-none focus:scale-[1.15]  hover:text-gray-950 hover:scale-[1.15]   active:scale-105 transition border border-black/10'
        >
          <Github aria-label='GitHub Profile Link' />
        </Link>
      </ul>
      <div>
        {/* <ThemeSwitcher /> */}
        <ThemeSwitchBtn />
      </div>
    </header>
  );
}
