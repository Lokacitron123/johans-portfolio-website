import Link from "next/link";
import React from "react";

type LinkProps = {
  name: string;
  link: string;
};

export default function LinkItem({ name, link }: LinkProps) {
  return (
    <div>
      <Link href={link} className='relative group'>
        <span className='relative'>{name}</span>
        <span className='absolute bottom-0 left-0 w-0 h-0.5 mt-2 group-hover:w-full transition-all ease-out duration-300 bg-red-600/90' />
      </Link>
    </div>
  );
}
