"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type LinkProps = {
  name: string;
  link: string;
};

export default function LinkItem({ name, link }: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div>
      <Link href={link} className="relative group">
        <span className="relative">{name}</span>
        <span
          className={`absolute bottom-0 left-0 h-0.5 mt-2 transition-all ease-out duration-300 bg-red-600/90 
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
        />
      </Link>
    </div>
  );
}
