import React from "react";
import { SectionHeading } from "../components/ui/Heading";

export default function Blogs() {
  return (
    <section className='h-screen  mx-auto'>
      <SectionHeading title='Blogs' />
      <div className=' flex flex-col items-center justify-center'>
        <p>Sorry, no blogs available. Please come by later.</p>
      </div>
    </section>
  );
}
