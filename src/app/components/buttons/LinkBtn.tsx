import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  text: string;
  href: string;
};

export const LinkBtn = ({ children, text, href }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="relative bg-white rounded-lg overflow-hidden text-gray-900 px-5 py-2.5 group"
    >
      {children}
      <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-red-600/80 left-0 top-0" />
      <span className="relative">{text}</span>
    </Link>
  );
};
