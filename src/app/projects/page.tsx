import React from "react";
import { SectionHeading } from "../components/ui/Heading";
import ProjectCard from "../components/projectcard/ProjectCard";

export default function Projects() {
  return (
    <>
      <SectionHeading title='Projects' />
      <div className='mx-auto flex justify-center flex-wrap gap-10'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
