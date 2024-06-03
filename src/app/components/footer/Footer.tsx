import React from "react";
import SocialMenu from "../header/navbar/SocialMenu";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../ui/Heading";

export default function Footer() {
  return (
    <footer className='w-full p-5 px-4 text-center text-gray-50 bg-gray-900'>
      <p className='mb-2 text-lg'>&copy; 2024 Johan Lindell.</p>
    </footer>
  );
}
