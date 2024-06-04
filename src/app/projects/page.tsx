import React from "react";
import { SectionHeading } from "../components/ui/Heading";
import ProjectCardTwo from "../components/projectcard/ProjectCardTwo";
import { Divider } from "../components/ui/Divider";

export default function Projects() {
  return (
    <section className='mx-auto mb-10'>
      <SectionHeading title='Projects' />
      <div className='mx-auto flex flex-col justify-center items-center gap-20'>
        <ProjectCardTwo skills={["TailwindCSS", "Next.js", "React"]} />
        <Divider />
        <ProjectCardTwo
          skills={["TailwindCSS", "Next.js", "React", "Sanity.io"]}
        />
        <Divider />
        <ProjectCardTwo
          skills={[
            "SCSS",
            "Next.js",
            "React",
            "Express.js",
            "Mongoose",
            "Framer-Motion",
          ]}
        />
        <Divider />
        <ProjectCardTwo skills={["TailwindCSS", "Next.js", "React"]} />
      </div>
    </section>
  );
}
